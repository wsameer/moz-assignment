import fs from 'fs';

/**
 * Extract the content of the given file
 * @param {string} file The path of the data file
 * @returns Object containing all the data inside the file in JSON format
 */
const readFile = file => {
    try {
        const data = fs.readFileSync(file, 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.error('Error in reading file: ', error);
    }
};

export default readFile;
