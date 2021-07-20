/* eslint-disable indent */
import captlizeAndFilter from './capitlize-and-filter';

describe('captlizeAndFilter', () => {

    it('copys an array and adds a number to it', () => {
        const stringArray = ['frank', 'janet', 'Tim', 'fillip', 'philip'];
        const actual = captlizeAndFilter(stringArray);
        const expected = ['Janet', 'Tim', 'Philip'] ; 
    
        expect(actual).toEqual(expected);
    });

    
});

// it('copys an array and adds a number to it', () => {

    
//     const actual = captlizeAndFilter();
//     const expected = ; 

//     expect(actual).toEqual(expected);
// });
