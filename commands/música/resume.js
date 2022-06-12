const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "resume", 
  aliases: ['res', 'continuar', 'cont'],
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
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | Retomada da música pausada")
   embed.setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(embed)
 }
    embed.setDescription("Não há nada pausado que eu possa retomar")
    message.channel.send(embed)
    
  }
}