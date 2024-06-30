const checkValueExists = require("../sql/checkValueExists");
const deleteUserFromDB = require("../sql/deleteUserFromDB");
const checkAdmin = require("../utils/checkAdmin")
const settings = require("../settings.json");


const deleteUser = async (interaction, client) => {

    const member = interaction.member;

    // check if user is admin
    if (checkAdmin(member.id)) {
        const target = interaction.options.getUser('target');

        // check if user exists in DB
        if (await checkValueExists("discord_id", target.id)) {
            //delete user
            try {
                //remove role from user
                const guild = client.guilds.cache.get(settings.discord.guild_id);
                //find the role by name
                const role = guild.roles.cache.find(role => role.name === settings.misc.role_name);

                const memberTarget = await guild.members.fetch(target.id);
                await memberTarget.roles.remove(role);

                //remove user from DB
                await deleteUserFromDB(target.id);
                return interaction.reply(`Пользователь ${target.username} удалён!`);
            } catch (error) {
                console.log(error);
                return interaction.reply('Произошла ошибка при выполнении запроса');
            }
        } else {
            return interaction.reply(`Пользователь ${target.username} не зарегистрирован!`);
        }



    } else {
        return interaction.reply("У вас недостаточно прав для выполнеия этой команды!");
    }
}

module.exports = deleteUser;