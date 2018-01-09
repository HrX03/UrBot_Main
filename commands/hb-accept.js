exports.run = (bot, message, args) => {
  let role =  bot.guilds.get(message.guild.id).roles.find('name', 'Homebrew Accepted');
  message.guild.member(message.author.id).addRole(role)
  message.reply("Homebrew accepted! Hope you'll like the hax talk!")
}