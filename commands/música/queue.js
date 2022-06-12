const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "queue",
  aliases: ['lista', 'fila'],
  execute: (client, message, args, config) => {
    let embed = new MessageEmbed().setColor(config.COLOR);
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Você precisa estar em um canal de voz!");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Não há nada na fila!");
      return message.channel.send(embed);
    }

    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL())
    
    message.channel.send(embed);
  }
};
