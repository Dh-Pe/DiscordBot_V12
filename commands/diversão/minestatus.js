const axios = require('axios')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'minestatus',
  async execute (client, message, args) {

        let ip = args.join(' ')
        if(!ip) return message.reply(':x: - Qual o ip?')
        axios.get(`https://api.mcsrvstat.us/2/${ip}`).then(async response => {

          let status = '';
          if(response.data.online == true) status = `🟢 Online`;
          if(response.data.online != true) status = `🔴 Offline`;
            
            const embed = new MessageEmbed()
            .setColor("#FF9200")
            .addField(`${ip} - Minecraft`, `**🔑 IP:** ${response.data.ip}: ${response.data.port} \n**🏵️ Status:** ${status} \n**👤 Jogadores** ${response.data.players.online}/${response.data.players.max} \n**💭 Versão:** ${response.data.version} \n**☕ JAR**: ${response.data.software} \n**✏ MOTD:**\n ⠀⠀⠀⠀⠀⠀⠀⠀${response.data.motd.clean[0]}\n⠀⠀⠀⠀⠀⠀⠀⠀${response.data.motd.clean[1]}`)
            .setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`)

      return  message.reply(embed)
        }).catch(error => { 
        message.reply('Servidor não encontrado!')
        })
    }
}