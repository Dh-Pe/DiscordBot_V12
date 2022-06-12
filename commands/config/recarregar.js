const Discord = require('discord.js');
const fs = require('fs');
const config = require('../../config.json')

module.exports = {
  name: 'recarregar',
  aliases: ['reload', 'completar'],
  async execute (client, message, args) {
    if(message.author.id != '368552464070344704') return message.channel.send('você não pode usar esse comando');
    client.destroy()
    client.login(config.token);
    message.channel.send("Recarregado!");
    return;
    /*const cmds = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

    cmds.forEach(cmd => {
      console.log(`${cmd} carregado.`)
    })*/
  }
}