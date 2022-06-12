const Discord = require('discord.js');

module.exports = {
  name: 'nu',
  async execute (client, message, args) {
    let canal = message.author;
    message.channel.send('Verifique seu DM!')
    let channel = client.channels.cache.get('785596748281413673');

        canal.send(`Qual o seu set? (Digite "cancelar" ou espere 5 minutos para descontinuar.)`).then(msg6 => {
        let q3 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
            setmesmo = c.content
            if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo foi cancelado.');

    canal.send(`**Set enviado com sucesso!**`)

    let embed = new Discord.MessageEmbed()
    .setTitle('Novo set enviado por:')
    .setDescription(`${message.author}`)
    .setThumbnail((message.author.displayAvatarURL({ dynamic: true, format: 'png'})))
    .setFooter(`2020 © ${client.user.username}`)
    .setColor('#2F3136')
        .addField('Mais informações:', '**[Gen 7 SM NU](https://www.smogon.com/dex/sm/formats/nu/)**')
    .addField('Set:', setmesmo)
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
})
})
},
}