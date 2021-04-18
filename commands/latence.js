module.exports = {
    name: 'latence',
    execute(client, message, args) {
        message.channel.send(
            `La latence est de ${
                message.createdTimestamp - Date.now()
            }ms. Api Latence est de ${Math.round(client.ws.ping)}ms`
        )
    },
}
