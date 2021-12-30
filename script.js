const colors = [
  "#CC6600",
  "#660000",
  "#CC0000",
  "#330000",
  "#6600ff",
  "#CC0099",
  "#990099",
  "#660099",
  "#000099",
  "#006666",
]
const quotes = [
  {
    text: 'Be yourself; everyone else is already taken.', 
    author: 'Oscar Wilde'
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
    author: 'Albert Einstein'
  },
  {
    text: 'So many books, so little time.', 
    author: 'Frank Zappa'
  },
  {
    text: 'A room without books is like a body without a soul.', 
    author: 'Marcus Tullius Cicero'
  },
  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", 
    author: 'Dr. Seuss'
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: 'Mae West'
  },
  {
    text: 'Be the change that you wish to see in the world.', 
    author: 'Mahatma Gandhi'
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.", 
    author: 'Robert Frost'
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: 'Mark Twain'
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
    author: 'Mahatma Gandhi'
  },
  {
    text: "I am so clever that sometimes I don't understand a single word of what I am saying.", 
    author: 'Oscar Wilde'
  },
  {
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 
    author: 'Ralph Waldo Emerson'
  },
  {
    text: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 
    author: ' Albert Einstein'
  },
  {
    text: 'Good friends, good books, and a sleepy conscience: this is the ideal life.', 
    author: 'Mark Twain'
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas A. Edison'
  },
  {
    text: 'The man who does not read has no advantage over the man who cannot read.', 
    author: ' Mark Twain'
  },
  {
    text: 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', 
    author: 'Albert Einstein'
  },
  {
    text: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.', 
    author: 'Lao Tzu'
  },
  {
    text: "If you can't explain it to a six year old, you don't understand it yourself.", 
    author: 'Albert Einstein'
  },
  {
    text: 'Everything you can imagine is real.', 
    author: 'Pablo Picasso'
  },
  {
    text: 'If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.',
    author: ' Albert Einstein '
  }
];

window.onload = init;
function init(){
  newQuoteGenerator();
  colorTheme();
}

function newQuoteGenerator() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let currentQuote = quotes[randomIndex];
  document.getElementById("text").innerText = currentQuote.text;
  document.getElementById("author").innerText = "- " + currentQuote.author;
  document.getElementById("tweet-quote").href="https://twitter.com/intent/tweet/?text=" + '"' + currentQuote.text + '" - ' + currentQuote.author;
}

function colorTheme() {
  let randomIndex = Math.floor(Math.random() * colors.length)
  let currentColor = colors[randomIndex ];
  document.body.style.background = currentColor;
  document.getElementById("quote-box").style.color = currentColor;
  document.getElementById("tweet-quote").style.backgroundColor = currentColor;
  document.getElementById("new-quote").style.backgroundColor = currentColor;
  document.getElementById("footer").style.color = currentColor;
};