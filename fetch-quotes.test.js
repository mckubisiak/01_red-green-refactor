/* eslint-disable indent */
import fetchQuotes from './capitlize-and-filter';

describe('fetchQuotes', () => {

    it('fetches a single quote from the futurama api', () => {

    
        const actual = fetchQuotes();
    
        expect(actual).toEqual(expect.any(Object));
    });
    
});


