const settings = require("../settings.json");

const checkAdmin = (discord_id) => {
    return settings.admin.includes(discord_id);
}

module.exports = checkAdmin;