/* eslint-disable indent */
import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {

    it('gets the name of an object', () => {
        const numbers = [1, 2, 3];
        const actual = copyAndPush(numbers, 4);
        const expected = [1, 2, 3, 4]; 
    
        expect(actual).toEqual(expected);
    });

});

// it('gets the name of an object', () => {
//     const actual = copyAndPush(); 
//     const expected =  ; 

//     expect(actual).toEqual(expected);
// });
