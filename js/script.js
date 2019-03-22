/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/* CREATE OBJECT ARRAY
1. Include at least 5 objects
2. Name the object "quotes"
3. Give each quote a 'quote' and 'source' property
4. Add 'citation' property to at least one object in the array
5. Add 'year' property to at least one object in the array
6. Use console.log() to log array to console
*/

var quotes = [
  {
      quote: 'Poets have been mysteriously silent on the subject of cheese.',
      source: 'G.K. Chesterton',
      citation:'Alarms and Discursions',
      year:'1911'
  },

  {
    quote: 'Age is of no importance unless you’re a cheese.';
    source: 'Billie Burke',
  },

  {
    quote: "A cheese may disappoint. It may be dull, it may be naive, it may be oversophisticated. Yet it remains cheese, milk's leap toward immortality.",
    source: 'Clifton Fadiman',
    citation:'Any Number Can Play',
  },

  {
    quote: 'Give me a good sharp knife and a good sharp cheese and I’m a happy man.',
    source: 'George R. R. Martin',
  },

  {
    quote: 'What happens to the hole when the cheese is gone?',
    source: 'source5',
  },

];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  var quoteToUse = getRandomQuote();
  var quoteHTML = '';

  //add quote + source
  quoteHTML += '<p class="quote">' + quoteToUse.quote + '</p>';
  quoteHTML += '<p class="source">' + quoteToUse.source;

  //run conditional statements checking for citation and year
  if ( quoteToUse.citation ) {
    quoteHTML += '<span class="citation">' + quoteToUse.citation + '</span>';
  }
  if ( quoteToUse.year ) {
    quoteHTML += '<span class="year">' + quoteToUse.year + '</span>';
  }

  //close the <p> tag
  quoteHTML += '</p>';

  //inject into document
  document.getElementById("quote-box").innerHTML = quoteHTML;
}

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
