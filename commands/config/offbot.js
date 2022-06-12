const Discord = require('discord.js');

module.exports = {
  name: 'offbot',
  async execute (client, message, args) {
if (message.author.id === '368552464070344704') {
let embed = new Discord.MessageEmbed()
.setTitle('Desligado!')
.setDescription('O bot `Stars Alliance Bot` foi desligado com sucesso!')
.setColor('#2F3136')
await message.channel.send(embed)
  process.exit();
}
},
}