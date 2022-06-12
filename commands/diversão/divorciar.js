const Discord = require('discord.js');

module.exports = {
  name: 'divorciar',
  aliases: ['separar', 'abdicar', 'desunir', 'afastar', 'apart', 'abdicate', 'divorce'],
  async execute (client, message, args, database) {
  let dbeu = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
  if(dbeu.val().casamento == null) {
    return message.channel.send('Você não é casado!')
  }
  let dbele = await database.ref(`Servidores/Levels/${message.guild.id}/${dbeu.val().casamento}`).once('value');

  database.ref(`Servidores/Levels/${message.guild.id}/${dbeu.val().casamento}`).update({
    casamento: null
  })
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
    casamento: null
  })

  let embed = new Discord.MessageEmbed()
  .setTitle('Divórcio!')
  .setTimestamp()
  .setFooter(client.user.username)
  .setColor('#2F3136')
  .addField('Pediu divórcio:', message.author)
  .addField('Ex:', `<@${dbeu.val().casamento}>`)
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  await message.channel.send(embed)
},
}