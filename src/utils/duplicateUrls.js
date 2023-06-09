import findDuplicates from './fileDuplicates.js';

/**
 * Function to extract URLs
 * @param {Array} targetArray list of objectName where we have to find the duplicates
 * @param {Array} sources the original array containing objects
 * @param {String} objectName name of the object to be searched
 * @returns
 */
const getUrlsOfDuplicateData = (targetArray, sources, objectName) => {
    if (objectName == null) {
        return console.error('Object name is mandatory field');
    }
    const duplicatesObjects = findDuplicates(targetArray);
    return sources.filter(source => duplicatesObjects.includes(source[objectName])).map(source => source.url);
};

export default getUrlsOfDuplicateData;
