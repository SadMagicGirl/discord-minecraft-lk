const checkValueExists = require ('../sql/checkValueExists')
const settings = require('../settings.json');
const getRandomPassword = require('../utils/getRandomPassword');
const updateValue = require('../sql/updateValue');
const getHashedPassword = require("../utils/getHashedPassword");


const changePass = async (interaction) => {
    
    const member = interaction.member;
    //check if the user exists in db
    if (await checkValueExists("discord_id", member.id)) {
        //change password and send it to user
        const passwd = getRandomPassword(settings.misc.password_length);
        const hash = getHashedPassword(passwd)

        await updateValue("password", hash, member.id);
        await member.send(`Ваш новый пароль: ${passwd}`);
        return interaction.reply(`Пароль пользователя ${member.user.username} изменен`);
    } 
    else {
        return interaction.reply(`Вы не зарегистрированы!`);
    }
}

module.exports = changePass;