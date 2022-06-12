const Discord = require('discord.js');
const ms = require('parse-ms');

module.exports = {
  name: 'salario',
  aliases: ['salário', 'receber', 'pagamento'],
  async execute (client, message, args, database, config) {
  let timeout = 86400000;
  let salario = await database.ref(`Servidores/Salario/${message.guild.id}/${message.author.id}`).once('value');
  let db = await database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value');

  if(salario.val().cool !== null && timeout - (Date.now() - salario.val().cool) > 0) {
    let time = ms(timeout - (Date.now() - salario.val().cool));
    return message.channel.send(`**Você ja coletou seu salário, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
  } else {
    database.ref(`Servidores/Salario/${message.guild.id}/${message.author.id}`).set({cool: Date.now()})

  if(db.val().trabalho == null) {
    return message.channel.send('Use **+contratar** para ter um emprego!')
  }


  //Artista

  if(db.val().trabalho == "Artista") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você vendeu uma obra para o Museu de Belas Artes e recebeu **1,000 coins** hoje!')
  }

  //Arquiteto

  if(db.val().trabalho == "Arquiteto") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você criou um projeto para um monumento e recebeu **1,000 coins** hoje!')
  }

  //Advogado

  if(db.val().trabalho == "Advogado") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você venceu em um caso de roubo, depois prendeu o criminoso e recebeu **1,000 coins** hoje!')
  }

  //Fotógrafo

  if(db.val().trabalho == "Fotógrafo") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você tirou uma foto que recebeu a capa da revista e recebeu **1,000 coins** hoje!')
  }

  //Ator

  if(db.val().trabalho == "Ator") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você atuou como protagonista em um filme e recebeu **1,000 coins** hoje!')
  }

  //Musicista

  if(db.val().trabalho == "Musicista") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você produziu um album novo e recebeu **1,000 coins** hoje!')
  }

  //Jornalista

  if(db.val().trabalho == "Jornalista") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você foi designado para escrever a matéria de esportes e recebeu **1,000 coins** hoje!')
  }

  //Engenheiro

  if(db.val().trabalho == "Engenheiro") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você planejou um projeto na área de construção civil e recebeu **1,000 coins** hoje!')
  }

  //Psicólogo

  if(db.val().trabalho == "Psicólogo") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você fez novos processos de psicoterapia e recebeu **1,000 coins** hoje!')
  }

  //Médico

  if(db.val().trabalho == "Médico") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você cuidou de muitos pacientes e recebeu **1,000 coins** hoje!')
  }

  //Cozinheiro

  if(db.val().trabalho == "Cozinheiro") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você criou um novo prato para o cardápio e recebeu **1,000 coins** hoje!')
  }

  //Biólogo

  if(db.val().trabalho == "Biólogo") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você catalogou uma nova espécie de inseto e recebeu **1,000 coins** hoje!')
  }

  //Professor

  if(db.val().trabalho == "Professor") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você ensinou bem a sua turma com a presença de um Diretor e recebeu **1,000 coins** hoje!')
  }

  //Político

  if(db.val().trabalho == "Político") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você roubou dinheiro da população e recebeu **1,000 coins** hoje!')
  }

  //Lojista

  if(db.val().trabalho == "Lojista") {
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
      coins: db.val().coins + 1000
    });
    return message.channel.send('Você vendeu todo o estoque e recebeu **1,000 coins** hoje!')
  }

  }

},
}