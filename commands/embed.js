module.exports = {
    name:'help',
    description:'help command.',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('Nekoma Bot Commands')
        .addFields(
            {name:'N!help', value: 'Lists all the avaliable commands'},
            {name:'N!ban', value: 'Bans user from the server'},
            {name:'N!mute', value: 'Mutes a user from chat'},
            {name: 'N!clear', value: `Deletes messages from a given channel(1-100)`},
            {name: 'N!Kick', value: 'Kicks a user from the server'},
            {name: 'N!unmute', value: 'Unmutes a user from chat'},
        )            
        .setImage('https://media.discordapp.net/attachments/786578219092410419/809175852276908062/ezgif.com-gif-maker_46.gif')
        .setFooter('Custom Bot | Coded by !Asta#0001');

        message.channel.send(newEmbed);
    }

    
}