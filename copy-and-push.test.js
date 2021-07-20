/* eslint-disable indent */
import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {

    it('copys an array and adds a number to it', () => {
        const numbers = [1, 2, 3];
        const actual = copyAndPush(numbers, 4);
        const expected = [1, 2, 3, 4]; 
    
        expect(actual).toEqual(expected);
    });

    it('copys an array and adds a number to it', () => {
        const numbers = [1, 2, 3];
        const numbersToAdd = [4, 5, 6];
        const actual = copyAndPush(numbers, numbersToAdd);
        const expected = [1, 2, 3, 4,5, 6]; 
    
        expect(actual).toEqual(expected);
    });

});

// it('copys an array and adds a number to it', () => {
//     const actual = copyAndPush(); 
//     const expected =  ; 

//     expect(actual).toEqual(expected);
// });
