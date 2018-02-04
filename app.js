$(loadQuote);

function loadQuote() {
  $("#quote").addClass("reset");
  $("#quote").removeClass("executed");
  $("#image").toggleClass("fade");


  setTimeout(function(){ 
    $.getJSON('quotes.json', function(json) {
      var quotesList=json;
      var randomNumber=Math.floor(Math.random() * quotesList.length);

      showQuote(quotesList[randomNumber])
    }); 
  }, 2000)

};

function showQuote(quote){

  //Remove the old image if exists
  var img = document.getElementsByTagName("img")[0];
  if (img) {
    removeQuote();

  };


  //Load the new quote
  $("#quote").html(quote.text);

  //Load the new image
  var img = document.createElement("IMG");
  img.src = quote.image;
  img.setAttribute('id', quote.id);
  img.setAttribute('height','300px');
  document.getElementById('image').appendChild(img);

  $("#quote").addClass("executed");
  $("#quote").removeClass("reset");
  $("#image").toggleClass("fade");
};



function removeQuote() {
    
  var elementToBeRemoved = document.getElementsByTagName("img")[0];

  //Remove old quote
  $("#quote").html("");

  //Remove old image
  elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}


setInterval(loadQuote, 12000);

