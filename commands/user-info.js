const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  message.channel.send("I am on " + bot.guilds.size + " servers and " + bot.users.size + " users")
}