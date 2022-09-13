// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"Not how long, but how well you have lived is the main thing.”`,
        person: `Seneca`
    },

    {
        quote: `“If life were predictable it would cease to be life, and be without flavor.”`,
        person: `Eleanor Roosevelt`
    },

    {
        quote: `"Everything negative – pressure, challenges – is all an opportunity for me to rise."`,
        person: `LeBron James`
    },

    {
        quote: `"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."`,
        person: `Celine Dion`
    },


    {
        quote: `“Live in the sunshine, swim the sea, drink the wild air.”`,
        person: `Ralph Waldo Emerson`
    },

];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person;
})