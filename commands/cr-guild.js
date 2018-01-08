exports.run = (bot, message, args) => {
  async function createGuild(client, message) {
    try {
      const guild = await client.user.createGuild('Example Guild', 'london');
      const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
      const invite = await defaultChannel.createInvite();
      await message.author.send(invite.url);
      const role = await guild.createRole({ name:'Example Role', permissions:['ADMINISTRATOR'] });
      await message.author.send(role.id);
    } catch (e) {
      console.error(e);
    }
  }
  createGuild(bot, message);
}