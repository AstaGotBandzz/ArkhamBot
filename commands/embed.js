module.exports = {
    name:'help',
    description:'help command.',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('Arkham Bot Commands')
        .addFields(
            {name:'A!help', value: 'Lists all the avaliable commands'},
            {name:'A!ban', value: 'Bans user from the server'},
            {name:'A!mute', value: 'Mutes a user from chat'},
            {name: 'A!clear', value: `Deletes messages from a given channel(1-100)`},
            {name: 'A!Kick', value: 'Kicks a user from the server'},
            {name: 'A!unmute', value: 'Unmutes a user from chat'},
        )            
        .setFooter('Custom Bot | Coded by !Asta#0001');

        message.channel.send(newEmbed);
    }

    
}