const quotes = [
{
  quote: "ac/dc",
  auther: "angers young",
},
{
  quote: "gunsnroses",
  auther: "axel rose",
},
{
  quote: "black sabbath",
  auther: "ozzy usbone",
},
{
  quote: "led zepplin",
  auther: "robert planet",
},
{
  quote: "the beatles",
  auther: "john lennon & paul mccalty",
},
{
  quote: "rolling stones",
  auther: "mick jagger",
},
{
  quote: "nirvana",
  auther: "curt cobain",
},
{
  quote: "U2",
  auther: "bono",
},
{
  quote: "Def leppard",
  auther: "jo leliat",
},
];
//console.log(quotes[Math.floor(Math.random() * 9)]);
const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
auther.innerText = randomQuote.auther;