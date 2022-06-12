const Discord = require('discord.js');
const config = require('../../config.json')

module.exports = {
  name: 'ban2',
  async execute (client, message, args) {
    if(message.author.id != config.ownerID) return;
    let membro = message.mentions.users.first();
    if(!membro) return message.channel.send('mencione alguém para banir!')
    if(membro == message.author) return message.channel.send('você não pode banir a si mesmo!')
    let motivo = args.slice(1).join(" ");
    if(!motivo) {
      motivo = 'Motivo não especificado'
    }
    let embed = new Discord.MessageEmbed()
    .setTitle('Ban!')
    .setDescription(`Você realmente deseja banir **${membro.username}**? Use 🚫 para **Recusar** e ✅ **Aceitar** o Ban`)
    .setColor(config.embedcolor)
    .setFooter(message.guild.name, message.guild.iconURL({size: 1024, format: 'png', dynamic: true }))
    .setAuthor(message.guild.name, message.guild.iconURL({size: 1024, format: 'png', dynamic: true }))
    message.channel.send(embed).then(msg => {
    msg.react('✅').then(r => {
    msg.react('🚫').then(r => {
         })
         })
    const ecoFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const fechoFilter = (reaction, user) => reaction.emoji.name === '🚫' && user.id === message.author.id;
 
    const teste = msg.createReactionCollector(ecoFilter, { max: 1, time: 60000 });
    const fecho = msg.createReactionCollector(fechoFilter, { max: 1, time: 60000 });

    teste.on('collect', r2 => {
      const embed2 = new Discord.MessageEmbed()
        .setTitle('Ban!')
        .setColor(config.embedcolor)
        .addField('Membro:', membro)
        .addField('Motivo:', motivo)
        .addField('Staff:', message.author)
        .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    message.channel.send(embed2)
    message.guild.members.ban(membro);
  });

  fecho.on('collect', r2 => {
    message.channel.send('<a:atention2:749475313548787763> | O Ban foi parado!')
  })
  })
  },
}