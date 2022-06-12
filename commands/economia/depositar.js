const Discord = require("discord.js");

module.exports = {
  name: 'depositar',
  aliases: ['depósito', 'guardar', 'deposit', 'save'],
  async execute (client, message, args, database) {

  let dbmoney = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
  let dbbanco = await database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).once('value');
  let total = Number(args[0]);
  if(!total) return message.reply("você deve me dizer quanto quer depositar no banco!")
  if(total > dbmoney.val().coins) return message.reply("Você não pode depositar mais do que tem!")
  if(total < 0) return message.reply("Você deve depositar um número acima de 0!")
  
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
    coins: dbmoney.val().coins - total
  });
  database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).update({
    sacos: dbbanco.val().sacos + total
  });
  let ab = new Intl.NumberFormat('pt-BR').format(total)
  let embed = new Discord.MessageEmbed()
.setTitle("Depósito!")
.setTimestamp()
.setColor('#2F3136')
.setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
.setDescription(`${message.author} depositou **${ab} coins** em seu banco!`)
message.channel.send(embed)
},
}