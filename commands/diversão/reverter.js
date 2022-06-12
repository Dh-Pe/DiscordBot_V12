const Discord = require("discord.js")

module.exports = {
  name: 'reverter',
  aliases: ['reverse', 'inverter'],
  async execute (client, message, args) {

  try {
    if(!args[0]) {
      return message.channel.send("Especifíque algo para reverter.")  
    }
    let str = args.join(' ')
    let msg = str.split('').reverse().join('')
    message.channel.send(msg)
  } catch(e) {
    message.channel.send("Ocorreu um erro! "+e)
  }

},
}