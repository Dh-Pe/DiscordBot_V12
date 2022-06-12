const { MessageEmbed } = require("discord.js")
const Genius = require("genius-lyrics");
const Client = new Genius.Client()

module.exports = {
  name: "lyrics",
  aliases: ['letra', 'cancao', 'musica'],
  async execute (client, message, args) {
     
if(!args.join(" ")) return message.reply('informe o nome da música')
const searches = await Client.songs.search(args.join(" "));
const firstSong = searches[0];
const lyrics = await firstSong.lyrics();
if(lyrics.length > 2048) return message.channel.send('a letra é muito grande!')
  let embed = new MessageEmbed()
  .setTitle(`Letra da Música: ${args.join(' ')}`)
  .setDescription(lyrics.trim())
  .setColor(require('../../config.json').embedcolor)
  .setTimestamp()
  message.channel.send(embed)
  },
  
}