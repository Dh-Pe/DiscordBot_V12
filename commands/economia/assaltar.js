const ms = require('parse-ms');
const Discord = require('discord.js');
module.exports = {
name: 'assaltar',
aliases: ['assault', 'pilhar', 'plunder'],
async execute (client, message, args, database){
let timeout = 432000000;
let data = await database.ref(`Servidores/Assalto/${message.guild.id}/${message.author.id}`).once('value');
let amigo = message.mentions.users.first();
if(!amigo) return message.channel.send('Você precisa mencionar alguém para roubar o banco dele(a)!')
if(amigo == message.author) return message.channel.send('você não pode roubar o seu próprio banco!')
let dbamigo = await database.ref(`Servidores/Banco/${message.guild.id}/${amigo.id}`).once('value');
let dbeu = await database.ref(`Servidores/Banco/${message.guild.id}/${message.author.id}`).once('value');
let dbdinheiroamigo = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');
let dbdinheiroeu = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
if(dbdinheiroeu.val().coins < '10000') return message.channel.send('você não tem **10,000 coins** para tentar roubar um banco!')
if(dbdinheiroeu.val().level < 20) return message.channel.send('você não é **Level 20** para tentar roubar um banco!')
if(dbamigo.val().sacos <= 0) return message.channel.send('você não pode roubar um banco que não tem dinheiro!')
if(data.val().time !== null && timeout - (Date.now() - data.val().time) > 0){
let tempo = ms(timeout - (Date.now() - data.val().time));
return message.channel.send(`**Você ja tentou assaltar alguém, volte em ${tempo.days} dias, ${tempo.hours} hora(s), ${tempo.minutes} minutos, e ${tempo.seconds} segundos.**`)
} else {
database.ref(`Servidores/Assalto/${message.guild.id}/${message.author.id}`).set({time: Date.now()})
var possivel = ['conseguiu', 'impossivel'];
var randres = possivel[Math.floor(Math.random() * possivel.length)];
if(randres == 'impossivel') {
database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({coins: dbdinheiroeu.val().coins - 10000});
database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).update({coins: dbdinheiroamigo + 10000});
let embed = new Discord.MessageEmbed()
.setTitle('Assalto')
.setAuthor(message.guild.name, message.guild.iconURL())
.setTimestamp()
.addField('Assalto feito por:', message.author, true)
.addField('No banco do:', amigo, true)
.addField('Conclusão do assalto:', 'Foi um fracasso! E você perdeu 10,000 coins!')
.setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
.setColor('#2F3136')
.setThumbnail(amigo.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
.setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
return message.channel.send(embed)
}
if(randres == 'conseguiu') {
database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({coins: dbdinheiroeu.val().coins + Number(dbamigo.val().sacos)});
database.ref(`Servidores/Banco/${message.guild.id}/${amigo.id}`).update({coins: 0});
let embed = new Discord.MessageEmbed()
.setTitle('Assalto!')
.setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
.setTimestamp()
.addField('Assalto feito por:', message.author, true)
.addField('No banco do:', amigo, true)
.addField('Conclusão do assalto:', `Foi um sucesso! E você conseguiu **${dbamigo.val().sacos} coins**`)
.setFooter(message.guild.name, message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
.setColor('#2F3136')
.setThumbnail(amigo.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
return message.channel.send(embed)
}
}
},
}