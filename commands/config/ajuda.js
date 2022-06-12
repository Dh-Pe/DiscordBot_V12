const Discord = require("discord.js");

module.exports = {
  name: 'ajuda',
  aliases: ['help', 'socorro', 'sos'],
  async execute (client, message, args, config) {
  if(message.channel != client.channels.cache.get('784963399913701376')) {
    return message.reply('Você está utilizando o canal errado, use <#784963399913701376> !')
  }
  let user = message.author;

     const ajuda = new Discord.MessageEmbed()
     .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
     .setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
     .setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
     .setTimestamp()
     .setTitle("Lista de comandos!")
     .setColor('#2F3136')
     .setDescription("Reaja de acordo com o que procura!\n\n<a:direita:749475296352141394> | <a:pc:749472837105877104>Comandos de Informação\n<a:direita:749475296352141394> | <a:756295007782305883:786456539766587393>Comandos de Diversão\n<a:direita:749475296352141394> | <a:ass:749472772660658196>Comandos Utilitários\n<a:direita:749475296352141394> | <a:610720145815633932:786452696613126144>Comandos de Competitivo\n<a:direita:749475296352141394> | <a:atention:749475324563161160>Comandos de Administração\n<a:direita:749475296352141394> | <a:768553913271975946:786371156004962344> Comandos de Level\n<a:direita:749475296352141394> | <a:591449760490061834:786365105335042049> Comandos de Economia")
     
   message.channel.send('`Verifique seu DM`')
   user.send(ajuda).then(msg => {
       msg.react('<a:pc:749472837105877104>').then(r => {
       msg.react('<a:756295007782305883:786456539766587393>').then(r => {
       msg.react('<a:ass:749472772660658196>').then(r => {
       msg.react('<a:610720145815633932:786452696613126144>').then(r => {
       msg.react('<a:atention:749475324563161160>').then(r => {
       msg.react('<a:768553913271975946:786371156004962344>').then(r => {
       msg.react('<a:591449760490061834:786365105335042049>').then(r => {
         
       })
       })
         })
       })
     })  
       })
       })

      const infoFilter = (reaction, user) => reaction.emoji.id === '749472837105877104' && user.id === message.author.id;
      const funFilter = (reaction, user) => reaction.emoji.id === '786456539766587393' && user.id === message.author.id;
      const utilFilter = (reaction, user) => reaction.emoji.id === '749472772660658196' && user.id === message.author.id;
      const compFilter = (reaction, user) => reaction.emoji.id === '786452696613126144' && user.id === message.author.id;
      const admFilter = (reaction, user) => reaction.emoji.id ==='749475324563161160' && user.id === message.author.id;
      const levelFilter = (reaction, user) => reaction.emoji.id === '786371156004962344' && user.id === message.author.id;
      const ecoFilter = (reaction, user) => reaction.emoji.id === '786365105335042049' && user.id === message.author.id;
 
      const info = msg.createReactionCollector(infoFilter);
      const fun = msg.createReactionCollector(funFilter);
      const util = msg.createReactionCollector(utilFilter);
      const comp = msg.createReactionCollector(compFilter);
      const adm = msg.createReactionCollector(admFilter);
      const level = msg.createReactionCollector(levelFilter);
      const eco = msg.createReactionCollector(ecoFilter);
      

      info.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setTitle("Comandos de Informação:")
        ajuda.setDescription('<a:direita:749475296352141394> | `+serverinfo` - Exibe as informações da Stars Alliance.\n<a:direita:749475296352141394> | `+userinfo` - Exibe as informações do usuário.\n<a:direita:749475296352141394> | `+botinfo` - Exibe as informações do Stars Alliance Bot.\n<a:direita:749475296352141394> | `+minestatus` - Exibe as informações do servidor Gearfriends.\n<a:direita:749475296352141394> | `+mchead` - Exibe a cabeça de um jogador de Minecraft.\n<a:direita:749475296352141394> | `+previsão` - Exibe as informações do clima de alguma cidade.')
        ajuda.setTimestamp()
        ajuda.setColor('#2F3136')
        msg.edit(ajuda)
      })
        fun.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setColor('#2F3136')
        ajuda.setTitle("Commandos de Diversão:")
        ajuda.setDescription('<a:direita:749475296352141394> | `+abraçar` - Dá um abraço em algum membro.\n<a:direita:749475296352141394> | `+avatar` - Exibe o avatar de um membro.\n<a:direita:749475296352141394> | `+beijar` - Dá um beijo em algum membro.\n<a:direita:749475296352141394> | `+coinflip` - Joga cara ou coroa com o bot.\n<a:direita:749475296352141394> | `+conquista` - Simula uma conquista no Minecraft.\n<a:direita:749475296352141394> | `+jokenpo` - Joga Pedra, Papel e Tesoura com o bot.\n<a:direita:749475296352141394> | `+shippar` - Shippa um casal de membros.\n<a:direita:749475296352141394> | `+tapa` - Dá um tapa em algum membro.\n<a:direita:749475296352141394> | `+vidente` - Faz uma pergunta ao vidente.')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
      util.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setTitle('Comandos Utilitários:') 
        ajuda.setDescription('<a:direita:749475296352141394> | `+ajuda` - Exibe os comandos do bot\n<a:direita:749475296352141394> | `+help` - Exibe os comandos do bot.\n<a:direita:749475296352141394> | `+sugestão` - Envia um sugestão.\n<a:direita:749475296352141394> | `+reverter` - Exibe a mensagem de trás pra frente.\n<a:direita:749475296352141394> | `+embed` - Envia uma mensagem dentro de um Embed.\n<a:direita:749475296352141394> | `+nature` - Exibe as estatísticas de cada nature.\n<a:direita:749475296352141394> | `+bigtext` - Exibe a sua mensagem com emojis de letras.\n<a:direita:749475296352141394> | `+lembrete` - Pede ao bot para lembrá-lo de algo.\n<a:direita:749475296352141394> | `+pokemon` - Exibe algumas informações dos pokémons.\n<a:direita:749475296352141394> | `+help` - Exibe os comandos do bot.\n<a:direita:749475296352141394> | `+casamento` - Verifica com quem está casado.\n<a:direita:749475296352141394> | `+casar` - Casa com um membro.\n<a:direita:749475296352141394> | `+divorciar` - Se divorcia de quem está casado com você.\n<a:direita:749475296352141394> | `+setaniversario` - Define a data do seu aniversário.\n<a:direita:749475296352141394> | `+aniversario` - Verifica o aniversário.')
        ajuda.setTimestamp()
        ajuda.setColor('#2F3136')
        msg.edit(ajuda)
      })      
      comp.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setTitle("Comandos de Competitivo:")
        ajuda.setColor('#2F3136') 
        ajuda.setDescription('<a:direita:749475296352141394> | `+LC` - Envia um set da tier [LC](https://www.smogon.com/dex/sm/formats/lc/).\n<a:direita:749475296352141394> | `+PU` - Envia um set da tier [PU](https://www.smogon.com/dex/sm/formats/pu/).\n<a:direita:749475296352141394> | `+NU` - Envia um set da tier [NU](https://www.smogon.com/dex/sm/formats/nu/).\n<a:direita:749475296352141394> | `+RU` - Envia um set da tier [RU](https://www.smogon.com/dex/sm/formats/ru/).\n<a:direita:749475296352141394> | `+UU` - Envia um set da tier [UU](https://www.smogon.com/dex/sm/formats/uu/).\n<a:direita:749475296352141394> | `+OU` - Envia um set da tier [OU](https://www.smogon.com/dex/sm/formats/ou/).\n<a:direita:749475296352141394> | `+UBER` - Envia um set da tier [Uber](https://www.smogon.com/dex/sm/formats/uber/).\n<a:direita:749475296352141394> | `+AG` - Envia um set da tier [AG](https://www.smogon.com/dex/sm/formats/ag/).\n<a:direita:749475296352141394> | `+DOUBLES` - Envia um set da tier [Doubles](https://www.smogon.com/dex/sm/formats/doubles/).\n<a:direita:749475296352141394> | `+MONOTYPE` - Envia um set da tier [Monotype](https://www.smogon.com/dex/sm/formats/monotype/).')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
      adm.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setColor('#2F3136') 
        ajuda.setTitle('Comandos de Administração:') 
        ajuda.setDescription('<a:direita:749475296352141394> | `+clear` - Limpa até 99 mensagens.\n<a:direita:749475296352141394> | `+paladin` - Anuncia o vencedor do Paladin.\n<a:direita:749475296352141394> | `+say` - Fala em nome do Bot.\n<a:direita:749475296352141394> | `+ban` - Aplica Ban em algum membro!\n<a:direita:749475296352141394> | `+unban` - Aplica Unban em algum membro!\n<a:direita:749475296352141394> | `+removerbot` - Remove o bot de algum servidor que ele está.\n<a:direita:749475296352141394> | `+offbot` - Desliga o bot.')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
      level.on('collect', r2 => {
        ajuda.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
        ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
        ajuda.setColor('#2F3136') 
        ajuda.setTitle('Comandos de Level:') 
        ajuda.setDescription('<a:direita:749475296352141394> | `+perfil` - Exibe seu custom perfil level.\n<a:direita:749475296352141394> | `+background` - Define um papel de parede para o seu custom perfil level.\n<a:direita:749475296352141394> | `+rank` - Mostra o ranking dos membros com maiories níveis.')
        ajuda.setTimestamp()
        msg.edit(ajuda)
      })
    eco.on('collect', r2 => {
        ajuda.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
      ajuda.setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
      ajuda.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
      ajuda.setColor('#2F3136')
      ajuda.setTimestamp()
      ajuda.setTitle('Comandos de Economia:')
      ajuda.setDescription('<a:direita:749475296352141394> | `+money` - Revisa seu banco de moedas.\n<a:direita:749475296352141394> | `+pagar` - Pagar algum membro.\n<a:direita:749475296352141394> | `+topmoney` - Revisa o Top dos mais ricos do servidor.\n<a:direita:749475296352141394> | `+inventario` - Verifica seu inventário de itens.\n<a:direita:749475296352141394> | `+loja` - Verifica a loja de itens.\n<a:direita:749475296352141394> | `+comprar` - Compra algum item da loja.\n<a:direita:749475296352141394> | `+roubar` - Rouba de um membro.\n<a:direita:749475296352141394> | `+contratar` - É contratado para trabalhar.\n<a:direita:749475296352141394> | `+trabalho` - Exibe qual o seu trabalho.\n<a:direita:749475296352141394> | `+salario` - Recebe o salário diário.')
      msg.edit(ajuda)
      
    })
})
},
}