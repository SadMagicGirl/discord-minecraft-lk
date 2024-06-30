const Users = require('./models/users')

const checkValueExists = async (key, value) => {
    try {
        const user = await Users.findOne({
          where: {
            [key]: value,
          },
        });
    
        return user ? true : false;
      }
    catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return true;
      }
}

module.exports = checkValueExists;