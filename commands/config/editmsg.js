const Discord = require('discord.js');

module.exports = {
  name: 'editmsg',
  async execute (client, message, args) {
let canal = client.channels.cache.get("784963399913701376");
canal.messages.fetch("811851874788442182").then(msg => {
msg.edit("olá!")
})
message.channel.send("Mensagem Editada com sucesso!")
},
}