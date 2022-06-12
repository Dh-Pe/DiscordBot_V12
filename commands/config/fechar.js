const Discord = require('discord.js');

module.exports = {
  name: 'fechar',
  aliases: ['close'],
  async execute (client, message, args) {

  let categoria = '812748158307139594';
  if(message.channel.parentID != categoria) return message.channel.send('Você não pode usar esse comando aqui!')

  message.channel.delete()
  message.author.send('Ticket Fechado!')
},
}