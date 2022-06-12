const Discord = require('discord.js');

module.exports = {
  name: 'setaniversario',
  aliases: ['setbirthday', 'setaniverário', 'setbd', 'setniver'],
  async execute (client, message, args, database) {
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
let data = `${Number(args[0])}/${Number(args[1])}`;



if(!args[1]) {
  return message.channel.send('Você deve utilizar assim:\n `+setaniversario [dia] [mês]`')
}
if(!args[0]) {
  return message.channel.send('Você deve utilizar assim:\n `+setaniversario [dia] [mês]`')
}

if(!isNaN(args[0]) == false) {
  return message.channel.send('Você deve colocar um número no lugar do Dia.')
}
if(!isNaN(args[1]) == false) {
  return message.channel.send('Você deve colocar um número no lugar do Mês.')
} 

  if(db.val().aniversario != null) {
    message.channel.send('Seu aniversário já está cadastrado!')
  };

  if(db.val().aniversario == null) {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      aniversario: `${data}`
    });
    let embed = new Discord.MessageEmbed()
    .setTitle('Aniversário')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setDescription(`Você acaba de cadastrar uma data de aniversário, está marcado para ${data}!`)
    .setFooter(client.user.username)
    .setTimestamp()
    .setColor('#2F3136')
    message.channel.send(embed)
  }
},
}