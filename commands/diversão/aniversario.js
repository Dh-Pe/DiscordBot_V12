const Discord = require('discord.js');

module.exports = {
  name: 'aniversario',
  aliases: ['aniversário', 'birthday', 'bd'],
  async execute (client, message, args, database){
  let amigo = message.mentions.users.first() || message.author;
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value').then(async function (db) {

  if(db.val().aniversario == null) {
    message.channel.send('Use +setaniversario para cadastrar seu aniversário, pois você ainda não cadastrou!')
  }
if(db.val().aniversario != null) {
  let embed = new Discord.MessageEmbed()
  .setTitle('Aniversário')
  .addField('Membro:', amigo)
  .addField('Data:', db.val().aniversario)
  .setThumbnail(amigo.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
  .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .setTimestamp()
  .setColor('#2F3136')
  message.channel.send(embed)
}
  })
  },
}