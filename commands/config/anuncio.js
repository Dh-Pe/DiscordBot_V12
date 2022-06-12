const Discord = require("discord.js");
const { ownerID } = require('../../config.json')

module.exports = {
  name: 'anuncio',
  aliases: ['anunciar', 'avisar'],
  async execute (client, message, args) {
    if(message.author.id != ownerID) return message.reply('você não tem permissão para usar esse comando!')
  message.channel.send('`Verifique seu DM!`').then(a => {setTimeout(() => {  a.delete(); }, 5000)})
  message.delete().catch(O_o => {});
  let canal = message.author;

  let channel = client.channels.cache.get("825935687374602253");

    canal.send('Qual o Título do anúncio?').then(msg => {
        let cp = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
          titulo = c.content
          if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de anúncio foi cancelado.');

    canal.send('Qual a Descrição do anúncio?').then(msg2 => {
        let cl = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1, time: 300 * 1000})
        .on('collect', c => {
            descricao = c.content
            if (c.content.toLowerCase() === "cancelar") return message.author.send('O processo de anúncio foi cancelado.');
    canal.send(`**Anúncio enviado com sucesso!**`)

    let embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setTimestamp()
    .setTitle(titulo)
    .setDescription(descricao)
    .setThumbnail('https://www.smogon.com/forums/media/twitter.png')
    .setImage('https://www.imagensanimadas.com/data/media/562/linha-imagem-animada-0015.gif')
    .setFooter(`Anúncio enviado por: ${message.author.tag}`, message.author.displayAvatarURL())
    .addField('Informativo:', 'Leia o anúncio abaixo, os anúncios neste chat são estritamente ligados a Torneios que ocorrerão na StarsAlliance.')
    .addField('Sites:', '**[Clique aqui](https://www.smogon.com) para ir até o site da Smogon**\n**[Clique aqui](https://play.pokemonshowdown.com) para ir até o site do Showdown**')
    .setAuthor(message.guild.name, message.guild.iconURL())
    


    channel.send(embed)

              })
            })
          })
        })
},
}