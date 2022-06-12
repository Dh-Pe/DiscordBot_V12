const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    aliases: ['covid', 'covid-19'],
    async execute (client, message, args, config) {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args.join(' ')}*** não existe, tente novamente!`)
        }

        const embed = new MessageEmbed()
            .setTitle(args.join(' ') ? `${args.join(' ').toUpperCase()} Stats` : 'Total de casos no mundo')
            .setColor(config.embedcolor)
            .setThumbnail(args.join(' ') ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: 'Total de casos:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total de mortes:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total de recuperados:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Casos ativos:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Casos graves:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Recuperados hoje:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Mortes hoje:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
    },
}