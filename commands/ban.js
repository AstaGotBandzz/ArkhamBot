module.exports = {
    name: 'ban',
    description: "This command bans a user from the guild",
    execute(message, args){
        if (message.member.roles.cache.some(r => r.name === "Head Moderator") || message.member.roles.cache.some(r => r.name === "Administrator") || message.member.roles.cache.some(r => r.name === "Senior Administrator") || message.member.roles.cache.some(r => r.name === "Server Manager") || message.member.roles.cache.some(r => r.name === "Co-Owner") || message.member.roles.cache.some(r => r.name === "+")|| message.member.roles.cache.some(r => r.name === "Triad")){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been Banned!`);
        }else{
            message.channel.send(`Please Mention The User You Wish To Ban!`);
        }

        }else{
            message.channel.send(`You Don't Have Permission To Use That!`);
        }


        
        }
    }