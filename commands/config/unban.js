const Discord = require('discord.js');

module.exports = {
  name: 'unban',
  aliases: ['desbanir', 'desban'],
  async execute (client, message, args) {
  let guild = client.guilds.cache.get('784961361259003936');
  let idban = args[0];
  if(!idban) {
    return message.reply('O ID indicado não foi encontrado na lista de banidos ou não foi especificado.')
  }
  let membro = `<@${idban}>`
  let staff = message.author;
  let embed = new Discord.MessageEmbed()
  .setTitle('Unban!')
  .addField('Membro desbanido:', membro)
  .addField('Staff:', staff)
  .setDescription('Você foi perdoado, não volte a quebrar as regras!')
  .setColor('#2F3136')
  await message.channel.send(embed)
  guild.members.unban(idban)
},
}