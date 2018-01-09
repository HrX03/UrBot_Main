const Discord = require("discord.js")
exports.run = (bot, member) => {
  let welcomeChannel = member.guild.channels.find("name", "welcome");
  welcomeChannel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Farewell message")
		    .setDescription(`Farewell ${member.user.username}, hoping (or not) to see you again here.`)
		    .setColor("#ff0000")
	  });
}