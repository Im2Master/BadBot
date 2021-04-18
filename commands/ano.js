const Discord = require("discord.js")

module.exports = {
    name: 'ano',
    execute(client, message, args) {
        message.channel.send({
            embed: {
                color: '#030000',
                title: args.join(' '),
                author: {
                    name: '💀 | Anonyme',
                }
            }
        });
    
        message.channel.send;
      message.delete();
      return client.channels.cache.get(client.logsrp).send(`${message.author} a envoyé ${message.content} dans <#${message.channel.id}>`)      
    }
}