/**
 * Generic function to find duplicates in a given array list
 * @param {Array} array the array in which we have to find the duplicates
 * @returns an array containing only the duplicate entities
 */
const findDuplicates = array => array.filter((item, index) => array?.indexOf(item) !== index);

export default findDuplicates;
