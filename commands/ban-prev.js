const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    message.channel.send("", {
     embed: new Discord.RichEmbed()
       .setTitle("Ban prevention page")
       .setDescription("")
       .setColor("#8100c4")
       .setFooter("Requested by: " + message.author.tag)
  });
}