const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {
  name: 'serverinfo',
  aliases: ['infoserver'],
  async execute (client, message, args) {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    const region = {
      brazil: ':flag_br: Brazil'
    }

    const embed = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setThumbnail(message.guild.iconURL())
      .setTitle('<a:atention2:749475313548787763> Informações do servidor')
      .addField('<a:direita:749475296352141394> | `Nome`', message.guild.name)
      .addField('<a:direita:749475296352141394> | `Dono(a)`', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
      .addField('<a:direita:749475296352141394> | `ID`', message.guild.id)
      .addField('<a:direita:749475296352141394> | `Membros`', message.guild.members.cache.size, true)
      .addField('<a:direita:749475296352141394> | `Canais`', message.guild.channels.cache.size + ' canais.', true)
      .addField('<a:direita:749475296352141394> | `Cargos`', message.guild.roles.cache.size + ' cargos.', true)
      .addField('<a:direita:749475296352141394> | `Criado em`', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('<a:direita:749475296352141394> | `Você entrou em`', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
      .setTimestamp()

    message.channel.send(embed)
  },
  conf: {},
  get help () {
    return {
      name: 'serverinfo'
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