const Discord = require("discord.js");
module.exports = {
  name: 'sacar',
  aliases: ['saque', 'extrair'],
  async execute (client, message, args, database, config) {
  let dbmoney = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
  let dbbanco = await database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).once('value');
  
  let total = Number(args[0]);
  if(!total) return message.reply("você deve me dizer quanto quer sacar do banco!")
  if(total > dbbanco.val().sacos) return message.reply("Você não pode sacar mais do que tem!")
  if(total < 0) return message.reply("você deve sacar um número acima de 0!")
  
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
  coins: dbmoney.val().coins + total
  });
  database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).update({
    sacos: dbbanco.val().sacos - total
  });
  let ab = new Intl.NumberFormat('pt-BR').format(total)
  let embed = new Discord.MessageEmbed()
.setTitle("Saque!")
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
.setColor('#2F3136')
.setDescription(`${message.author} sacou **${ab} coins** de seu banco!`)
message.channel.send(embed)
},
}