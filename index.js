const fs = require('fs');
const colour = require('colour');
const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json');
const client = new Client({
    intents: 14023 // generated through https://ziad87.net/intents
});

client.commands = new Collection();


const functions = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));
const eventsFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./commands');

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    
    client.handleEvents(eventsFiles, './events');
    client.handleCommands(commandFolders, './commands');
    client.login(config.token);
})();

// Anti Crash's
process.on("unhandledRejection", (reason, p) => {
    console.log(reason, p);
 });
process.on("uncaughtException", (err, origin) => {
    console.log(err, origin);
 });
process.on("multipleResolves", (type, promise, reason) => {
    console.log(type, promise, reason);
 });


