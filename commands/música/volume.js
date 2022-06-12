const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  aliases: ['vol'],
  execute(client, message, args, config) {
    
    let embed = new MessageEmbed().setColor(config.COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Você precisa estar em um canal de voz!")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("O bot não está tocando nada!")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`Volume: ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("Para alterar o volume, ele deve ser numérico!")
      return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("Você deve colocar um volume abaixo de 200!")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`Volume alterado para: **${args[0]}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};
