exports.run = (bot, message, args) => {
  let role =  bot.guilds.get(message.guild.id).roles.find('name', 'Little H4xx0rs');
  message.guild.member(message.author.id).addRole(role)
  message.reply('Accepted! Enjoy your stay!')
}