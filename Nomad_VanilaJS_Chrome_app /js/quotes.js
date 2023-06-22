const quotes = [
    {
        quote: "I have not failed.I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm..",
        author: "Winston Churchill"
    },
    
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "T Conrad Hilton"
    },
    
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis"
    },
    
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    
]


const quote =  document.querySelector('#quote span:first-child'); //명언
const author =  document.querySelector('#quote span:last-child'); //성명
const randomIndex = Math.floor(Math.random() * quotes.length);

console.log(randomIndex)

quote.innerText =`"${quotes[randomIndex].quote}"`; 
author.innerText = quotes[randomIndex].author;
//index를 무작위로뽑고싶다!0부터  quotes의 길이 -1까지