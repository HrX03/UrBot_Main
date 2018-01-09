exports.run = (bot, message, args) => {
  if(message.author.id === "270644886758359051") {
      if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
      delete require.cache[require.resolve(`./${args[0]}.js`)];
      message.reply(`The command ${args[0]} has been reloaded`);
    } else return message.reply("You don't have permissions to do that!")
};