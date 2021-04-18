module.exports = {
    name: 'ban',
    execute(client, message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) {
            message.channel.send("Vous n'avez pas les permissions")
        } else {
            const target = message.mentions.members.first()
            if(target.hasPermission("MANAGE_MESSAGES")) {
                return message.channel.send("Vous ne pouvez pas bannir cette personne | La personne a des permissions.")
            }
            if (target) {
                args.shift()
                const memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.ban({ reason: args.join(' ') })
                message.channel.send(`${target} a été banni avec succès ✅`)
            } else {
                message.channel.send(
                    `❌ Vous devez mentionner le membre à bannir`
                )
            }
        }
    },
}
