exports.run = (bot, message, args) => {
  let sendComm = args.join(' ')
    if(sendComm === null) return message.reply("Can't send an empty message!")
    if(sendComm === undefined) return message.reply("Can't send an empty message!")
    if(sendComm === '') return message.reply("Can't send an empty message!")
    if(sendComm === ' ') return message.reply("Can't send an empty message!")
  message.delete()
  let sendChannel = message.guild.channels.find("name", "bot-chat");
  sendChannel.send(`"${message.author.tag}" said: ${sendComm}`);
}