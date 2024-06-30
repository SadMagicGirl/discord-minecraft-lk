const Users = require('./models/users')

const addUser = async (username, password, discord_id) => {
    try {
        await Users.create({
            username: username,
            password: password,
            discord_id: discord_id,
            skin: false,
            cloak: false
            })
        }
    catch (error) {
        console.log(error);
    }
}

module.exports = addUser;