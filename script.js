$(document).ready(function(){
var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);

    $("#button").click(function(){
       var store = $("#input").val() 
    });
   
  var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search"
  var headers = {
    "X-Mashape-Key":"RSjfAcyXg2mshzTup1ytaSmxe6pFp1LIPyOjsn0SvfyBXgYEXb",
    "Accept": "application/json"
  }


$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: callback,
    error: console.error,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'RSjfAcyXg2mshzTup1ytaSmxe6pFp1LIPyOjsn0SvfyBXgYEXb');
      xhr.setRequestHeader('Accept', 'application/json');
  }
});

function callback(response) {
  console.log('here!');
  console.log('response', response.results);
  $('body').append(response.results[0].title);
  $("body").append(response.results[0].image);
  $("#recipes-list").append("<img src = 'https://spoonacular.com/recipeImages/" + response.results[0].image + "' />");
  //response.results[0].title
}
   
});
//https://market.mashape.com/spoonacular/recipe-food-nutrition