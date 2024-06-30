/**
 * This code snippet defines a function called `checkImageSize` that checks if the size of an image file located at a given path is valid.
 * The function uses the `sharp` library to get the metadata of the image and compares the size with a set of valid sizes defined in the `settings.json` file.
 * If the size is valid, the function returns `true`, otherwise it returns `false`.
 *
 * @param {string} path - The path to the image file.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the image size is valid, and `false` otherwise.
 */
// const sharp = require('sharp');
const settings = require("../../settings.json");

const checkImageSize = async (path) => {
    try {
        const validSizes = settings.misc.avalible_skin_sizes;
        const imgInfo = await sharp(path).metadata();

        const size = `${imgInfo.width}x${imgInfo.height}`;
        return validSizes.includes(size, 0);
    } catch (error) {

        console.log(error);
        return 'lol';
    }
}


module.exports = checkImageSize;

//TODO: fix skin image size module