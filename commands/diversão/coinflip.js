const Discord = require("discord.js")

module.exports = {
  name: 'coinflip',
  aliases: ['moeda', 'coin'],
  async execute (client, message, args) {
    if(message.channel != client.channels.cache.get('784963399913701376')) {
    return message.reply('Você está utilizando o canal errado, use <#784963399913701376> !')
  }
 var array1 = ["cara", "coroa"];

 var rand = Math.floor(Math.random() * array1.length);

 if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
 message.reply("insira **cara** ou **coroa** na frente do comando.");
 } 
else if (args[0].toLowerCase() == array1[rand]) {
 message.channel.send("Deu **" + array1[rand] + "**, você ganhou dessa vez!");
 } 
else if (args[0].toLowerCase() != array1[rand]) {
 message.channel.send("Deu **" + array1[rand] + "**, você perdeu dessa vez!"
 );
 }
},
}