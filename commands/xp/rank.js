const Discord = require('discord.js');
const meuSet = new Set();
module.exports = {
  name: 'rank',
  aliases: ['toplevel', 'topxp', 'xptop', 'leveltop'],
  async execute (client, message, args, database) {
    let amigo = message.mentions.users.first() || message.author;
    const db = await database.ref(`Servidores/Levels/${message.guild.id}`).once('value');
    const array = Object.keys(db.val());
    
    array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, level: db.val()[e].level, xp: db.val()[e].xp
        };
        meuSet.add(infoMembro)
    });

     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
         if (a.level == b.level) {
           if(a.xp < b.xp) {
             return 1;
           }
           if(a.xp > b.xp) {
             return -1;
           }
         }
         if (a.level < b.level) {
           return 1;
         }
         if (a.level > b.level) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = `Sua posição: ${indice+1}º lugar`
         }
     })
     let x = [];
     if (xy.length >= 10) {
         for (y = 0; y < 10; y++) {
            let xp = xy.slice(y, y+1).map(a => a.xp);
             let level = xy.slice(y, y+1).map(a => a.level);
             let id = String(xy.slice(y, y+1).map(a => a.id));
             let ab = new Intl.NumberFormat('pt-BR').format(xp)
 
             x += `<a:713571976316452926:812064729413189652> **${y+1}º Lugar:** <@${String(id)}>\nLevel: **${level}** | XP: **${ab}**\n\n`
         }
     } else {
         for (y = 0; y < xy.length; y++) {
              let xp = xy.slice(y, y+1).map(a => a.xp);
             let level = xy.slice(y, y+1).map(a => a.level);
             let id = xy.slice(y, y+1).map(a => a.id);
             let ab = new Intl.NumberFormat('pt-BR').format(xp)
 
             x += `<a:713571976316452926:812064729413189652> **${y+1}º Lugar:** <@${String(id)}>\nLevel: **${level}** | XP: **${ab}**\n\n`
         }
     }
 
     const embed = new Discord.MessageEmbed()
     .setTitle('<a:atention2:749475313548787763> Rank! <a:atention2:749475313548787763>')
     .setDescription(`${x}`)
     .setThumbnail(message.guild.iconURL({ size: 1024, format: 'png', dynamic: true }))
     .setAuthor(message.guild.name, message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
     .setFooter(suaPosicao, message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
    .setColor('#2F3136')
     message.channel.send(embed);
 
     meuSet.clear();
},
}