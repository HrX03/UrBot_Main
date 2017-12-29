exports.run = (bot, message, args) => {
  if(message.author.id === "270644886758359051") {
      if(args === '') return message.reply("Can't be empty!")
      if(args === ' ') return message.reply("Can't be empty!")
      let username = args.join(' ');
      bot.user.setUsername(username)
      message.reply(`New username: "${username}"`)
  } else return message.reply("Only the bot owner can use this command!")
}