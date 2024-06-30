const crypto = require('crypto');

const getRandomPassword = (length) => {

    //generate password
    const wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    const password = Array.from(crypto.randomBytes(length))
    .map((x) => wishlist[x % wishlist.length])
    .join('');

    return password;
}

module.exports = getRandomPassword;
