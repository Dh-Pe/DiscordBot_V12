const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
client.queue = new Map();
client.vote = new Map();

var { database } = require('./system/banco.js');

  client.on('message', async message => {
    if (message.channel.type == 'dm') return;
    global.xp = '';
    global.nextLevel = '';
    global.coin = '';
    let pointsAdd = Math.floor(Math.random() * 7)+ 8;
    let moneyAdd = Math.floor(Math.random() * 10)+ 33;

    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
    .once('value').then(async function(snap) {
      if(message.author.bot) return;
      if(snap.val() == null) {
            database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
            .set({
              xp: 0,
              level: 1,
              coins: 135,
              everstone: 0,
              ranchblock: 0,
              destinyknot: 0,
              pokemonperfeitoaleatorio: 0,
              background: './default.png',
              user: message.author.username
            });
      } else {
        xp = snap.val().xp + pointsAdd;
        nextLevel = snap.val().level * 600;
        database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).update({
          xp: xp
        })

        if(nextLevel <= xp) {
          nextLevel = snap.val().level + 1;
          nextCoins = snap.val().coins + 1542 + moneyAdd;
        database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
        .update({
          xp: 0,
          coins: nextCoins,
          level: nextLevel
        })
        let embed = new Discord.MessageEmbed()
        .setTitle('Up!')
        .addField('Level anterior:', nextLevel - 1)
        .addField('Level atual:', nextLevel)
        .setDescription(`**${message.author.username}**, você passou de level! Use **+perfil**`)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
        .setFooter(message.author.username)
        .setColor('#2F3136')
        await message.channel.send(embed)
        } 
      }
    })
  })



   client.on('message', async message => {
 if (message.author.bot) return;
    if (!message.guild) return;
    let opan = new Discord.MessageEmbed()
         .setColor('#2F3136')
         .setThumbnail(client.user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
         .setTitle('<a:atention2:749475313548787763> | Olá, eu sou Baymax! O bot pessoal do seu servidor!')
         .addField('<a:direita:749475296352141394> | Meu prefixo é...', '`+`')
         .addField('<a:direita:749475296352141394> | Use o comando...', '`+help` ou `+ajuda`')
         .addField('<a:direita:749475296352141394> | Esse é o servidor Gearfriends...', '[Clique aqui](https://discord.gg/pdsq8UC)')
         .setFooter(client.user.username)
         .setTimestamp()
         .setImage('https://www.imagensanimadas.com/data/media/562/linha-imagem-animada-0386.gif')
     let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`];
     mention.find(mention => {
        if (message.content === mention)
            message.channel.send(opan).then(msg => {
                msg.delete({ timeout: 100000 });
            });
    });
});
  
    
  
  client.on('guildMemberAdd', async member => {
    if(member.guild.id != '') return;
let canal = client.channels.cache.get('784961761345929216');
let embed = new Discord.MessageEmbed()
.setTitle('<a:770260766091247626:786365106187010048> Boas Vindas! <a:770260766091247626:786365106187010048>')
.setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setAuthor('www.gearfriends.net', 'https://images-ext-1.discordapp.net/external/NV1cTheo0P8dnairh-SVBY8Ut8Gra2UoyOLx3y3Ez7g/http/download.gearfriends.net/DiscordGearGlobal.gif', 'https://gearfriends.net/')
.addField('<a:direita:749475296352141394> Evite punições!', '| Leia as <#784962919162970122>! |', true)
.setColor('#2F3136')
.addField('<a:direita:749475296352141394> Tag:', `| ${member.user.tag} |`, true)
.addField('<a:direita:749475296352141394> ID:', `| ${member.user.id} |`, true)
.setFooter('Stars Alliance!', 'https://images-ext-2.discordapp.net/external/6rrcHXTTBgF_MZsSd8gYvuZ6h8E_261RjxWePnKLNrM/http/gearkill.com/DiscordGearGlobal.gif')
 canal.send(embed)
});

client.on('guildMemberRemove', async (member) => {
  let db = await database.ref(`Servidores/Levels/${member.guild.id}/${member.id}`).once('value');
  database.ref(`Servidores/Levels/${member.guild.id}/${member.id}`).set(null)
  let canal = await client.channels.cache.get('784961761345929216');
  canal.send(`<a:direita:749475296352141394> ${member.user} saiu do servidor...`)
});

client.on('message', async (message) => {
  if(['corno', 'gado', 'gadão', 'gadao'].includes(message.content)) {
    message.react('🐂')
  } else {
  if(message.content == 'merda') {
    message.react('💩')
    }
  }

});

client.on('raw', async dados => {
if(dados.t !== "MESSAGE_REACTION_ADD") return
if(dados.d.message_id != "826226520422744095") return
let servidor = client.guilds.cache.get("784961361259003936")
let membro = servidor.members.cache.get(dados.d.user_id)
if(dados.t === "MESSAGE_REACTION_ADD"){
if(dados.d.emoji.name === "🏆"){
let canalnome = `${membro.user.username}-ticket`;
const categoryId = '812748158307139594';
let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
let role = servidor.roles.cache.find(r => r.name === "Comandante");
servidor.channels.create(canalnome, {
type: 'text',
permissionOverwrites:[
{
deny: 'VIEW_CHANNEL',
id: servidor.id
},
{
allow: permsToHave,
id: membro.id
},
{
allow: permsToHave,
id: role.id
},  
],
parent: categoryId,
})
.then((channel) => {
let embed = new Discord.MessageEmbed()
.setTitle(':ticket: Pedido de Ajuda!')
.setColor('#2F3136')
.setDescription(`Olá, ${membro.user} Obrigado por entrar em contato com nossa equipe de suporte. Estaremos prontos para ajudá-lo o mais breve possível. Enquanto isso, descreva seus problemas com o máximo de detalhes possível.`)
.setTimestamp()
.setAuthor(servidor.name, servidor.iconURL({ size: 1024, dynamic: true, format: 'png' }))
.setFooter(membro.user.username)
.setThumbnail(membro.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
channel.send(`${membro.user}\n<@368552464070344704>`)
channel.send(embed)
})
}
}
});

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "784965142151954452") return

    let servidor = client.guilds.cache.get("784961361259003936")
    let membro = servidor.members.cache.get(dados.d.user_id)

    let cargo1 = servidor.roles.cache.get('785140971662475275')
    let cargo2 = servidor.roles.cache.get('785141146598899743')
    let cargo3 = servidor.roles.cache.get('798224167212023836')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "⚔️"){
            if(membro.roles.cache.has(cargo1)) return
            membro.roles.add(cargo1).catch(console.error)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.name === "⚔️"){
            if(membro.roles.cache.has(cargo1)) return
            membro.roles.remove(cargo1)
        }
    }
     if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "🛠️"){
            if(membro.roles.cache.has(cargo2)) return
            membro.roles.add(cargo2).catch(console.error)
        }
    }
        if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.name === "🛠️"){
            if(membro.roles.cache.has(cargo2)) return
            membro.roles.remove(cargo2)
    }
         if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.name === "🥕"){
            if(membro.roles.cache.has(cargo3)) return
            membro.roles.add(cargo3).catch(console.error)
        }
    }
        if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.name === "🥕"){
            if(membro.roles.cache.has(cargo3)) return
            membro.roles.remove(cargo3)
        }
    }
})

    client.on("ready", () => {
        let activities = [
            `Utilize ${config.prefix}help para obter ajuda`,
            `Utilize ${config.prefix}ajuda para obter ajuda`,
            `${client.channels.cache.size} canais!`,
            `${client.users.cache.size} usuários!`
          ],
          i = 0;
        setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
              type: ""
            }), 1000 * 10); 
        client.user
            .setStatus("online")
            .catch(console.error);
      console.log("Estou Online!")
      });


 client.commands = new Discord.Collection();
 const commandFolders = fs.readdirSync('./commands');
 for (const folder of commandFolders) {
 const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
 for (const file of commandFiles) {
 const command = require(`./commands/${folder}/${file}`);
 client.commands.set(command.name, command);
 }
 }

    client.on('message', async message => {
      if(message.channel.type == 'dm') return;
    if(message.author.bot || !message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const cmd = client.commands.get(cmdName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

    if(!cmd) return message.reply(`\`${cmdName}\`  esse comando não existe!`);

    try{
        cmd.execute(client, message, args, database, config);
    }catch(err){
        message.reply(`Comando com erro, por favor, vizualize o console`);
        client.users.cache.get('368552464070344704').send(err);
    }

});

client.on('ready', () => {
 const commandFolders = fs.readdirSync('./commands');
 for (const folder of commandFolders) {
 const comandos = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    comandos.forEach(cmd => {
        console.log(`${cmd} carregado!`)
    })
 }
    console.log(`${client.user.tag} carregado com sucesso!`)
})

client.on('channelCreate', (channel) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Canal criado!')
  .addField('Nome:', channel.name)
  .addField('Id', channel.id)
  .addField('Canal:', `<#${channel.id}>`)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('channelDelete', (channel) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Canal deletado!')
  .addField('Nome:', channel.name)
  .addField('Id', channel.id)
  .setColor(config.embedcolor)
  canel.send(embed)
})
client.on('channelUpdate', (oldChannel, newChannel) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Canal Editado!')
  .addField('Nome anterior:', oldChannel.name)
  .addFIeld('Nome atual:', newChannel.name)
  .addField('Id', newChannel.id)
  .addField('Canal:', `<#${newChannel.id}>`)
  .setColor(confg.embedcolor)
  canal.send(embed)
})
client.on('guildMemberUpdate', (oldMember, newMember) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Nickname Editado!')
  .addField('Nome anterior:', oldMember)
  .addFIeld('Nome atual:', newMember)
  .addField('Id:', newMember.id)
  .addField('Membro:', `<@${newMember.id}>`)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('guildUpdate', (oldGuild, newGuild) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Servidor Editado!')
  .addField('Nome anterior:', oldGuild)
  .addField('Nome atual:', newGuild)
  .addField('Id:', newGuild.id)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('inviteCreate', (invite) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Invite Criado!')
  .addField('Invite:', invite)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('inviteDelete', (invite) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Invite Deletado!')
  .addField('Invite:', invite)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('messageDelete', (message) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Mensagem Deletada!')
  .addField('Mensagem:', message)
  .addField('Membro:', message.author)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('messageReactionAdd', (messageReaction, user) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Mensagem Reagida!')
  .addField('Mensagem:', messageReaction.id)
  .addField('Membro:', user)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('messageReactionRemove', (messageReaction, user) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Mensagem Desreagida!')
  .addField('Mensagem:', messageReaction.id)
  .addField('Membro:', user)
  .setColor(config.embedcolor)
  canal.send(embed)
})
client.on('messageUpdate', (oldMessage, newMessage) => {
  const canal = client.channels.cache.get(config.logs)
  const embed = new Discord.MessageEmbed()
  .setTitle('Mensagem Editada!')
  .addField('Mensagem anterior:', oldMessage)
  .addField('Mensagem atual:', newMessage)
  .setColor(config.embedcolor)
  canal.send(embed)
})

client.login(config.token)