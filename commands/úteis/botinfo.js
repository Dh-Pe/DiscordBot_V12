const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {
  name: 'botinfo',
  aliases: ['infobot', 'botinformation'],
  async execute (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }
    let dias = 0;
    let semanas = 0;
 
     let uptime = ``;
     let totalSegundos = (client.uptime / 1000);
     let horas = Math.floor(totalSegundos / 3600);
     totalSegundos %= 3600;
     let minutos = Math.floor(totalSegundos / 60);
     let segundos = Math.floor(totalSegundos % 60);
 
     if (horas > 23){
         dias = dias + 1;
         horas = 0;
     }
 
     if (dias == 7) { 
     dias = 0;
     semanas = semanas + 1;
     }
 
     if (semanas > 0){
         uptime += `${semanas} semanas, `;
     }
 
     if (minutos > 60){
         minutos = 0;
     }
 
     uptime += `${dias} Dias, ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;

    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setColor('#2F3136')
      .setTitle('<a:atention2:749475313548787763> Minhas informações')
      .addField('<a:direita:749475296352141394> | `Meu nick`', userName)
      .addField('<a:direita:749475296352141394> | `Meu ID`', client.user.id)
      .addField('<a:direita:749475296352141394> | `Servidores`', 'Estou em ' + client.guilds.cache.size + ' servidores', true)
      .addField('<a:direita:749475296352141394> | `Usuários`', client.users.cache.size + ' usuários', inline)
      .addField('<a:direita:749475296352141394> | `Criado em`', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('<a:direita:749475296352141394> | `Estou online a`', uptime)
      .addField('<a:direita:749475296352141394> | `Latência de API`', Math.round(client.ws.ping) + `ms`, true)
      .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '<a:direita:749475296352141394> | `Status`',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
},

  conf: {},

  get help () {
    return {
      name: 'botinfo',
    }
  }
}

function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
