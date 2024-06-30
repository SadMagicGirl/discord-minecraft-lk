const downloadImage = require("../handlers/images/downloadImage");
const settings = require("../settings.json");
const getValueFromDB = require("../sql/getValueFromDB");

const checkValueExists = require("../sql/checkValueExists");
const checkImageSize = require("../handlers/images/checkImageSize");

const skin = async (interaction) => {
    const member = interaction.member;

    if (await checkValueExists("discord_id", member.id)) {
        const attachment = interaction.options.getAttachment('skin');
        const username = await getValueFromDB(member.id, "username");

        try {
            await downloadImage(attachment.url, settings.skins.path, username);
            console.log(typeof(`${settings.skins.path}/${username}.png`))
            // console.log(await checkImageSize(`${settings.skins.path}/${username}.png`));
            return interaction.reply(`Скин для игрока ${username} успешно загружен!`);

        } catch (error) {
            console.error(error);
            return interaction.reply('Не удалось загрузить скин. Возможно он не соответствует допустиым параметрам');
        }
    } else {
        return interaction.reply('Вы не зарегистрированы!');
    }
}

//TODO: Fix 


module.exports = skin;