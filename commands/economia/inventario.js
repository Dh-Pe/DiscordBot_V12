const Discord = require('discord.js');

module.exports = {
  name: 'inventario',
  aliases: ['inventário', 'inv'],
  async execute (client, message, args, database) {
  let db2 = await database.ref(`Servidores/Escudos/${message.guild.id}/${message.author.id}`).once('value');
  let dbanel = await database.ref(`Servidores/Anel/${message.guild.id}/${message.author.id}`).once('value');
  let amigo = message.mentions.users.first() || message.author;
  database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value').then(async function(db) {

    let ever = db.val().everstone;
    let ranch = db.val().ranchblock;
    let destiny = db.val().destinyknot;
    let pokemon = db.val().pokemonperfeitoaleatorio;
    let zygarde = db.val().zygardecell;

    let embed = new Discord.MessageEmbed()
    .setTitle('Inventário!')
    .setColor('#2F3136')
    .addField('Everstone', `Quantidade: ${ever}`)
    .addField('Ranch Block', `Quantidade: ${ranch}`)
    .addField('Destiny Knot', `Quantidade: ${destiny}`)
    .addField('Pokémon perfeito aleatório:', `Quantidade: ${pokemon}`)
    .addField('Zygarde Cell:', `Quantidade: ${zygarde}`)
    .addField('Escudos', `Quantidade: ${db2.val().escudo}`)
    .addField('Anéis', `Quantidade: ${dbanel.val().anel}`)
    message.channel.send(embed)
  })

},
}