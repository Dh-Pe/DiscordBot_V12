const Discord = require('discord.js');

module.exports = {
  name: 'teste',
  async execute (client, message, args, config) {
    if(message.author.id != config.ownerID) return;
    let foto = args.join(' ');
    if(!foto) return message.reply('envia o link de uma foto!')
    client.user.setAvatar(foto)
    message.channel.send('Foto alterada!')
  },
}