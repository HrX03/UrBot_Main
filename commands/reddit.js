exports.run = async (bot, message, args) => {
  let searchContent = args.join('+')
  message.channel.send(`Here is the result of your search: "https://www.reddit.com/r/all/search?q=${searchContent}&restrict_sr=&sort=relevance&t=all"`)
}