module.exports = async (client) =>{
    const guild = client.guilds.cache.get('814877859880763432');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('814927006658592779');
        channel.setName(`Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 5000);
}