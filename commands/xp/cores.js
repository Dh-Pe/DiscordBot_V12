const Discord = require('discord.js');

module.exports = {
  name: 'cores',
  aliases: ['cor', 'color', 'colors'],
  async execute (client, message, args, database) {
    let db = await database.ref(`Servidores/Cores/${message.guild.id}/${message.author.id}`).once('value');

    if(db.val() == null) {
      database.ref(`Servidores/Cores/${message.guild.id}/${message.author.id}`).set({
      cor: '#FF8C00'
      });
    }

    let antes = args[0];

      if(!antes) {
      let embed = new Discord.MessageEmbed()
      .setTitle('Cor')
      .setDescription('[Mencione uma cor em Hexadecimal, clique aqui.](https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb)')
      .setColor('#FF8C00')
      return message.channel.send(embed)
    }
    if(antes.length > 6) return message.channel.send('Use somente 6 caracteres!')
    if(antes.length < 6) return message.channel.send('Use somente 6 caracteres!')

    let depois = `#${antes.toUpperCase()}`;

    database.ref(`Servidores/Cores/${message.guild.id}/${message.author.id}`).set({
      cor: depois
    });
    let embed = new Discord.MessageEmbed()
    .setColor(depois)
    .setTitle('<-- Nova cor de Perfil!')
    message.channel.send(embed)
  },
}