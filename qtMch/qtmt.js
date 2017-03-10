var quotes = [

  'You have not lived today until you’ve done something for someone who can never repay you.—John Bunyan',
  'Life is too short to wake up in the morning with regrets. So, love the people who treat you right and forget about the ones who don’t. And believe that everything happens for a reason. If you get a chance, take it. If it changes your life, let it. Nobody said that it would be easy, they just promised it would be worth it.—Harvey MacKay'
  'If you do not tell the truth about yourself you cannot tell it about other people.—Virginia Woolf',
  'It is better to be hated for what you are than to be loved for what you are not.—André Gide',
  'We need to learn to love ourselves first, in all our glory and our imperfections. If we cannot love ourselves, we cannot fully open to our ability to love others or our potential to create.—John Lennon',
  'Be the change you wish to see in the world.— attributed to Mahatma Gandhi',
  'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.—Bob Marley',
  'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.— Steve Kloves',
];

function newQuote () {
  let random = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
  
}
