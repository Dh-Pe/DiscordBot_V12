/*const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'addcommand',
  aliases: ['commandadd', 'addcmd', 'cmdadd'],
  async execute (client, message, args){
    if(message.author.id === '368552464070344704') {
      const name_file = args[0]; //pegando o "nome"
    const format = `.${args[1]}`; //pegando o "formato"
    const content = args.splice(2).join(' '); //pegando o "conteudo"
    fs.appendFile(`./commands/${name_file}${format}` Nome do arquivo com o formato a ser criado , `${content}` /*conteudo do arquivo , function(err) {
        if (err) throw err;
        console.log(`Arquivo ${name_file}${format}, criado com sucesso`);
        message.channel.send(`A arquivo \`${name_file}${format}\` foi criado com sucesso`);
    })
    }
    message.channel.send('Você não é meu dono para adicionar comandos!')
  }
};*/