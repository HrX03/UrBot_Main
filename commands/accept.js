exports.run = (bot, message, args) => {
  if (message.channel.id === "396274046586585092") {
    let role =  bot.guilds.get(message.guild.id).roles.find('name', 'Little H4xx0rs');
    message.guild.member(message.author.id).addRole(role)
    message.reply('Accepted! Enjoy your stay!')
  } else return message.reply('You have been already accepted!')
}