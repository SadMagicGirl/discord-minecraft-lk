const Users = require('./models/users')

const getValueFromDB = async (id, key) => {
    try {
        const user = await Users.findOne({
          where: {
            discord_id: id,
          }
        });
    
        return user[key];
      }
    catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return false;
      }
}

module.exports = getValueFromDB;