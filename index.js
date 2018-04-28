var url = "https://talaikis.com/api/quotes/random/"

function getQuote() {
  $.ajax({url:url}).done(function(data) {
    $(".quote-text").text(data.quote)
    $(".quote-author").text(data.author)
  })
}

$(document).ready(function() {
  getQuote();
})