const Discord = require("discord.js")
const { prefix, token } = require("./config.json")

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready');
    client.user.setActivity('Javascript').catch(console.error)
});
    
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'accueil');
    if (!channel) return;
    channel.send(`Bienvenue sur le serveur, ${member}`);
    member.roles.add("798605075869466644");
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'accueil');
    if (!channel) return;
    channel.send(`Au revoir, ${member}`);
});

client.on('guildMemberAdd', member =>{
    member.createDM().then(function (channel){
    return channel.send('Bienvenue sur le serveur de support ' + member.displayName)
    }).catch(console.error)
});

client.on('message', (message) => {
    if (message.content === `${prefix}server`) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateur : ${message.guild.memberCount}`);
    }
});

client.login(process.env.token)