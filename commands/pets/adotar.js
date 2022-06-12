/*const Discord = require('discord.js');

module.exports = {
  name: 'adotar',
  async execute (client, message, args, database) {
    let db = await database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).once('value');
    let db2 = await database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).once('value');

    if(db.val().petkey == null) return message.channel.send('Você não possui **Pet-Key**!')
    if(db.val().petkey <= 0) return message.channel.send('Você não possui **Pet-Key**')
    if(db2.val() != null) return message.channel.send('Você já possui um **Pet**')

    let pet = args[0];
    if(!pet) return message.channel.send('Use `+adotar <nome do pet>`')

    if(pet.toLowerCase == 'cachorro') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'cachorro'
      });
      message.channel.send('Você adotou um Cachorro!')
    }

    if(pet.toLowerCase == 'gato') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'gato'
      });
      message.channel.send('Você adotou um Gato!')
    }

    if(pet.toLowerCase == 'furao') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'furão'
      });
      message.channel.send('Você adotou um Furão!')
    }

    if(pet.toLowerCase == 'hamster') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'hamster'
      });
      message.channel.send('Você adotou um Hamster!')
    }

    if(pet.toLowerCase == 'papagaio') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'papagaio'
      });
      message.channel.send('Você adotou um Papagaio!')
    }

    if(pet.toLowerCase == 'loli') {
      database.ref(`Servidores/Keys/${message.guild.id}/${message.author.id}`).update({
        petkey: db.val().petkey - 1
      });
      database.ref(`Servidores/Pets/${message.guild.id}/${message.author.id}`).set({
        pets: 'loli'
      });
      message.channel.send('Você adotou uma Loli!')
    }
  },
}*/