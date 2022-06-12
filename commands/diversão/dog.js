const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'dog',
  aliases: ['cachorro', 'randomdog', 'dograndom', 'cao', 'cão'],
  async execute (client, message, args, config) {
     const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`Ocorreu um erro!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Um grande auau para você!')
            .setColor(config.embedcolor)
            .setImage(image.link)

        await message.channel.send(embed)
  },
}