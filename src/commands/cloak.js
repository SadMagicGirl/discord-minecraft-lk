const downloadImage = require("../handlers/images/downloadImage");
const settings = require("../settings.json");
const getValueFromDB = require("../sql/getValueFromDB");

const checkValueExists = require("../sql/checkValueExists");

const cloak = async (interaction) => {
    const member = interaction.member


    if (await checkValueExists("discord_id", member.id)) {
        const attachment = interaction.options.getAttachment('cloak')
        const username = await getValueFromDB(member.id, "username")
    
        downloadImage(attachment.url, settings.cloaks.path, username)
    
        return interaction.reply(`Плащь для игрока ${username} успешно загружен!`);
    } else {
        return interaction.reply('Вы не зарегистрированы!');
    }
}



module.exports = cloak;