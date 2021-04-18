const Discord = require("discord.js")

module.exports = {
    name: 'twt',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0087ff')
        .setThumbnail('https://pngimage.net/wp-content/uploads/2018/06/tweeter-png-4.png')
        .addField('**__Nouveau tweet :__**', args.join(' ') || 'None')
        .addField('**__Tweet de :__**', `${message.author} \u200b \u200b \u200b \u200b \u200b \u200b`, true)
        .setTimestamp()
        .setFooter('')
        .setTimestamp();

    message.channel.send(embed);
    message.delete();
    return client.channels.cache.get(client.logsrp).send(`${message.author} a envoyé ${message.content} dans <#${message.channel.id}>`)
    }
}