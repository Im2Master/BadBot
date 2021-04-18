module.exports = {
    name: 'unban',
    execute(client, message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) {
            message.channel.send("Vous n'avez pas les permissions")
        } else {
            const target = args.shift()
            if (target) {
                message.guild.members.unban(target)
                message.channel.send(
                    `<@${target}> a été débanni avec succès ✅`
                )
            } else {
                message.channel.send(
                    `❌ Vous devez mentionner le membre à débannir`
                )
            }
        }
    },
}
