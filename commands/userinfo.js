const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    execute(client, message, args) {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

      let status;
      switch (user.presence.status) {
          case "online":
              status = ":green_circle: En ligne";
              break;
          case "dnd":
              status = ":red_circle: Ne Pas Déranger";
              break;
          case "idle":
              status = ":crescent_moon: Inactif";
              break;
          case "offline":
              status = ":new_moon: Hors-Ligne";
              break;
      }

      const embed = new MessageEmbed()
          .setTitle(`${user.user.username} stats`)
          .setColor(client.couleur)
          .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
          .addFields(
              {
                  name: "Nom : ",
                  value: user.user.username,
                  inline: true
              },
              {
                  name: "Hashtag : ",
                  value: `#${user.user.discriminator}`,
                  inline: true
              },
              {
                  name: "ID : ",
                  value: user.user.id,
              },
              {
                  name: "Current Status : ",
                  value: status,
                  inline: true
              },
              {
                  name: "Activité : ",
                  value: user.presence.activities[0] ? user.presence.activities[0].name : `Aucune !`,
                  inline: true
              },
              {
                  name: 'Avatar : ',
                  value: `[Click Here](${user.user.displayAvatarURL()})`
              },
              {
                  name: 'Date de Création : ',
                  value: user.user.createdAt.toLocaleDateString("en-us"),
                  inline: true
              },
              {
                  name: 'Ici Depuis : ',
                  value: user.joinedAt.toLocaleDateString("en-us"),
                  inline: true
              },
              {
                  name: 'Roles : ',
                  value: user.roles.cache.map(role => role.toString()).join(" ,"),
                  inline: true
              }
          )

      message.channel.send(embed)
      }
}