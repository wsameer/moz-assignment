import fs from 'fs';
import readFile from './readFile';

// Mock the fs module
jest.mock('fs');

describe('readFile', () => {
    afterEach(() => {
        jest.resetAllMocks(); // Reset mocks after each test
    });

    test('should read and parse file successfully', () => {
        const mockFileData = '{"name": "John", "age": 30}';
        const mockParsedData = { name: 'John', age: 30 };

        // Mock the fs.readFileSync() function
        fs.readFileSync.mockReturnValueOnce(mockFileData);

        const result = readFile('data.json');

        expect(fs.readFileSync).toHaveBeenCalledWith('data.json', 'utf8');
        expect(result).toEqual(mockParsedData);
    });

    test('should handle file reading error', () => {
        const mockError = new Error('File not found');

        // Mock the fs.readFileSync() function to throw an error
        fs.readFileSync.mockImplementationOnce(() => {
            throw mockError;
        });

        console.error = jest.fn(); // Mock console.error

        const result = readFile('data.json');

        expect(fs.readFileSync).toHaveBeenCalledWith('data.json', 'utf8');
        expect(console.error).toHaveBeenCalledWith('Error in reading file: ', mockError);
        expect(result).toBeUndefined();
    });
});
