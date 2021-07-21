/* eslint-disable indent */
import fetch from 'node-fetch';

const fetchQuotes = async () => {
    
    const apiRequest = await fetch('https://futuramaapi.herokuapp.com/api/quotes');

    const body = await apiRequest.json();

    const singleQuote = body[0];
    
return singleQuote;

};

export default fetchQuotes;
