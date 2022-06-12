const { MessageEmbed } = require("discord.js")
const discord = require("discord.js");

module.exports = {
  name: "stop",
  aliases: ['stop', 'stop', 'parar'],
  execute(client, message, args, config) {
    
    
let embed = new MessageEmbed()
.setColor(config.COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Você precisa estar em um canal de voz!")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Não há nada tocando que eu pudesse parar!")
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
