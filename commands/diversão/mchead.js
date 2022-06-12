  const Discord = require("discord.js");

module.exports = {
  name: 'mchead',
  aliases: ['cabeça', 'cabeca', 'headmc'],
  async execute (client, message, args) {
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Cite um nick de um player de Minecraft**')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp(new Date())
        .setColor('#2F3136')
    message.channel.send(embed)
},
}