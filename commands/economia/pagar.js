const { emnbedcolor } = require('../../config.json')
const Discord = require('discord.js');
module.exports = {
name: 'pagar',
aliases: ['pay'],
async execute (client, message, args, database) {
let db1 = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');
let user1 = message.mentions.users.first() || client.users.cache.get(args[0]);
if(!user1) return message.channel.send('`Mencione alguém ou forneça um ID de usuário!`')
let db2 = await database.ref(`Servidores/Levels/${message.guild.id}/${user1.id}`).once('value');
let dinheiro = args.slice(1).join(' ');
if(!dinheiro) return message.channel.send('`Digite uma quantia de dinheiro!`')
if(isNaN(dinheiro)) return message.channel.send('`Digite uma quantia numérica!`')
if(dinheiro > db1.val().coins) return message.channel.send('`Você não pode pagar mais do que você tem!`')
if(dinheiro <= 0) return message.channel.send('`Você não pode pagar essa quantia!`')
let dinheiro1 = new Intl.NumberFormat('pt-BR').format(dinheiro);
database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({coins: db1.val().coins - Number(dinheiro)});
database.ref(`Servidores/Levels/${message.guild.id}/${user1.id}`).update({coins: db2.val() + Number(dinheiro)});
let embed = new Discord.MessageEmbed()
.setTitle('Pagamento!')
.addField('Remetente:', message.author)
.addField('Destinatário:', user1)
.addField('Quantia paga:', dinheiro1)
.setFooter(message.guild.name, message.guild.iconURL())
.setAuthor(message.guild.name, message.guild.iconURL())
message.channel.send(embed)
},
}