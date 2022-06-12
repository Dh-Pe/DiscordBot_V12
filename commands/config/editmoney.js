const Discord = require('discord.js');
module.exports = {
  name: 'editmoney',
  aliases: ['editarmoney', 'editdinheiro', 'editcoin'],
  async execute (client, message, args, database, config) {
  const amigo = message.mentions.users.first() || message.author;
  const db = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');
  
  if(message.author.id != config.ownerID) {
    return message.channel.send('Você não é meu dono para usar esse comando!')
  }
  
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).update({
    coins: Number(args.slice(1).join(' '))
  })
  message.channel.send(`Você alterou a quantia de coins de **${amigo.username}** para **${Number(args.slice(1).join(' '))} coins**`)
},
}