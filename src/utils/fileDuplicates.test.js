import findDuplicates from './fileDuplicates';

describe('findDuplicates', () => {
    test('should return an array of duplicate items', () => {
        const input = [1, 2, 3, 2, 4, 3];
        const expected = [2, 3];

        const result = findDuplicates(input);

        expect(result).toEqual(expected);
    });

    test('should return an empty array if no duplicates found', () => {
        const input = [1, 2, 3, 4];
        const expected = [];

        const result = findDuplicates(input);

        expect(result).toEqual(expected);
    });

    test('should handle an empty array', () => {
        const input = [];
        const expected = [];

        const result = findDuplicates(input);

        expect(result).toEqual(expected);
    });
});
