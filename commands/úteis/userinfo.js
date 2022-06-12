const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {
  name: 'userinfo',
  aliases: ['infouser'],
  async execute (client, message, args) {
    const inline = true
    const status = {
      online: ' `🟢` Online',
      idle: ' `🟠` Ausente',
      dnd: ' `🔴` Não pertubar',
      offline: ' `⚫️` Offline'
    }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const target = message.mentions.users.first() || message.author
    const bot = member.user.bot ? '`🤖` Sim' : ' `🙂` Não'

    const embed = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setAuthor('<a:atention2:749475313548787763> Informações do usuário')
      .addField('<a:direita:749475296352141394> | `Tag`', `${member.user.tag}`, inline)
      .addField('<a:direita:749475296352141394> | `ID`', member.user.id, inline)
      .addField('<a:direita:749475296352141394> | `Nickname`', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
      .addField('<a:direita:749475296352141394> | `Bot`', `${bot}`, inline, true)
      .addField('<a:direita:749475296352141394> | `Status`', `${status[member.user.presence.status]}`, inline, true)
      .addField('<a:direita:749475296352141394> | `Jogando`', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
      .addField('<a:direita:749475296352141394> | `Cargos`', `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => roles).join(' **|** ') || 'Nenhum cargo'}`, true)
      .addField('<a:direita:749475296352141394> | `Entrou no Discord em`', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt))
      .addField('<a:direita:749475296352141394> | `Entrou no servidor em`', formatDate('DD/MM/YYYY, às HH:mm:ss', member.joinedAt))
      .setFooter(`2020 © ${client.user.username}`)
      .setThumbnail((message.author.displayAvatarURL({ dynamic: true, format: 'png'})))
      .setTimestamp()
    message.channel.send(embed)
  },
  conf: {},
  get help () {
    return {
      name: 'userinfo',
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