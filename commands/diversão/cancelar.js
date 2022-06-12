const Discord = require('discord.js');

module.exports = {
  name: 'cancelar',
  aliases: ['cancelamento', 'cancel'],
  async execute (client, message, args) {
  var respostas = [
    "por não ser ninguém.",
    "por ser BV.",
    "por debochar demais.",
    "por ser impaciente demais.",
    "por ter muita preguiça.",
    "por ser trouxa.",
    "por se atrasar sempre.",
    "por se considerar incancelável.",
    "por ser inútil.",
    "por pedir muito biscoito.",
    "por ser gado demais.",
    "por não fazer nada.",
    "por ser uma delícia.",
    "por ser inteligente demais.",
    "por ser inadimplente no Serasa.",
    "por ser uma pessoa horrível.",
    "por ser insuportável.",
    "por ser poser.",
    "por ter virado o Coronga.",
    "por ser atraente demais.",
    "por ser comunista.",
    "por ser boy lixo.",
    "por ter charme demais.",
    "por ser corno.",
    "por ser padrãozinho.",
    "por contar muita piada ruim.",
    "por ser uma grande gostosa.",
    "por ser insensível.",
    "por procrastinar demais.",
    "por ser uma grande bosta.",
    "por ser uma bela de uma vergonha para o universo.",
    "por ser a vergonha da familia.",
    "por ter um xiaomi.",
    "por gostar de sushi.",
    "por reclamar muito no twitter.",
    "por ter poucos seguidores.",
    "por gostar de assistir BBB21.",
    "por ter cílios grandes.",
    "por ser maravilhosa."
  ]

   var cancel = respostas[Math.floor(Math.random() * respostas.length)];

var amigo = message.mentions.users.first() || message.author;
   let embed = new Discord.MessageEmbed()
   .setTitle('Cancelamento!')
   .setDescription(`${amigo} foi cancelado(a) ${cancel}`)
   .setTimestamp()
   .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
   .setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
   .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
   .setColor('#2F3136')
   
   message.channel.send(embed)
},
}