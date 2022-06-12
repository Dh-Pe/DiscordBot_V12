const Discord = require('discord.js');
const meuSet = new Set();
module.exports = {
  name: 'topmoney',
  aliases: ['rankmoney', 'moneytop', 'topdinheiro', 'dinheirotop'],
  async execute (client, message, args, database) {
    let amigo = message.mentions.users.first() || message.author;
    const db = await database.ref(`Servidores/Levels/${message.guild.id}`).once('value');
    const array = Object.keys(db.val());
    
    array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, coins: db.val()[e].coins
        };
        meuSet.add(infoMembro)
    });

     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
         if (a.coins < b.coins) {
           return 1;
         }
         if (a.coins > b.coins) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = `Sua posição: ${indice+1}º Lugar`
         }
     })
     let x = [];
     if (xy.length >= 10) {
         for (y = 0; y < 10; y++) {
             let coin = xy.slice(y, y+1).map(a => a.coins);
             let ab = new Intl.NumberFormat('pt-BR').format(coin)
             let id = String(xy.slice(y, y+1).map(a => a.id));
 
             x += `<a:703884175782051861:812064729040027691> **${y+1}º Lugar:** <@${String(id)}>\nMoney: **${ab}**\n\n`
         }
     } else {
         for (y = 0; y < xy.length; y++) {

              
              let coin = xy.slice(y, y+1).map(a => a.coins);
              let ab = new Intl.NumberFormat('pt-BR').format(coin)
 
             x += `<a:703884175782051861:812064729040027691> **${y+1}º Lugar:** <@${String(id)}>\nMoney: **${ab}**\n\n`
         }
     }
 
     const embed = new Discord.MessageEmbed()
     .setTitle('<a:atention2:749475313548787763> Top Money! <a:atention2:749475313548787763>')
     .setDescription(`${x}`)
     .setFooter(suaPosicao, message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
     .setAuthor(message.guild.name, message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
     .setColor('#2F3136')
     .setThumbnail(message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
     message.channel.send(embed);
 
     meuSet.clear();
},
}