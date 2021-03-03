module.exports = {
    name: 'mute',
    description: "mutes a guild member",
    execute(message, args){
        if (message.member.roles.cache.some(r => r.name === "Moderator") || message.member.roles.cache.some(r => r.name === "Head Moderator") || message.member.roles.cache.some(r => r.name === "Administrator") || message.member.roles.cache.some(r => r.name === "Senior Administrator") || message.member.roles.cache.some(r => r.name === "Server Manager") || message.member.roles.cache.some(r => r.name === "Co-Owner") || message.member.roles.cache.some(r => r.name === "+")|| message.member.roles.cache.some(r => r.name === "Triad")){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Regular Goons');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        } else{
            message.channel.send(`I can't find that member!`);
        }
    
    
    }else {
        message.channel.send(`You can't use that!`);
    }
  }       
}