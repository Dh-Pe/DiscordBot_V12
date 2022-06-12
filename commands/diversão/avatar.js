const Discord = require("discord.js"); 

module.exports = {
  name: 'avatar',
  aliases: ['foto', 'avt', 'ft'],
  async execute (client, message, args) {

  let usuario = message.mentions.users.first() || message.author;
  let user = message.mentions.users.first();
  
  let avatar = usuario.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor('#2F3136') 
    .setTitle(`Avatar!`)
    .setDescription(`Avatar de **${usuario.username}**`) 
    .setImage(avatar)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setFooter(`${usuario.username} reaja com 👥 para ver o perfil dele(a)`, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))


  if(usuario == message.author || usuario == client.user) {
  let embed3 = new Discord.MessageEmbed()
    .setColor('#2F3136') 
    .setTitle(`Avatar!`)
    .setDescription(`Avatar de **${message.author.username}**`) 
    .setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      return message.channel.send(embed3)
    }

 await message.channel.send(embed).then(msg => {
    msg.react('👥').then(r => {
         })
  const ecoFilter = (reaction, user) => reaction.emoji.name === '👥' && user.id === user.id;
 
  const teste = msg.createReactionCollector(ecoFilter, { max: 1 });

  teste.on('collect', r2 => {
      const embed2 = new Discord.MessageEmbed()
        .setTitle('Avatar!')
        .setColor('#2F3136')
        .setDescription(`Avatar de **${message.author.username}**`)
        .setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
        .setTimestamp()
        .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))

    message.channel.send(embed2)
  })
  
  
  })
  },
};