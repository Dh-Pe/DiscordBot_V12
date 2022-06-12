const Discord = require('discord.js');
const canvacord = require('canvacord');
const meuSet = new Set();

module.exports = {
  name: 'perfil',
  aliases: ['profile'],
  async execute (client, message, args, database) {

    let amigo = message.mentions.users.first() || message.author;
    let db = await database.ref(`Servidores/Levels/${message.guild.id}/${amigo.id}`).once('value');
    let dbcor = await database.ref(`Servidores/Cores/${message.guild.id}/${amigo.id}`).once('value');
    const array = Object.keys(db.val());
    
    array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, level: db.val()[e].level, xp: db.val()[e].xp
        };
        meuSet.add(infoMembro)
    });

     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
         if (a.xp < b.xp) {
           return 1;
         }
         if (a.xp > b.xp) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = `${indice+1}`
         }
     })

    let fundo = db.val().background;
    if(!fundo) {
      fundo = './default.png';
    }

    let cor = dbcor.val().cor;
    if(!cor) {
      cor = '#FF8C00';
    }
    
    let mensagem = await message.channel.send('<a:direita:749475296352141394> | Processando a imagem...');

    let teste = 'a';
    
    const rank = new canvacord.Rank()
    .setAvatar(amigo.displayAvatarURL({ size: 1024, format: 'png' }))
    .setBackground("IMAGE", fundo)
    .setCurrentXP(db.val().xp)
    .renderEmojis(true)
    .setDiscriminator(amigo.discriminator, "#5e5e5e")
    .setLevel(db.val().level, "Level")
    .setLevelColor(cor, cor)
    .setStatus(amigo.presence.status)
    .setRequiredXP(db.val().level*600, "#5e5e5e")
    .setProgressBar(cor, "COLOR")
    .setUsername(amigo.username)
    .setRankColor("", cor)
    .setRank(Number(teste), "Level")
    .setProgressBarTrack("#5e5e5e");

  rank.build()
    .then(buffer => {
        canvacord.write(buffer, "RankCard.png");
        const attachment = new Discord.MessageAttachment("RankCard.png");
        mensagem.delete();
        message.channel.send(attachment);     
    });
  },
}