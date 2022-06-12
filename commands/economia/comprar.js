const Discord = require('discord.js');
module.exports = {
  name: 'comprar',
  aliases: ['buy', 'adquirir', 'purchase'],
  async execute (client, message, args, database) {
  const dbanel = await database.ref(`Servidores/Anel/${message.guild.id}/${message.author.id}`).once('value');
  const db2 = await database.ref(`Servidores/Escudos/${message.guild.id}/${message.author.id}`).once('value');
  const dbkey = await database.ref(`Servidores/Keys/${message.guild.id}/${message.author.ud}`).once('value');
 database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value').then(async function (db) {
    let canal = client.channels.cache.get('791158657852768286');
    let produto = args.join(' ');
    if(!produto) {
      return message.reply('Você deve fornecer um ID para comprar algo!')
    }
    if(produto == '2548') {
      if(db.val().coins < 300000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 300000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 300000
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        everstone: db.val().everstone + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Everstone! Agora ele possui ${db.val().everstone + 1} Everstones em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
    if(produto == '2536') {
      if(db.val().coins < 250000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 250000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 250000
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        everstone: db.val().ranchblock + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Ranch Block! Agora ele possui ${db.val().ranchblock + 1} Ranch Blocks em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
    if(produto == '1632') {
      if(db.val().coins < 150000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 150000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 150000
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        everstone: db.val().destinyknot + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Destiny Knot! Agora ele possui ${db.val().destinyknot + 1} Destiny Knots em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
   if(produto == '0192') {
      if(db.val().coins < 150000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 150000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 150000
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        everstone: db.val().pokemonperfeitoaleatorio + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Pokémon Perfeito aleatório! Agora ele possui ${db.val().pokemonperfeitoaleatorio + 1} Pokémons Perfeitos Aleatórios em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
     if(produto == '0485') {
      if(db.val().coins < 50000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 50000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 50000
      });
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        zygardecell: db.val().zygardecell + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Zygarde Cell! Agora ele possui ${db.val().zygardecell + 1} Zygarde Cells em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
        if(produto == '3232') {
      if(db.val().coins < 1000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 1000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 1000
      });
      database.ref(`Servidores/Escudos/${message.guild.id}/${message.author.id}`).update({
        escudo: db2.val().escudo + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Escudo! Agora ele possui ${db2.val().escudo + 1} Escudo em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }

    if(produto == '9999') {
      if(db.val().coins < 5000) {
        return message.reply('Você não tem dinheiro para comprar isso!')
      }
      if(db.val().coins >= 5000) {
      database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
        coins: db.val().coins - 5000
      });

      database.ref(`Servidores/Anel/${message.guild.id}/${message.author.id}`).update({
        anel: dbanel.val().anel + 1
      });
      let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Anel! Agora ele possui ${dbanel.val().anel + 1} Anel em seu inventário!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
    }
    }
    if(produto == '7650') {
      if(db.val().coins < 15000) {
        return message.reply('você não tem dinheiro apra comprar isso!')
      }
      if(dbkey.val() != null) {
        return message.reply('você já tem ou usou uma Pet-Key!')
      }
      if(db.val().coins >= 15000) {
        database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
          coins: db.val().coins - 15000
        });

        database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).set({
          petkey: 1
        });

        let embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setTitle('Compra!')
        .setDescription(`${message.author} comprou 1 Pet-Key! Agora possui uma Pet-Key!`)
        .setFooter(`2021 © ${client.user.username}`)
        message.channel.send(embed)
        canal.send(embed)
      }
    }
  })
},
}