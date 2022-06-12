const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  aliases: ['banir', 'banned'],
  async execute (client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você é fraco, lhe falta a permissão de `Administrador` para usar esse comando.')
  const guild = client.guilds.cache.get('784961361259003936')
  const user = message.mentions.users.first();
  if(!user) {
    return message.reply('Mencione um membro para banir!')
  }
  const motivo = args.slice(1).join(' ');
  if(!motivo) {
    return message.reply('Especifique o motivo do banimento!')
  }
  const staff = message.author;
    if(user === staff) {
    return message.reply('Você não pode usar o ban em si mesmo!')
  }
  let embed = new Discord.MessageEmbed()
  .setTitle('Ban!')
  .setColor('#2F3136')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .addField('Membro banido:', user)
  .addField('Motivo:', motivo)
  .addField('Staff:', staff)
  message.channel.send(embed)
  guild.members.ban(user);
},
}