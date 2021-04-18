//Important
const Discord = require ("discord.js")
const client = new Discord.Client()
const config = require ("./config.json")
//SetClient//Facilite la configuration
client.login (config.token)
client.prefix = config.prefix
client.bienvenuerole = config.bienvenuerole
client.idchannelbienvenue = config.idchannelbienvenue
client.couleur = config.couleur
client.logsrp = config.logsrp

//Commands
const fs = require('fs')
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

//Events
const eventsFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for(const file of eventsFiles){
    const events = require(`./events/${file}`);
    client.on(events.name, (...args)=> events.emit(client,...args))
}


//CommandsHandler
client.on('message', message =>{
    if(!message.content.startsWith(client.prefix) || message.author.bot) return;
 
    const args = message.content.split(/ +/);
    const command = args.shift().toLowerCase();
 
        try{
        client.commands.get(`${command.replace(client.prefix,"")}`).execute(client, message, args);
        }catch(_){0}
});

//Join
client.on("guildMemberAdd", member => {
    let addEmbed = new Discord.MessageEmbed()
    .setTitle(`● __**Arrivée**__`)
    .setDescription(`**<@${member.user.id}> vient de rejoindre le serveur**!\nNous lui souhaitons la bienvenue.`)
    .setColor(client.couleur)
    .setFooter(`Nous sommes désormais ${client.users.cache.size} membres`)
    client.channels.cache.get(client.idchannelbienvenue).send(addEmbed)
    member.roles.add(member.guild.roles.cache.filter((r) => r.name == client.bienvenuerole).first())
})


//AntiLink

client.on('message', async message =>{
        if (message.member.hasPermission('ADMINISTRATOR')) return
            if (message.content.includes("discord.gg/") ) {


            message.delete();
          message.channel.send(`${message.author}, Il est interdit d'envoyer des invitations.`)
        }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
        if (newMessage.member.hasPermission('ADMINISTRATOR')) return
    if (newMessage.content.includes("discord.gg/")) { 
    newMessage.delete()
              newMessage.channel.send(`${newMessage.author}, Il est interdit d'envoyer des invitations.`)
            } 
})