const Discord = require("discord.js")
exports.run = (bot, member) => { 
  let welcomeChannel = member.guild.channels.find("name", "welcome");
  welcomeChannel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Welcome message")
		    .setDescription(`Welcome ${member.user.username}, hope you'll enjoy your stay in here.`)
		    .setColor("#00ff00")
    });
}