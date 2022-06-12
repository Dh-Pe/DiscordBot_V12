const Discord = require('discord.js');

module.exports = {
  name: 'loja',
  aliases: ['shop'],
  async execute (client, message, args, database) {

  const db = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
    zygardecell: 0
  });

  if(db.val() == null) {
  database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).set({
    everstone: 0,
    ranchblock: 0,
    destinyknot: 0,
    pokemonperfeitoaleatorio: 0
  });
}
  
  let inicio = new Discord.MessageEmbed()
  .setTitle('Loja')
  .setColor('RANDOM')
  .setDescription('**⚔️ | Loja do Discord.** \nVeja os produtos relacionado ao Discord!\n\n**🛠️ | Loja do Minecraft.** \nVeja os produtos relacionados ao GearFriends!')
  .setTimestamp()
  message.channel.send(inicio).then(msg => {
  msg.react('⚔️').then(r => {
  msg.react('🛠️').then(r => {
  })
  })
  const dcFilter = (reaction, user) => reaction.emoji.name === '⚔️' && user.id === message.author.id;
  const mcFilter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id;

  const dc = msg.createReactionCollector(dcFilter);
  const mc = msg.createReactionCollector(mcFilter);

  dc.on('collect', r2 => {
    inicio.setTitle('Discord')
    inicio.setDescription('<a:direita:749475296352141394> | `Escudo` - `1000` coins. ---**ID:** `3232`\n<a:direita:749475296352141394> | `Anel` - `5000` coins. ---**ID:** `9999`\n<a:direita:749475296352141394> | `Pet-Key` - `15000` coins. ---**iD:** `7650`')
    inicio.setTimestamp()
    inicio.setColor('#2F3136')
    inicio.setFooter('Para comprar, use: +comprar <id do produto>')
    msg.edit(inicio)
  })
  mc.on('collect', r2 => {
    inicio.setTitle('Minecraft')
    inicio.setDescription('<a:direita:749475296352141394> | `Everstone` - `300.000` coins. ---**ID:** `2548`\n<a:direita:749475296352141394> | `Ranch Block` - `250.000` coins. ---**ID:** `2536`\n<a:direita:749475296352141394> | `Destiny Knot` - `150.000` coins. ---**ID:** `1632`\n<a:direita:749475296352141394> | `Pokémon Perfeito aleatório` - `150.000` coins. ---**ID:** `0192`\n<a:direita:749475296352141394> | `Zygarde Cell` - `50.000` coins ---**ID:** `0485`')
    inicio.setFooter('Para comprar, use: +comprar <id do produto>')
    inicio.setTimestamp()
    inicio.setColor('#2F3136')
    msg.edit(inicio)
  })

  })
},
}