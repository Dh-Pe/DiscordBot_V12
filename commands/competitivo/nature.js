const Discord = require('discord.js');

module.exports = {
  name: 'nature',
  aliases: ['natureza', 'ntr'],
  async execute (client, message, args) {
  let nature = args[0];
  if(nature === 'timid') {
    let embedtimid = new Discord.MessageEmbed()
    .setTitle('Timid')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Speed')
    .addField('<a:direita:749475296352141394> Diminui', 'Attack')
    .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedtimid)
  }
  if(nature === 'jolly') {
     let embedjolly = new Discord.MessageEmbed()
    .setTitle('Jolly')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Speed')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedjolly)
  }
  if(nature === 'hasty') {
    let embedhasty = new Discord.MessageEmbed()
    .setTitle('Hasty')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Speed')
    .addField('<a:direita:749475296352141394> Diminui', 'Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedhasty)
  }
  if(nature === 'naive') {
    let embednaive = new Discord.MessageEmbed()
    .setTitle('Hasty')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Speed')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embednaive)
  }
  if(nature === 'careful') {
    let embedcareful = new Discord.MessageEmbed()
    .setTitle('Careful')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedcareful)
  }
  if(nature === 'impish') {
    let embedimpish = new Discord.MessageEmbed()
    .setTitle('Impish')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedimpish)
  }
  if(nature === 'bold') {
    let embedbold = new Discord.MessageEmbed()
    .setTitle('Bold')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Speed')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedbold)
  }
  if(nature === 'calm') {
    let embedcalm = new Discord.MessageEmbed()
    .setTitle('Calm')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedcalm)
  }
  if(nature === 'rash') {
    let embedrash = new Discord.MessageEmbed()
    .setTitle('Rash')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedrash)
  }
  if(nature === 'brave') {
    let embedbrave = new Discord.MessageEmbed()
    .setTitle('Brave')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Speed')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedbrave)
  }
  if(nature === 'adamant') {
    let embedadamant = new Discord.MessageEmbed()
    .setTitle('Adamant')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedadamant)
  }
  if(nature === 'gentle') {
    let embedgentle = new Discord.MessageEmbed()
    .setTitle('Gentle')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedgentle)
  }
  if(nature === 'lax') {
    let embedlax = new Discord.MessageEmbed()
    .setTitle('Lax')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedlax)  
  }
  if(nature === 'lonely') {
    let embedlonely = new Discord.MessageEmbed()
    .setTitle('Lonely')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedlonely)  
  }
  if(nature === 'naughty') {
    let embednaughty = new Discord.MessageEmbed()
    .setTitle('Naughty')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Special Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embednaughty)
  }
  if(nature === 'mild') {
    let embedmild = new Discord.MessageEmbed()
    .setTitle('Mild')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Defense')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedmild)
  }
  if(nature === 'modest') {
    let embedmodest = new Discord.MessageEmbed()
    .setTitle('Modest')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Attack')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedmodest)
  }
  if(nature === 'quiet') {
    let embedquiet = new Discord.MessageEmbed()
    .setTitle('Quiet')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Attack')
    .addField('<a:direita:749475296352141394> Diminui', 'Speed')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedquiet)
  }
  if(nature === 'sassy') {
    let embedsassy = new Discord.MessageEmbed()
    .setTitle('Sassy')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Special Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Speed')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedsassy)
  }
  if(nature === 'relaxed') {
    let embedrelaxed = new Discord.MessageEmbed()
    .setTitle('Relaxed')
    .setColor('#2F3136')
    .addField('<a:direita:749475296352141394> Aumenta', 'Defense')
    .addField('<a:direita:749475296352141394> Diminui', 'Speed')
        .setDescription('Toda natureza aumenta uma estatística em 10% e diminui uma estatística em 10%')
    return message.reply(embedrelaxed)
  }
  if(!nature) {
    let embed = new Discord.MessageEmbed()
    .setTitle('Nature')
    .setColor('#2F3136')
    .setTimestamp()
    .setDescription('Você deve mencionar uma nature após o comando.')
    .addField('<a:direita:749475296352141394> Exemplo:', '+nature jolly')
    message.channel.send(embed)
  }
    let embed2 = new Discord.MessageEmbed()
    .setTitle('Nature')
    .setColor('#2F3136')
    .setTimestamp()
    .setDescription('Você deve mencionar uma nature existente.')
    .addField('<a:direita:749475296352141394> Exemplo:', '+nature jolly')
    message.channel.send(embed2)
},
}