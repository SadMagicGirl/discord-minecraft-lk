const Users = require('./models/users')

const updateValue = async (key, value, id) => {
    try {
        const updateObject = {};
        updateObject[key] = value;

        await Users.update(updateObject, {
            where: {
                discord_id: id
            }
          });
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
}

module.exports = updateValue;