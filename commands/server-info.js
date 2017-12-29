const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Server Info")
          .setDescription(`**Server name:** ${message.guild.name} \n**Total members:** ${message.guild.memberCount}`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
  });
}