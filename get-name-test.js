/* eslint-disable indent */
import getName from './get-name';

describe('getName', () => {

    it('gets the name of an object'), () => {

        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        getName(spot); // returns spot
    // const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    // getName(character) // returns Aang
        
    };
});
