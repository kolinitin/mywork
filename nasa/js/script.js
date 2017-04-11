var welcome = document.querySelector('.welcome');
var stories = document.querySelector('.stories');

console.log(window.pageYOffset)
console.log(welcome.getBoundingClientRect().top)


window.onscroll = function(){
  var scroll = window.pageYOffset;
  if(scroll > stories.getBoundingClientRect().top) {
    revealStories()
  }
}
function revealStories(){
  var storiesCard = document.querySelectorAll('.card');
  for(i=0;i<storiesCard.length;i++) {
    setTimeout(function(x) {
      return function() { 
        storiesCard[x].classList.add("show");
      };
    }(i), 300*i);
  }
}
function revealAboutNasa(){
  var about = document.querySelectorAll('.card');
}