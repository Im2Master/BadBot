module.exports.emit = async (client) => {

    console.log('\x1b[31m' ,`Couleur = ${client.couleur}`)
    console.log('\x1b[31m' ,`Channel Bienvenue = ${client.idchannelbienvenue}`)
    console.log('\x1b[31m' ,`Channel Logs RP = ${client.logsrp}`)
    console.log('\x1b[31m' ,`Role Bienvenue = ${client.bienvenuerole}`)
    console.log('\x1b[31m' ,`Préfix = ${client.prefix}`)
    console.log('\x1b[31m' ,'Crédit Apx#9999')
    console.log('\033[33m' ,`Pret a servir ${client.guilds.cache.size} serveurs, Pour un total de ${client.users.cache.size} membres !`)
    client.user.setActivity(`Pour en savoir plus sur moi ${client.prefix}help`, { type: 'WATCHING' })

};
module.exports.name = "ready"