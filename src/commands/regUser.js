const settings = require("../settings.json");
const getRandomPassword = require('../utils/getRandomPassword');
const checkString = require('../utils/checkString');
const addUser = require('../sql/addUser');
const checkValueExists = require('../sql/checkValueExists');
const getHashedPassword = require("../utils/getHashedPassword");
const reg = async (interaction, client) => {
    const username = interaction.options.getString('username');
    const member = interaction.member;
    
    //username validation
    if (checkString(username)){

        //check if user already exists
        if(!(await checkValueExists("discord_id", member.id))) {
            const passwd = getRandomPassword(settings.misc.password_length);
            const hash = getHashedPassword(passwd)
            const guild = client.guilds.cache.get(settings.discord.guild_id);
            //find the role by name
            const role = guild.roles.cache.find(role => role.name === settings.misc.role_name);

            try {
                await addUser(username, hash, member.id);
                await member.roles.add(role);
                member.send(`Ваш новый пароль: ${passwd}`);

                return interaction.reply(`Пользователь ${username} зарегистрирован!`);
            } catch (error) {
                console.error(error);
                return interaction.reply('Произошла ошибка при регистрации пользователя. Пожалуйста, попробуйте еще раз позже.');
            }
        } else {
            return interaction.reply('Вы уже зарегистрированны!');
        }

    } else {
        return interaction.reply('Имя пользователя содержит недопустимые символы! \nИмя не может быть длинее 16 символов и содержать любые символы, кроме букв, цифр и "_"')
    }
}

module.exports = reg;