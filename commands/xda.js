exports.run = async (bot, message, args) => {
  let searchContent = args.join('+')
  message.channel.send(`Here is the result of your search: "https://forum.xda-developers.com/sitesearch.php?q=${searchContent}"`)
}