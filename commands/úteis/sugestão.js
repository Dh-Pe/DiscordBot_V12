const Discord = require("discord.js");

module.exports = {
  name: 'sugestão',
  aliases: ['sugestao', 'sugerir', 'ideia'],
  async execute (client, message, args) {
  message.channel.send('`Verifique seu DM!`')
  message.delete().catch(O_o => {});
  let canal = message.author;

  let channel = client.channels.cache.get("784963895478976533");

    canal.send('Qual seu nick? `(Digite "cancelar" ou espere 5 minutos para descontinuar.)`').then(msg => {
        let cp = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
          nick = c.content
          if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de sugestão foi cancelado.');
            
    canal.send('Qual sua sugestão? `(Digite "cancelar" ou espere 5 minutos para descontinuar.)`').then(msg3 => {
        let ck = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
            sugestao = c.content
            if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de sugestão foi cancelado.');

    canal.send('Por qual motivo você acha que devemos aprovar essa sugestão? `(Digite "cancelar" ou espere 5 minutos para descontinuar.)`').then(msg2 => {
        let cl = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
            motivo = c.content
            if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de sugestão foi cancelado.');
    canal.send(`**Sugestão enviada com sucesso!**`)

    let embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setThumbnail((message.author.displayAvatarURL({ dynamic: true, format: 'png'})))
    .setTimestamp()
    .setTitle('Nova sugestão de:')
    .setFooter(`2020 © ${client.user.username}`)
    .addField('Tag:', message.author, true)
    .addField('Nick:', nick, true)
    .addField('Sugestão:', `${sugestao}`)
    .addField('Motivo:', `${motivo}`)

    channel.send(embed).then(msg => {
      msg.react("<:461067799427547136:786365105473716234>")
      msg.react("<:461063890982141962:786365105112743938>")
    })

              })
            })
          })
        })
        })
    })
},
}