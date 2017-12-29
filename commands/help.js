const Discord = require("discord.js")
var PREFIX = "u!";
exports.run = (bot, message, args) => {
  if(!args[0]) {
      message.channel.send("", {
	      embed: new Discord.RichEmbed()
		    .setTitle("Help page")
		    .setDescription("Avaiable categories: \n all \n dev \n miscellanous \n music \n media \n homebrew \n server-specific")
		    .setColor("#8100c4")
        .setFooter("Requested by: " + message.author.tag)
	  });
  }
  if(args[0] === 'all') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Dev Commands", `**Avaiable commands:** \n ${PREFIX}ping \n ${PREFIX}username \n ${PREFIX}bot-avatar \n ${PREFIX}server-info \n ${PREFIX}user-info \n ${PREFIX}total-servers`)
          .addField("Miscellanous Commands", `**Avaiable commands:** \n ${PREFIX}help \n ${PREFIX}say \n ${PREFIX}mute \n ${PREFIX}unmute \n ${PREFIX}ban \n ${PREFIX}kick`)
          .addField("Media Commands", `**Avaiable commands:** \n ${PREFIX}avatar \n ${PREFIX}giphy \n ${PREFIX}cats`)
          .addField("Music commands", `**Avaiable commands:** \n ${PREFIX}play \n ${PREFIX}stop \n ${PREFIX}joinvoice`)
          .addField("Homebrew commands", `**General Homebrew:** \n   ${PREFIX}guide \n**3DS Homebrew:** \n   ${PREFIX}useful-apps \n**WiiU Homebrew:** \n   Coming soon...`)
          .addField("Server specific", `**Avaiable commands:** \n ${PREFIX}rules \n ${PREFIX}accept \n ${PREFIX}hb-accept`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
    });
  }
    if(args[0] === 'dev') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Dev Commands", `Avaiable commands: \n ${PREFIX}ping \n ${PREFIX}username \n ${PREFIX}bot-avatar \n ${PREFIX}server-info \n ${PREFIX}user-info \n ${PREFIX}total-servers`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
     });
  }
    if(args[0] === 'miscellanous') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Miscellanous Commands", `Avaiable commands: \n ${PREFIX}help \n ${PREFIX}say \n ${PREFIX}mute \n ${PREFIX}unmute \n ${PREFIX}ban \n ${PREFIX}kick \n ${PREFIX}invite`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
     });
   }
    if(args[0] === 'media') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Media Commands", `Avaiable commands: \n ${PREFIX}avatar \n ${PREFIX}giphy \n ${PREFIX}cats`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
     });
   }
    if(args[0] === 'music') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Music commands", `Avaiable commands: \n ${PREFIX}play \n ${PREFIX}stop \n ${PREFIX}joinvoice`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
     });
   }
    if(args[0] === 'homebrew') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("General Homebrew ", `Avaiable commands: \n ${PREFIX}guide`)
          .addField("3DS", `Avaiable commands: \n ${PREFIX}useful-apps`)
          .addField("WiiU", `Coming soon...`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
     });
   }
    if(args[0] === 'server-specific') {
	    message.channel.send("", {
		    embed: new Discord.RichEmbed()
          .setTitle("Help page")
          .setDescription("")
          .addField("Server specific", `Avaiable commands: \n ${PREFIX}rules \n ${PREFIX}accept \n ${PREFIX}hb-accept`)
          .setFooter("Requested by: " + message.author.tag)
          .setColor("#8100c4")
       });
   }
}