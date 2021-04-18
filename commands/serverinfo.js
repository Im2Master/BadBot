const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    execute(client, message, args) {
        const guild = message.guild;

        const embed = new MessageEmbed()
        .setColor(client.couleur)
        .setTitle("__Serveur Info__")
        .setThumbnail(guild.iconURL())
        .addFields(
        { name: `👑 • **Propriétaire :** \`${guild.owner.user.tag}\``, value: `\u200b`, inline: false},
        { name: `🧠 • **Nom Du Serveur :** \`${guild.name}\``, value: `\u200b`, inline: false},
        { name: `🧬 • **ID Du Serveur :** \`${guild.id}\``, value: `\u200b`, inline: false},
        { name: `🌍 • **Région :** \`${guild.region}\``, value: `\u200b`, inline: false},
        { name: `🔐 • **LvL De Vérification :** \`${guild.verificationLevel}\``, value: `\u200b`, inline: false},
        { name: `🔰 • **Serveur Vérifié :** \`${guild.verified}\``, value: `\u200b`, inline: false},
        { name: `💎 • **Boost :** \`${guild.premiumSubscriptionCount}\``, value: `\u200b`, inline: false},
        { name: `🗓️ • **Crée Le :** \`${moment(guild.createdAt).format('DD/MM/YYYY à HH:mm')}\``, value: `\u200b`, inline: false},
        { name: `📈 • **Membres :** \`${guild.memberCount -1}\``, value: `\u200b`, inline: false}
       );
      
        message.channel.send(embed);
      }
}