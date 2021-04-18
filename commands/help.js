const Discord = require ("discord.js")

module.exports = {
    name: 'help',
    execute(client, message, args){
        const embed = new Discord.MessageEmbed()
	.setColor(client.couleur)
	.setTitle(`Besoin D'aide`)
	.addFields(
		{ name: '__**Voici la liste de toutes les commandes**__', value: '\u200B' },
        { name: 'Help', value: 'Liste des commandes.', inline: true },
        { name: 'Kick', value: 'Pour expulser un membre.', inline: false },
        { name: 'Ban', value: 'Pour bannier un membre.', inline: false },
        { name: 'Nuke', value: 'Pour nuke un channel.', inline: false },
        { name: 'Serverinfo', value: 'Infos sur le serveur.', inline: false },
        { name: 'Userinfo', value: 'Infos sur un utilisateur.', inline: false },
        { name: 'Ping', value: 'Inutile.', inline: false },
        { name: 'Latence', value: 'Calcule la latence du bot.', inline: false },
        { name: 'Unban', value: 'Pour débannier un membre.', inline: false },
        { name: 'Unbanall', value: 'Pour débannier tout les membres.'},
        { name: '__**Commandes RP**__', value: '\u200B', incline: false },
        { name: 'twt', value: 'Écrire un message en mode twitter', incline: false },
        { name: 'ano', value: 'Écrire un message en mode darkchat', inline: false },
	)
	.setTimestamp()
	.setFooter('Crée par Apx#9999', 'https://media.discordapp.net/attachments/831997397831909466/832348794070761492/pp.gif');

    message.channel.send(embed);
    }
}