const settings = require('../settings.json');


const addGuildRole = async (guild, roleName, roleColor) => {
    try {
        //find the role by name
        const role = guild.roles.cache.find(role => role.name === roleName);


        if (!role) {
            await guild.roles.create({
                name: roleName,
                color: roleColor,
            })
            console.log(`Роль ${roleName} успешно создана`);
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = addGuildRole;