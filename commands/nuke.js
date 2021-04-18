module.exports = {
    name: 'nuke',
    execute(client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send("Vous n'avez pas les permissions")
        } else {
            message.channel
                .clone({
                    reason: `Nuke réclamé par ${message.author.tag} (${message.author.id})`,
                })
                .then(
                    (c) =>
                        c.setPosition(message.channel.position) &&
                        c.send(
                            `:boom: Le nuke réclamé par ${message.author} a été effectué.`
                        )
                )
            message.channel.delete()
        }
    },
}
