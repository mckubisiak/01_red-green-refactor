/* eslint-disable indent */
import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {

    it('fetches a single quote from the futurama api', async () => {

    
        const actual = await fetchQuotes();
    
        expect(actual).toEqual({
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
        });
    });
    
});


