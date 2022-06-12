const Discord = require('discord.js');
module.exports = {
  name: 'regras',
  aliases: ['rules'],
  async execute (client, message, args, config) {
    const channel = client.channels.cache.get('784962919162970122');
    if(message.author.id != '368552464070344704') return message.channel.send('vc n')
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:atention2:749475313548787763> Regras <a:atention2:749475313548787763>')
    .addField('<a:emoji_15:786443931038122056> Ofensas:', 'Quando entrar no servidor tenha bom senso, deve-se ter em mente que ao conhecer algum novo membro algumas pessoas levam as coisas mais na brincadeira enquanto outras são mais sérias. Durante as conversas, saiba respeitar diferentes opiniões e pessoas. Brincadeiras idiotas, desrespeito, palavrões, xingamentos e afins não serão tolerados caso o acusado não tenha intimidade com a pessoa passiva de tais atos, primeiro crie amizade e depois estará livre para zoar desde que a pessoa permita.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Regras GF', 'As regras do servidor GearFriends devem ser respeitadas aqui também.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Brechas nas Regras', 'Não se aproveite de ações não bem especificadas nas regras com o intuito de obter vantagens no servidor. Se algo não ficou claro então chame algum membro com cargo administrativo e peça ajuda para interpretar alguma norma, na dúvida sempre pergunte.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Flood e Spam', 'É importante deixar os chats do servidor limpos de flood, spam, comentário ofensivo/tóxico e afins. Ademais, lembre-se de respeitar as regras e temática de cada canal, ou seja, spoiler apenas no canal de spoilers; conteúdos considerados shitpost devem ser mandados no chat de shitpost; comandos de bots apenas nos canais dedicados etc.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Menções', 'Não marcar qualquer pessoa exageradamente, nem usar a marcação geral (Everyone ou Here) por qualquer motivo que não seja de interesse de todos. Isso também vale para quaisquer outros cargos destacáveis.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Divulgação', 'Não divulgue de forma alguma outros servidores Discord, tanto dentro do servidor, quanto no privado de nossos membros.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Assédio', 'Não assediar usuários sexualmente ou abusar verbalmente desses.\n**===========================================**')
    .addField('<a:emoji_15:786443931038122056> Baderna', 'Entrar no servidor com o intuito de fazer baderna ou ocasionar intriga com outros usuários é passivo de banimento.')
    .setColor(config.embedcolor)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    .setAuthor(message.guild.name, message.guild.iconURL())
    channel.send(embed)
    await message.channel.send('feito!')
  },
}