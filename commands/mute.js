const Discord = require("discord.js")
exports.run = (bot, message, args) => {
  if(message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR") ) {
    const reason = args.slice(1).join(' ');
    const normRole = bot.guilds.get(message.guild.id).roles.find('name', 'Little H4xx0rs');
    const muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
    const user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
    if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setDescription(`**Action:** Un/mute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

    if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      message.guild.member(user).addRole(normRole)
        message.guild.member(user).removeRole(muteRole).then(() => {
        message.channel.send({embed}).catch(console.error);
      });
    } else {
      message.guild.member(user).removeRole(normRole)
      message.guild.member(user).addRole(muteRole).then(() => {
        message.channel.send({embed}).catch(console.error);
      });
    }
  } else return message.reply("You don't have permissions to do that!")
}