module.exports = {
    name: 'unbanall',
    execute(client, message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.guild
                .fetchBans()
                .then((bans) => {
                    if (bans.size == 0) {
                        message.reply(
                            "Il n'y aucun utilisateur dans la banlist."
                        )
                        throw 'Aucun membre a déban.'
                    }
                    bans.forEach((ban) => {
                        message.guild.members.unban(ban.user.id)
                    })
                })
                .then(() => message.reply('La banlist a été vidée'))
                .catch((e) => console.log(e))
        } else {
            message.reply(
                "Vous n'avez pas les permissions de faire cette commande"
            )
        }
    },
}
