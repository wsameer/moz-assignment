import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getUrlsOfDuplicateData from './utils/duplicateUrls.js';
import readFile from './utils/readFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE_PATH = path.resolve(__dirname, './data.json');

(function Moz() {
    /**
     * Get all objects inside "sources"
     * @param {Object} rawData The data inside the file
     * @returns all the objects inside the 'sources' object
     */
    const getSources = rawData => rawData?.idina_response.sources;

    /**
     * Function to print the output
     * @param {Array<string>} spamScoresUrls All URLs with duplicate spam_score
     * @param {Array<string>} domainAuthUrls All URLs with duplicate domain authorities
     */
    function displayOutput(spamScoresUrls, domainAuthUrls) {
        console.log({
            duplicate_spam_scores: spamScoresUrls,
            duplicate_domain_authorities: domainAuthUrls
        });
    }

    // stores the content of the file
    const fileData = readFile(FILE_PATH);
    // stores all the data inside the 'sources' array
    const sources = getSources(fileData);

    // extract all spam_score
    const spamScores = sources.map(source => source.spam_score);
    const duplicateSpamScoreURLs = getUrlsOfDuplicateData(spamScores, sources, 'spam_score');

    // extract all domain_authority
    const domainAuthorities = sources.map(source => source.domain_authority);
    const duplicateDomainAuthorityURLs = getUrlsOfDuplicateData(domainAuthorities, sources, 'domain_authority');

    // print the final output
    displayOutput(duplicateSpamScoreURLs, duplicateDomainAuthorityURLs);
})();
