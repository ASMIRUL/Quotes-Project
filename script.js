const quotes = [
    {
        name: 'Luigi',
        quote: 'Lets-a-go.'
    },
    {
        name: 'Falcon',
        quote: 'Show me your moves.'
    },
    {
        name: 'Ness',
        quote: 'OK.'
    },
    {
        name: 'Marth',
        quote: 'Keep your eyes open.'
    },
    {
        name: 'Fox',
        quote: 'Come on.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;

}
// jsjsj