/* eslint-disable indent */
import fetch from 'node-fetch';

const fetchQuotes = async () => {
    
    const apiRequest = await fetch('https://futuramaapi.herokuapp.com/api/quotes');

    const body = await apiRequest.json();

return body.results;

};

export default fetchQuotes;
