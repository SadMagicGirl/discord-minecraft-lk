const Users = require('./models/users')

const deleteUserFromDB = async (value) => {
    try {await Users.destroy({
            where: {
                discord_id: value,
            }
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteUserFromDB;