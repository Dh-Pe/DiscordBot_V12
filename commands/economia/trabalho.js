const Discord = require('discord.js');

module.exports = {
  name: 'trabalho',
  aliases: ['emprego', 'empresa', 'profissão', 'profissao'],
  async execute (client, message, args, database) {
  let amigo = message.mentions.users.first() || message.author;
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');

  let embed = new Discord.MessageEmbed()
  .setTitle('Emprego!')
  .setAuthor(message.guild.name, message.guild.iconURL())
  .addField('Membro:', amigo)
  .addField('Trabalho:', `${db.val().trabalho}(a)`)
  .setTimestamp()
  .setFooter(client.user.username)
  .setColor('#2F3136')
  .setThumbnail(amigo.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  message.channel.send(embed)
},
}