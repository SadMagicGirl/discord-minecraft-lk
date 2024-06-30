const fs = require('fs');
const https = require('https');
const path = require('path');

/**
 * Downloads an image from a given URL and saves it to a specified folder with a given file name.
 * Handles errors that may occur during the download process.
 * 
 * @param {string} url - The URL of the image to be downloaded.
 * @param {string} folder - The folder where the downloaded image will be saved.
 * @param {string} fileName - The name of the downloaded image file.
 */
const downloadImage = (url, folder, fileName) => {
    const filePath = path.join(folder, `${fileName}.png`);

    // If path doesn't exist, create it
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }

    // Create a file stream
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
        // Check response status
        if (response.statusCode === 200) {
            response.pipe(file);
            // Finished downloading
            file.on('finish', () => {
                file.close();
            });
        } else {
            // If request failed, delete file
            fs.unlink(filePath, () => {
                console.log(`Download failed, error message ${response.statusCode}`);
            });
        }
    }).on('error', (err) => {
        // If request failed
        fs.unlink(filePath, () => {
            console.log(`Download failed, error message ${err.message}`);
        });
    });
}

module.exports = downloadImage;