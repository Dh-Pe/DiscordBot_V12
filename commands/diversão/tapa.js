const Discord = require('discord.js');

module.exports = {
  name: 'tapa',
  aliases: ['bater', 'tapear'],
  async execute (client, message, args) {

var list = [
  'https://i.pinimg.com/originals/91/e4/68/91e4688ff7d78144a8da6788044efa4c.gif',
  'http://post.asgardproject.com.br/JD4CN3/01-melhor-gif-da-semana-nanatsu-no-tazai-briga-entre-amigos.gif',
  'https://i.pinimg.com/originals/02/67/8d/02678d953cfbf99eb6b759e9f74f4aae.gif',
  'https://pa1.narvii.com/6584/c25eed0d9afd0df2cba790ffe3f77225d5356f88_hq.gif',
  'https://i1.wp.com/38.media.tumblr.com/889ae75a9a43272c1c064ee1be1c3adb/tumblr_n9elayYEtK1sg9gi2o1_500.gif?resize=1053%2C592',
  'http://2.bp.blogspot.com/-9xSU6Otnby8/U1xD0B9gwNI/AAAAAAAAJL0/vGAIBO0HGkE/s1600/tumblr_n3zz2zfvb71rydwbvo1_500.gif',
  'https://2img.net/h/1.bp.blogspot.com/-vNF44W4EoVU/T55vi-SH0yI/AAAAAAAAAhI/TUL4cvV_WCw/s1600/tumblr_m34kd8kLCK1r5tmleo2_500.gif',
  'https://i.pinimg.com/originals/9a/f4/3a/9af43a78a26d2fa84eac7e7eb17c487f.gif',
  'https://i.pinimg.com/originals/ad/21/f0/ad21f0f79838beea07cb01d5d0ad49a0.gif',
  'https://2.bp.blogspot.com/-qSVcwWPRqRw/UZjjwUX7DuI/AAAAAAAAAqM/MJf2cKVBiIY/s1600/tumblr_lyj8ibbvzl1qf6dad.gif',
  'https://i.pinimg.com/originals/08/d5/91/08d59115f268d78f5375f7b13fe1cece.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
var rand2 = list[Math.floor(Math.random() * list.length)];
let usuario = message.mentions.users.first()
if (!usuario) {
return message.reply('lembre-se que você não pode beijar a parede!');
}
if(usuario === message.author) {
  return message.reply('Você não pode se bater! Mencione outra pessoa!')
}
  const embed = new Discord.MessageEmbed()
        .setTitle('Briga!')
        .setColor('#2F3136')
        .setDescription(`**${message.author.username}** bateu em **${usuario.username}**`)
        .setImage(rand)
        .setFooter(`${usuario.username} reaja com  🖕 para revidar!`, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  await message.channel.send(embed).then(msg => {
    msg.react('🖕').then(r => {
         })
  const ecoFilter = (reaction, user) => reaction.emoji.name === '🖕' && user.id === usuario.id;
 
  const teste = msg.createReactionCollector(ecoFilter, { max: 1 });

  teste.on('collect', r2 => {
      const embed2 = new Discord.MessageEmbed()
        .setTitle('Briga!')
        .setColor('#2F3136')
        .setDescription(`**${usuario.username}** revidou em **${message.author.username}**`)
        .setImage(rand2)
        .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))

    message.channel.send(embed2)
  })
  
  
  })

},
}