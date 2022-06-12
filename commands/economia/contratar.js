const Discord = require('discord.js');

module.exports = {
  name: 'contratar',
  aliases: ['hire', 'assalariar', 'admitir', 'empregar', 'admit', 'employ'],
  async execute (client, message, args, database) {
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');

  if(db.val().trabalho != null) {
   return message.channel.send('Você já tem trabalho!')
 }

   var respostas = [
     "Artista",
     "Arquiteto",
     "Advogado",
     "Fotógrafo",
     "Ator",
     "Musicista",
     "Jornalista",
     "Engenheiro",
     "Psicólogo",
     "Médico",
     "Cozinheiro",
     "Biólogo",
     "Professor",
     "Político",
     "Lojista"
 ];
 
 var randres = respostas[Math.floor(Math.random() * respostas.length)];

 if(db.val().trabalho != null) {
   return message.channel.send('Você já tem trabalho!')
 }

   database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
     trabalho: randres
   });
  let embed = new Discord.MessageEmbed()
  .setTitle('Contratado!')
  .addField('Membro:', message.author)
  .addField('Trabalho', `${randres}(a)`)
  .setTimestamp()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setFooter(client.user.username)
  .setColor('#2F3136')
  .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  message.channel.send(embed)

},
}