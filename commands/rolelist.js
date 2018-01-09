const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  const roleList = message.guild.roles.filter(r => r.id !== message.guild.id).map(r => r.name).join(',\n')
  message.channel.send("", {
    embed: new Discord.RichEmbed()
      .setTitle("Guild role list page")
	    .setDescription("Here all the roles avaiable for this guild: \n" + roleList)
      .setColor("#8100c4")
      .setFooter("Requested by: " + message.author.tag)
  });
}