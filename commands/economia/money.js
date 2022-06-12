const Discord = require('discord.js');

module.exports = {
  name: 'money',
  aliases: ['bolso', 'dinheiro'],
  async execute (client, message, args, database) {
  let amigo = message.mentions.users.first() || message.author;
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value').then(async function (db) {
  let money = new Intl.NumberFormat('pt-BR').format(db.val().coins)
  let embed = new Discord.MessageEmbed()
  .setTitle('Money')
  .setDescription(`${amigo} tem **${money}** coins!`)
  .setColor('#2F3136')
  message.channel.send(embed)    
  })
},
}