const Discord = require('discord.js');

module.exports = {
  name: '1v1',
  aliases: ['guerra', 'war', '1x1', '1vs1'],
  async execute (client, message, args) {
    var list1 = [
      'https://i.pinimg.com/originals/59/b2/4f/59b24ffd6ac6d965ff34d642944a72e5.gif',
      'https://deliriumnerd.com/wp-content/uploads/2017/02/tumblr_inline_nnq9yoLlSe1rebult_500.gif',
      'https://i.pinimg.com/originals/cb/8b/51/cb8b51174d4f6364fd8e23d23ba7b0bd.gif',
      'https://i.pinimg.com/originals/d3/d0/1a/d3d01a40bb7f0b0f55bd075ef55d6587.gif'
    ]
    let num1 = list1[Math.floor(Math.random() * list1.length)]
    var list2 = [
      'https://thumbs.gfycat.com/UnawareBitesizedIntermediateegret-size_restricted.gif',
      'http://sm.ign.com/ign_br/screenshot/default/a8a14aee821ab50dc31a49a396ce4c08_sf67.gif',
      'https://i.pinimg.com/originals/60/80/34/60803489b6cc200f7878777ccfec1303.gif'
    ]
    let num2 = list2[Math.floor(Math.random() * list2.length)]
    var list3 = [
      'https://thumbs.gfycat.com/BelovedPaleCreature-size_restricted.gif',
      'https://pa1.narvii.com/6457/ef21d3fe6324b364aa23f0d398aec3190dda0b6a_hq.gif',
      'https://pa1.narvii.com/6457/fba783d9bd0ad25e4e6c505b08b9ce48d6c8d1bb_hq.gif',
      'https://geekquantico.com.br/wp-content/uploads/2019/08/Barba-Branca-vs-Akainu.gif'
    ]
    let num3 = list3[Math.floor(Math.random() * list3.length)]
    var list4 = [
      'https://i.pinimg.com/originals/fe/b7/c9/feb7c92bc76188922ce1ab342900e22c.gif',
      'https://i.pinimg.com/originals/40/a2/f1/40a2f142cb51e16c627647472d73815a.gif',
      'https://66.media.tumblr.com/cc8aeba4edd456c42bb1ff749874f1aa/tumblr_mqe4wg1pZP1rap179o1_500.gif'
    ]
    let num4 = list4[Math.floor(Math.random() * list4.length)]
    var list5 = [
      ''
    ]
    let num5 = list5[Math.floor(Math.random() * list4.length)]

    let user = message.mentions.users.size;
    if(user != 2) return message.reply('mencione 2 pessoas para começar uma guerra!')

    let useralt = message.mentions.users.random(); 
  
  const versus = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Está começando uma guerra!")
  .setImage(num1)
  message.channel.send(versus).then(msg => {

    let embed1 = new Discord.MessageEmbed()
    .setDescription('Quem será que irá ganhar?')
    .setImage(num2)
    setTimeout(() => {
    msg.edit(embed1)
    }, 5000)
    let embed2 = new Discord.MessageEmbed()
    .setDescription('Está rolando muito soco!')
    .setImage(num3)
    setTimeout(() => {
    msg.edit(embed2)
    }, 5000)

    let embed3 = new Discord.MessageEmbed()
    .setDescription('Alguém acaba de levar um ferimento de espada!')
    .setImage(num4)
    setTimeout(() => {
    msg.edit(embed3)
    }, 10000)

    let embed4 = new Discord.MessageEmbed()
    .setDescription('Acabo de escutar um tiro!')
    .setImage(num5)
    setTimeout(() => {
    msg.edit(embed4)
    }, 15000)

    let embed5 = new Discord.MessageEmbed()
    .setDescription('Vejo muito sangue!')
    .setImage('https://64.media.tumblr.com/77020d6e1dfa36adcda4628e05e42c5c/tumblr_mi0z1uzBgM1r1vi9ao1_500.gif')
    setTimeout(() => {
    msg.edit(embed5)
    }, 20000)

    let embed6 = new Discord.MessageEmbed()
    .setDescription('Parece que temos um vencedor!')
    .setImage('https://i.pinimg.com/originals/47/12/89/471289cde2490c80f60d5e85bcdfb6da.gif')
    setTimeout(() => {
    msg.edit(embed6)
    }, 25000)

    let embed7 = new Discord.MessageEmbed()
    .setDescription(`${useralt} venceu! Como pode isso?`)
    .setImage('https://media1.tenor.com/images/20832fc76951bc40e013f16dcf4eac70/tenor.gif')
    setTimeout(() => {
    msg.edit(embed7)
    }, 30000)
  })
  },
}