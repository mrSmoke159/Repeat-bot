const Discord = require('discord.js');
const { ALL } = require('dns');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const { cpuUsage } = require('process');
client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("Ismétel mindent is");

    console.log("Elméletileg működök báttya");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return
    };
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command=='help'){
        message.channel.send('Type -repeat to make me repeat something!')
    }

    if(command == 'repeat'){
        if(!args[1]){
            message.channel.send(args[0]);
            //console.log(args[0]);
        }
        else if(args[1] < 20){
            //console.log(args[1])
            for(args[1]; args[1]>0; args[1]--){
                message.channel.send(args[0]);
            }
        }
        else if(args[1] > 20){
            message.channel.send("I will not repeat this that many times, try adding a lower number");
        }
        else{
            message.channel.send('Oh oh some error has occured.')
        };
    };
});

client.login('Nzk2MDM4OTM3MTEzNjU3Mzc2.X_SHCA.ptgDSpfXEfYGnW2vtqUw3yp2smo');