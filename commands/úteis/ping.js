const Discord = require('discord.js');
module.exports = {
  name: 'ping',
  aliases: ['pong'],
  description: 'comando de ping!',
  async execute (client, message, args){
  
  let m = await message.channel.send('ping')

  const embed = new Discord.MessageEmbed()
  .setTitle('Ping!')
  .addField('Latência do Server:', `${m.createdTimestamp - message.createdTimestamp}ms.`)
  .setColor('#2F3136')
  .addField('Latência da API:', `${Math.round(client.ws.ping)}ms`)
  message.channel.send(embed)
  m.delete()
  },

}