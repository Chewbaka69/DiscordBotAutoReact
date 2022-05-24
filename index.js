const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('des vidéos...', { type: 'WATCHING' })
})

client.on('messageCreate', async (message) => {
  if (!message.author.bot) return

  let match = message.content.match(/vient juste de poster une vidéo ! Allez la voir !/g)

  if (match && match.length > 0) {
    message.react('👍')
    message.react('👎')
  }
})

client.login('')
