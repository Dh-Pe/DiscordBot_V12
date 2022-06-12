const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "pause",
  aliases: ['ps'],
  execute (client, message, args, config) {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed()
.setColor(config.COLOR);

    
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Você precisa estar em um canal de voz!")
      return message.channel.send(embed);
    }
    
    
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Não tem nenhuma música tocando para pausar!")
      return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("✅ | Música pausada!")
      embed.setThumbnail(client.user.displayAvatarURL())
      return message.channel.send(embed)
  }  
  }
}