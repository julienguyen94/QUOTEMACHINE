//jQuery document.querySelector returns element specified selectors
const quoteText = document.querySelector("#text"),
      authorName = document.querySelector("#author .name")
      quoteBtn = document.querySelector("button");

/*fetch url quote from github, paste it into link and added /random at the end*/
function randomQuote(){
fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
  /* innerText property sets or returns the text content of an element*/
  quoteText.innerText=result.content;
  authorName.innerText=result.author;
  });
}

/*waits for event to occur when user clicks on button*/
quoteBtn.addEventListener("click", randomQuote);
     

