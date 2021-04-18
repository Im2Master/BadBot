module.exports = {
    name: 'clear',
    description: 'Efface un certain nombre de message',
    execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send( "Vous n'avez pas la permission de faire cette commande" ); 
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel; 
        if (!channel) return message.channel.send(`Veuillez mentionner un channel!`); 
        if (channel.type === "voice") return message.channel.send(`Je ne peux pas delete des vocals!`); 
        if (!args[1]) return message.channel.send(`Donner moi un nombre de message!`); 
        if (isNaN(args[1])) return message.channel.send(`Donner moi un nombre valide!`); 
        if (args[1] < 2) return message.channel.send( `Delete les toi meme sale flemmard` ); 
        if (args[1] > 100) return message.channel.send( `Je ne peux pas delete ${args[0]} a cause de la limite discord fixer a 100!`); 
      }
}