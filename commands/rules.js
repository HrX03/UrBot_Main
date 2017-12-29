const Discord = require("discord.js")
exports.run = (bot, message, args) => {
	message.delete();
	  message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Roles")
          .setDescription(`**1:** Please be nice with everyone in here; \n**2:** Don't send NSFW links, images, whatever; \n**3:** Please respect everyone; \n**4:** Keep this server english only; \n**5:** Don't ask for inviting your bot, i will ignore you;  \n**6:** Don't post or ask anything piracy related, will result in a warn; \n**7:** Don't spam and don't flood, you will be muted.`)
          .setColor("#8100c4")
});
}