const { WebhookClient, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'fakemsg',
  aliases: ['msgfake', 'msgfalsa', 'falsamsg'],
  async execute (client, message, args) {
  let amigo = message.mentions.users.first();
  if(!amigo) {
    return message.reply('Mencione alguém para fazer o FakeMsg!')
  }
  let fala = args.slice(1).join(" ");
  if(!fala) {
    return message.reply('Me diga o que é pra mim dizer no FakeMsg!')
  }
  if(message.channel == client.channels.cache.get('784962555260436512')) {
  const wh = new WebhookClient('797191947240472576', '4JFiGZisY5T2r0agcjQfZv7omMFIm2KjuccArkVvv3mIBRiXzpNtwN7NPto_NAPo7AQM')
    message.delete().catch(O_o => {});
    wh.send(fala, {
        username : amigo.username,
        avatarURL : amigo.displayAvatarURL({ dynamic : true })
    })
  }
  if(message.channel == client.channels.cache.get('784963399913701376')) {
  const wh = new WebhookClient('801615547166228481',  'CCcdM3oP-a6lTSdIj9ti7LJXiXA63erzrlE7rU8mbNxRiUAb9o8NX0_Qz4ESqIwqjuj8')
    message.delete().catch(O_o => {});
    wh.send(fala, {
        username : amigo.username,
        avatarURL : amigo.displayAvatarURL({ dynamic : true })
    })
  }
  if(message.channel == client.channels.cache.get('784963534588477471')) {
  const wh = new WebhookClient('801616321455718440', 'j8dl5ycVY-Tiu8nw7zZLpODfA97VL_4_UQvKuJXAkxqUk_QrGFYXCXNjU9-n_nQQ14P3')
    message.delete().catch(O_o => {});
    wh.send(fala, {
        username : amigo.username,
        avatarURL : amigo.displayAvatarURL({ dynamic : true })
    })
  }
},
}