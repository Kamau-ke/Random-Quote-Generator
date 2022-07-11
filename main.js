const quoteSection=document.querySelector('#quoteSection')
const generateBtn=document.querySelector('#button')
const card=document.querySelector('.card')

let quotes=[
    'Any fool can write code that a computer can understand. Good programmers write code human can understand',
    'First, solve the problem. Then, write the code',
    'Experience is the name everyone gives to their mistakes',
    'Java is to javaScript what car is to carpet',
    'Sometimes it pays to stay in bed on monday, rather than spending the rest of the week debugging mondays code'

];

function generateQuotes(){
    let i=Math.floor(Math.random() *quotes.length)
    quoteSection.textContent=quotes[i]
}


const getQuote=()=>{
    
    card.style.opacity=1
    setInterval(generateQuotes, 5000)//automatically generate quotes
   
   
 }

generateBtn.addEventListener('click', getQuote);

