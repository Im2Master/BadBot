module.exports = {
    name: 'kick',
    execute(client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR')) {
            message.channel.send("Vous n'avez pas les permissions")
        } else {
            const target = message.mentions.members.first()
            if(target.hasPermission("MANAGE_MESSAGES")) {
                return message.channel.send("Vous ne pouvez pas expulser cette personne | La personne a des permissions.")
            }
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.kick()
                message.channel.send(`${target} a été expulser avec succès ✅`)
            } else {
                message.channel.send(
                    `❌ Vous devez mentionner le membre à expulser`
                )
            }
        }
    },
}
