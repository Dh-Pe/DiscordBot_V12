/*const Discord = require('discord.js');
const { ownerID } = require('../../config.json')
module.exports = {
  name: 'addvalores',
  aliases: ['addvl', 'valoresadd', 'vladd'],
  async execute (client, message, args, database) {
  if(message.author.id == ownerID) {
    message.guild.members.cache.forEach(async member => {
      let db = await database.ref(`Servidores/Assalto/${message.guild.id}/${member.id}`).once('value');
        database.ref(`Servidores/Assalto/${message.guild.id}/${member.id}`).set({
          time: Date.now()
        });
      })
      console.log('Feito!')
      }
  },
}*/