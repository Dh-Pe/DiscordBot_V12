const Discord = require('discord.js');
const fetch = require('node-fetch');
const mcapi = require('mcapi');

module.exports = {
  name: 'mcskin',
  aliases: ['skinmc', 'minecraftskin', 'skinminecraft', 'mineskin', 'skinmine'],
  async execute (client, message, args, config) {

  try {
    let uuid = await mcapi.usernameToUUID(`${args.join(' ')}`)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Skin de ${args.join(' ')}`)
    .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setColor(config.embedcolor)
    .addField("Nome:", args.join(' '), true)
    .addField("UUID:", uuid)
    .addField("Download:", `[Download](https://minotar.net/download/${args.join(' ')})`, true)
    .addField("NameMC:", `[Clique aqui](https://mine.ly/${args.join(' ')}.1)`)
    .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args.join(' ')}/700`)
    .setThumbnail(`https://minotar.net/cube/${args.join(' ')}/100.png`)
    message.channel.send(embed)
  } catch (e) {
    message.channel.send('Skin não encontrada!')
  }

  }
}