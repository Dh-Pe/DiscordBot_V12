const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'teste',
  async execute (client, message, args) {
    message.channel.send('Register').then(msg => {
      msg.react('🔱')
      msg.react('🏆')
    })
  }
}