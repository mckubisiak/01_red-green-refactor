/* eslint-disable indent */
import captlizeAndFilter from './capitlize-and-filter';

describe('captlizeAndFilter', () => {

    it('captilize all strings in an array, and removes items with F/f', () => {
        const stringArray = ['frank', 'janet', 'Tim', 'fillip', 'philip'];
        const actual = captlizeAndFilter(stringArray);
        const expected = ['JANET', 'TIM', 'PHILIP'] ; 
    
        expect(actual).toEqual(expected);
    });
    
    it('captilize all strings in an array, and removes items with F/f', () => {
        const stringArray = ['jerry', 'chris', 'filber', 'ollie', 'rick'];
        const actual = captlizeAndFilter(stringArray);
        const expected = ['JERRY', 'CHRIS', 'OLLIE', 'RICK'] ; 
    
        expect(actual).toEqual(expected);
    });

    
});

// it('copys an array and adds a number to it', () => {

    
//     const actual = captlizeAndFilter();
//     const expected = ; 

//     expect(actual).toEqual(expected);
// });
