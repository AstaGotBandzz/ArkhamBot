module.exports = {
    name: 'kick',
    description: "This command kicks a user from the guild",
    execute(message, args){
    
        if (message.member.roles.cache.some(r => r.name === "Moderator") || message.member.roles.cache.some(r => r.name === "Head Moderator") || message.member.roles.cache.some(r => r.name === "Administrator") || message.member.roles.cache.some(r => r.name === "Senior Administrator") || message.member.roles.cache.some(r => r.name === "Server Manager") || message.member.roles.cache.some(r => r.name === "Co-Owner") || message.member.roles.cache.some(r => r.name === "+")|| message.member.roles.cache.some(r => r.name === "Triad")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been Kicked!`);
        }else{
            message.channel.send(`Please Mention The User You Wish To Kick!`);
        }

        }else{
            message.channel.send(`You Don't Have Permission To Use That!`);
        }


        
        }
    }