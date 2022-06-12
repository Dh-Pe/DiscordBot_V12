const discord = require('discord.js');
const num_conv = require('number-to-words');

module.exports = {
  name: 'bigtext',
  aliases: ['textogrande', 'tg', 'bt'],
  async execute (client, message, args, config) {
    if(message.channel != bot.channels.cache.get('784963399913701376')) {
    return message.reply('Você está utilizando o canal errado, use <#784963399913701376> !')
  }
    let output = args.join(' ');
    if (!output)
        return message.channel.send(new discord.MessageEmbed()
            .setTitle('Uso incorreto do comando.')
            .setDescription("Use `+bigtext <mensagem>`")
            .setColor("#2F3136"));

    let bigtext_arr = new Array();
    for (let i = 0; i < output.length; i++) {
        let isnumber = await parseInt(output[i]);
        if (isnumber >= 0 && isnumber <= 9)
            bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
        else {
            if (output[i] !== ' ') {
                if (!output[i].match(/^[a-zA-Z]+$/)) // Regex for alphabetical entries
                    bigtext_arr.push(`:question:`)
                else
                    bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
            } else bigtext_arr.push('   ');
        }
    }

    try {
        await message.channel.send(bigtext_arr.join(''));
        return message.delete()
    } catch (e) {
        return message.channel.send(new discord.MessageEmbed()
            .setTitle('Ocorreu um erro ao enviar a mensagem.')
            .setColor('#2F3136'));
    }


},
}