


var quotes = [

  'You have not lived today until you’ve done something for someone who can never repay you.—John Bunyan',
  'Life is too short to wake up in the morning with regrets. So, love the people who treat you right and forget about the ones who don’t. And believe that everything happens for a reason. If you get a chance, take it. If it changes your life, let it. Nobody said that it would be easy, they just promised it would be worth it.—Harvey MacKay',
  'If you do not tell the truth about yourself you cannot tell it about other people. Virginia Woolf'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};
