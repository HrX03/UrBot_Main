const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  message.channel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Latest news")
        .addField("3DS", "Luma3DS v9.0: [Download]('https://github.com/AuroraWright/Luma3DS/releases/tag/v9.0');\nGodMode9 1.5.1: [Download]('https://github.com/d0k3/GodMode9/releases/tag/v1.5.1');\nAnemone3DS v1.3.0: [Download]('https://github.com/astronautlevel2/Anemone3DS/releases/tag/v1.3.0')")
		    .setColor("#8100c4")
        .setFooter("Requested by: " + message.author.tag)
	  });
}