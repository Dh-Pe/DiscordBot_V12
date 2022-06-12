const Discord = require('discord.js');

module.exports = {
  name: "ticket",
  async execute (client, message, args) {
  let canalnome = `${message.author.username}-ticket`;
    const categoryId = '812748158307139594';
  let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
  let role = message.guild.roles.cache.find(r => r.name === "Comandante");

  message.guild.channels.create(canalnome, {
  type: 'text',
    permissionOverwrites:[
      {
        deny: 'VIEW_CHANNEL',
        id: message.guild.id
      },
      {
        allow: permsToHave,
        id: message.author.id
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
  .setDescription(`Olá, ${message.author} Obrigado por entrar em contato com nossa equipe de suporte. Estaremos prontos para ajudá-lo o mais breve possível. Enquanto isso, descreva seus problemas com o máximo de detalhes possível.`)
  .setTimestamp()
  .setAuthor(message.guild.name, message.guild.iconURL({ size: 1024, dynamic: true, format: 'png' }))
  .setFooter(message.author.username)
  .setThumbnail(message.author.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
  channel.send(`${message.author}\n<@368552464070344704>`)
  channel.send(embed)
  message.channel.send(`Novo Ticket Criado em <#${channel.id}>`)
})
},
}