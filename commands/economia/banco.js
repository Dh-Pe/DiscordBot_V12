const Discord = require("discord.js");

module.exports = {
  name: 'banco',
  aliases: ['conta', 'saldo', 'bal'],
  async execute (client, message, args, database) {
  let db = await database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).once('value');
  let ab = new Intl.NumberFormat('pt-BR').format(db.val().sacos);
  let embed = new Discord.MessageEmbed()
  .setTitle("Banco!")
  .addField('Membro:', message.author)
  .addField('Saldo:', ab+' coins')
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .setColor('#2F3136')
  .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: "png", dynamic: true}))
  message.channel.send(embed)
},
}