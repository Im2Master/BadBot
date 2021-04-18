module.exports = {
    name: 'voc',
    execute(client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send("Vous n'avez pas les permissions")
        } else {
            message.channel.send(`**Membres en vocal:** **${
                message.guild.members.cache.filter((m) => m.voice.channel).size
            }**
**Membres Total :** **${message.guild.memberCount}**`)
        }
    },
}
