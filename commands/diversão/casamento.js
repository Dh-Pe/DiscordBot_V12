const Discord = require('discord.js');

module.exports = {
  name: 'casamento',
  aliases: ['noivado', 'noiva', 'noivo', 'esposo', 'esposa', 'marido'],
  async execute (client, message, args, database) {
  let amigo = message.mentions.users.first() || message.author;
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');

  if(db.val().casamento == null) {
    return message.channel.send(`${amigo} não é casado!`)
  }

  let embed = new Discord.MessageEmbed()
  .setTitle('Casamento!')
  .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .addField('Membro:', amigo)
  .addField('Casal:', `<@${db.val().casamento}> & ${amigo}`)
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  .setColor('#2F3136')
  .setThumbnail(amigo.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  message.channel.send(embed)
},
}