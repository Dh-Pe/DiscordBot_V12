const Discord = require('discord.js');
const ms = require('parse-ms')
module.exports = {
  name: 'roubar',
  aliases: ['furtar', 'steal', 'saquear'],
  async execute (client, message, args, database) {
  let timeout =	21600000;
  let data = await database.ref(`Servidores/Roubo/${message.guild.id}/${message.author.id}`).once('value');

  let eu = message.author;
  let amigo = message.mentions.users.first();
  if(!amigo) {
    return message.reply('Você deve mencionar alguém para roubar!')
  }
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${eu.id}`).once('value');
  let db2 = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');
  let dbescudo = await database.ref(`Servidores/Escudos/${message.guild.id}/${amigo.id}`).once('value');

    let coins2 = db2.val().coins - 1000;
    let coins1 = db.val().coins + 1000;
  if(data.val().down !== null && timeout - (Date.now() - data.val().down) > 0) {
    let time = ms(timeout - (Date.now() - data.val().down));
    return message.channel.send(`**Você ja tentou roubar alguém, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
  } else {
    database.ref(`Servidores/Roubo/${message.guild.id}/${message.author.id}`).set({down: Date.now()})
        if(db2.val().coins < 1000) {
      return message.channel.send('Você não pode roubar um membro que já é pobre! ;-;')
    }

        if(dbescudo.val().escudo > 0) {
          database.ref(`Servidores/Escudos/${message.guild.id}/${amigo.id}`).update({
            escudo: dbescudo.val().escudo - 1
          });
          return message.reply('você retirou um escudo dele, tente novamente daqui a 6 horas!')
        }
 database.ref(`Servidores/Levels/${message.guild.id}/${eu.id}`).update({
    coins: coins1
  });
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).update({
    coins: coins2
  });
  let embed = new Discord.MessageEmbed()
  .setColor('#2F3136')
  .setTimestamp()
  .setThumbnail(eu.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
  .setTitle('Roubo!')
  .setDescription(`${eu} Roubou **1000 coins** de ${amigo}!`)
  .setFooter(`2021 © ${client.user.username}`)
  message.channel.send(embed);
  }
  },
}