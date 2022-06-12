const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'servericon',
  aliases: ['iconserver', 'servidoricone', 'iconeservidor'],
  async execute (client, message, args) {
  let icone = message.guild.iconURL();
  let embed = new MessageEmbed()
  .setTitle('Ícone do servidor!')
  .setImage(icone)
  .setColor('#2F3136')
  .setFooter('Comando requisitado por: ' + message.author.username)

  message.channel.send(embed)
},
}