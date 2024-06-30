const checkString = (str) => {
    return (str.length <= 16 && /^[A-Za-z0-9_]+$/.test(str))
}

module.exports = checkString;
