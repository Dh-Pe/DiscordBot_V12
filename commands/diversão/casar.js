const Discord = require("discord.js");

module.exports = {
  name: 'casar',
  aliases: ['noivar'],
  async execute (client, message, args, database) {

  let eu = message.author;
  let amigo = message.mentions.users.first();
  if(!amigo) {
    return message.channel.send('Mencione alguém para casar!')
  }
  let dbaneleu = await database.ref(`Servidores/Anel/${message.guild.id}/${eu.id}`).once('value');
  let dbanelamigo = await database.ref(`Servidores/Anel/${message.guild.id}/${amigo.id}`).once('value');
  let dbeu = await database.ref(`Servidores/Levels/${message.guild.id}/${eu.id}`).once('value');
  let dbamigo = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');

  if(!amigo) {
    return message.channel.send('Mencione alguém para casar!')
  }

  if(amigo == eu) {
    return message.channel.send('Não pode se casar com você mesmo!')
  }

  if(dbaneleu.val().anel == 0) {
    return message.channel.send('Você não tem Anel!')
  }

  if(dbanelamigo.val().anel == 0) {
    return message.channel.send('Quem você está pedindo não tem anel!')
  }

  if(dbamigo.val().casamento != null) {
    return message.channel.send('Ele(a) já é casado(a)...')
  }
  if(dbeu.val().casamento != null) {
    return message.channel.send('Você já é casado(a)')
  }
    message.channel.send(`**${amigo}, você aceita se casar com ${eu}?** Use __sim__ ou __não__`).then(msg2 => {
        let cl = message.channel.createMessageCollector(x => x.author.id == amigo.id, {max: 1})
        .on('collect', c => {
            simounao = c.content.toLowerCase
        if(simounao == 'não') {
          return message.channel.send(`${eu}, infelizmente ele(a) não aceitou!`)
        }

    if(simounao == 'sim') {
      database.ref(`Servidores/Levels/${message.guild.id}/${eu.id}`).update({
        casamento: amigo.id
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).update({
        casamento: eu.id
      });
      database.ref(`Servidores/Anel/${message.guild.id}/${eu.id}`).set({
        anel: dbaneleu.val().anel - 1
      });
      database.ref(`Servidores/Anel/${message.guild.id}/${amigo.id}`).set({
        anel: dbanelamigo.val().anel - 1
      });
    let embed = new Discord.MessageEmbed()                       
    .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setColor('#2F3136')
    .setThumbnail()
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
    .setTitle('Casamento!')
    .setImage('http://3.bp.blogspot.com/-aIudQs8QDi0/VSv1CrZhXlI/AAAAAAAAA14/dwthdzNydyM/s1600/Saito_x_louise3.gif')
    .addField('Noivos:', `${eu} & ${amigo}`)
    .setThumbnail(eu.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
    return message.channel.send(embed)
    }
    message.channel.send('Responda com letra minúscula!')

              })
            })
},
}