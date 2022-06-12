const jimp = require('jimp');
const Discord = require('discord.js');

module.exports = {
  name: 'background',
  aliases: ['bg', 'fundo', 'wallpaper', 'wp'],
  async execute (client, message, args, database) {


  message.channel.send(`**Qual o link de endereço da imagem?**`).then(msg2 => {
        let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            aqui = c.content

  jimp.read(aqui).then(async img => {
    let db = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
    if(db.val() == null) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).set({
        background: aqui,
      });
      let embed2 = new Discord.MessageEmbed()
      .setTitle('Background!')
      .setColor('#2F3136')
      .setDescription(`Background do comando de **+perfil** definido para [essa](${aqui}).`)
      .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setTimestamp()
      .setImage(aqui)
      message.channel.send(embed2);
    } else {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        background: aqui,
      });
      let embed = new Discord.MessageEmbed()
      .setTitle('Background!')
      .setColor('#2F3136')
      .setDescription(`Background do comando de **+perfil** atualizado para [essa](${aqui}).`)
      .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
      .setTimestamp()
      .setImage(aqui)
       const fetched = await message.channel.messages.fetch({
      limit: 3
      });
      message.channel.bulkDelete(fetched);
      message.channel.send(embed);
    }
    }).catch(() => {
    return message.reply('URL inválido!')
    })
        })
  })
},
}