/**
 * Discord Bot
 * 
 * This code snippet creates a Discord bot using the Discord.js library. The bot handles various chat input commands such as registering users, deleting users, changing passwords, and modifying skins and cloaks.
 * 
 * Inputs:
 * - Discord.js library
 * - Commands for registering users, deleting users, changing passwords, modifying skins and cloaks
 * - settings.json file containing Discord bot token
 * 
 * Flow:
 * 1. Import necessary modules and commands
 * 2. Create a new Discord client with specified intents
 * 3. Log when the bot is ready
 * 4. Listen for chat input commands
 * 5. Call the appropriate command function based on the command name
 * 6. Log in the Discord bot using the token from the settings.json file
 * 
 * Outputs:
 * - Console log indicating when the bot is ready
 * - Appropriate command function called based on chat input command
 * 
 * Additional aspects:
 * - The code snippet uses the IntentsBitField to specify which intents the bot should listen for
 * - The code snippet uses the Discord.js library to interact with the Discord API
 * - The code snippet uses a settings.json file to store sensitive information such as the Discord bot token
 */

const {Client, IntentsBitField} = require('discord.js');
const reg = require('./commands/regUser');
const deleleUser = require('./commands/deleteUser');
const changePass = require('./commands/changePass');
const skin = require('./commands/skin');
const cloak = require('./commands/cloak');
const settings = require("./settings.json");
const addGuildRole = require('./utils/addGuildRole');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.DirectMessages
    ]
})

client.on('ready', (bot) => {
    const guild = client.guilds.cache.get(settings.discord.guild_id);

    //create a role for server players
    addGuildRole(guild, settings.misc.role_name, settings.misc.role_color)

    console.log(`${bot.user.tag} is ready`);
})


//command interactions

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'reg') {
        return reg(interaction, client);
    }
    if (interaction.commandName === 'delete_user') {
        return deleleUser(interaction, client);
    }
    if (interaction.commandName === 'change_password') {
        return changePass(interaction);
    }
    if (interaction.commandName === 'skin') {
        return skin(interaction)
    }
    if (interaction.commandName === 'cloak') {
        return cloak(interaction)
    }
});


client.login(settings.discord.token);