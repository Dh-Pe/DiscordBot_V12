const Discord = require('discord.js');

module.exports = {
  name: 'beijar',
  aliases: ['beijo', 'selinho', 'bj'],
  async execute (client, message, args) {
    if(message.channel != client.channels.cache.get('784963399913701376')) {
    return message.reply('Você está utilizando o canal errado, use <#784963399913701376> !')
  }

  var list = [
    'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
    'https://pa1.narvii.com/6560/6c22de43a76dcb6c0df4b1882037c5b4d14c460c_hq.gif',
    'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
    'https://i.pinimg.com/originals/11/8a/c9/118ac94d9f00f9b668223113a5944af4.gif',
    'https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif',
    'http://2.bp.blogspot.com/-LE7rtEgpR3M/VSv-yTz5WII/AAAAAAAAA3E/Mu9q5bWkdXQ/s1600/tumblr_nb4audpbZA1tc4n99o1_500.gif',
    'https://www.intoxianime.com/wp-content/uploads/2017/02/KuzunoHonkai-Episode5-Omake-3.gif',
    'https://img.wattpad.com/7a65c6bc07fb4c2c3091e27f0e9c9221391d3362/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f67715a614f672d73396d497046413d3d2d3638312e313565333662326466396264383836353835353633313739353330342e676966',
    'https://ptanime.com/wp-content/uploads/2017/07/Koi-to-uso-GIF3.gif',
    'https://data.whicdn.com/images/101440374/original.gif',
    'https://img.wattpad.com/ea6d0c9e1478321c337b0fc6f7d48c9523be84f5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49585f7a6c636953695f364742413d3d2d3638312e313565333661343964383164393536353336333936363333393938332e676966',
    'https://phoneky.co.uk/thumbs/screensavers/down/anime/kissanime_Q9gJeHyr.gif',
    'https://pa1.narvii.com/6407/a86e88ebb9eba428de6981e6bab6b9ac4579d9be_hq.gif'
  ];

var rand = list[Math.floor(Math.random() * list.length)];
var rand2 = list[Math.floor(Math.random() * list.length)];
let usuario = message.mentions.users.first();
if (!usuario) {
return message.reply('Lembre-se que você não pode beijar a parede!');
}
if(usuario == message.author) {
  return message.reply('Você não pode se beijar! Mencione outra pessoa!')
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijo!')
        .setColor('#2F3136')
        .setDescription(`**${message.author.username}** acaba de beijar **${usuario.username}**`)
        .setImage(rand)
        .setFooter(`${usuario.username} reaja com 💋 para beija-lo(a)`, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
  await message.channel.send(embed).then(msg => {
    msg.react('💋').then(r => {
         })
  const ecoFilter = (reaction, user) => reaction.emoji.name === '💋' && user.id === usuario.id;
 
  const teste = msg.createReactionCollector(ecoFilter, { max: 1 });

  teste.on('collect', r2 => {
      const embed2 = new Discord.MessageEmbed()
        .setTitle('Beijo!')
        .setColor('#2F3136')
        .setDescription(`**${usuario.username}** beijou o **${message.author.username}**`)
        .setImage(rand2)
        .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))

    message.channel.send(embed2)
  })
  
  
  })
},
}