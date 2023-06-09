import getUrlsOfDuplicateData from './duplicateUrls';

describe('getUrlsOfDuplicateData', () => {
    const targetArray = [1, 2, 3, 2, 4, 3];
    const sources = [
        { url: 'example.com', data: 1 },
        { url: 'foo.com', data: 2 },
        { url: 'bar.com', data: 3 },
        { url: 'baz.com', data: 4 }
    ];
    const objectName = 'data';

    test('should return URLs of duplicate data objects', () => {
        const expected = ['foo.com', 'bar.com'];

        const result = getUrlsOfDuplicateData(targetArray, sources, objectName);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if no duplicates found', () => {
        const targetArray = [1, 2];
        const objectName = 'data';
        const expected = [];

        const result = getUrlsOfDuplicateData(targetArray, sources, objectName);

        expect(result).toEqual(expected);
    });

    test('should handle missing objectName', () => {
        console.error = jest.fn(); // Mock console.error

        const result = getUrlsOfDuplicateData(targetArray, sources);

        expect(console.error).toHaveBeenCalledWith('Object name is mandatory field');
        expect(result).toBeUndefined();
    });
});
