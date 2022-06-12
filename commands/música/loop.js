const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "loop",
  execute (client, message, args, config) {
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
      embed.setAuthor("Não há nada tocando que eu pudesse repetir!")
      return message.channel.send(embed);
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop é agora: **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
    
    
    
  }
}