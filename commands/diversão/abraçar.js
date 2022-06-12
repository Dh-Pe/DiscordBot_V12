const Discord = require('discord.js');

module.exports = {
  name: 'abraçar',
  description: 'comando de abraço',
  aliases: ['abraçar', 'abracar', 'abraço', 'abraco'],
  async execute (client, message, args, cooldown){

var list = [
  'https://acegif.com/wp-content/uploads/anime-hug.gif',
  'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
  'https://i.pinimg.com/originals/3d/59/76/3d59767bee77ee37fda35f5b999cb2e2.gif',
  'http://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_00.gif',
  'https://i.pinimg.com/originals/82/c8/e9/82c8e9ff24cce631fa061b35cf9fe82b.gif',
  'https://i.pinimg.com/originals/49/5d/a3/495da3253424973e0658c4ebecc2b1dc.gif',
  'https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif',
  'https://64.media.tumblr.com/ebfb615ecf34c52861918e916b74b333/f0b6a1d0bbcb97e0-24/s500x750/683bb889ae9341ff5da4b0a556a68631e7dac176.gif',
  'http://30.media.tumblr.com/tumblr_m2emecM0bQ1r5zfj8o1_500.gif',
  'https://i.pinimg.com/originals/65/67/01/65670133d732f8b0e627f3ecb2d6d899.gif',
  'https://data.whicdn.com/images/287246295/original.gif',
  'https://uploads.spiritfanfiction.com/fanfics/capitulos/201604/fanfiction-amor-doce-o-grande-amor-5505737-230420162015.gif',
  'https://giffiles.alphacoders.com/500/5003.gif',
  'https://thumbs.gfycat.com/AlertWideAfricanporcupine-size_restricted.gif',
  'https://i2.wp.com/38.media.tumblr.com/f2a5c49d244851c8c72617ff22b5c8db/tumblr_nv6sbpH6OX1t8txnro1_500.gif?w=640'
];

var rand = list[Math.floor(Math.random() * list.length)];
var rand2 = list[Math.floor(Math.random() * list.length)];

if(usuario === message.author) {
  return message.reply('Você não pode se abraçar! Mencione outra pessoa!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço!')
        .setColor('#2F3136')
        .setDescription(`**${message.author.username}** acaba de abraçar **${usuario.username}**`)
        .setImage(rand)
        .setFooter(`${usuario.username} reaja com 👨‍❤️‍💋‍👨 para abraçar de volta`, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  await message.channel.send(embed).then(msg => {
    msg.react('👨‍❤️‍💋‍👨').then(r => {
         })
  const ecoFilter = (reaction, user) => reaction.emoji.name === '👨‍❤️‍💋‍👨' && user.id === usuario.id;
 
  const teste = msg.createReactionCollector(ecoFilter, { max: 1 });

  teste.on('collect', r2 => {
      const embed2 = new Discord.MessageEmbed()
        .setTitle('Abraço!')
        .setColor('#2F3136')
        .setDescription(`**${usuario.username}** abraçou **${message.author.username}**`)
        .setImage(rand2)
        .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))

    message.channel.send(embed2)
  })
  
  
  })
  },
}