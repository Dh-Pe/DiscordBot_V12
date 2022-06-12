const Discord = require('discord.js');

module.exports = {
  name: 'code',
  aliases: ['código', 'codigo', 'comando'],
  async execute (client, message, args) {
  let mensagem = args.join(' ');

  let embed = new Discord.MessageEmbed()
  .setTitle('Código:')
  .setDescription('```js\n'+mensagem+'```')
  .setColor('#2F3136')
  message.delete().catch(O_o => {});
  message.channel.send(embed)
},
}