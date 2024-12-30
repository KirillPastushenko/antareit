 
const menuButton = document.querySelector(".btn-header-menu");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

let menuOpened = false;

 
menuButton.addEventListener("click", () => {
 
  menuOpened = !menuOpened;
 
  if (menuOpened) {
    menuButton.classList.add("opened");
    menu.classList.add("opened");
	body.classList.add("fixed");
  } else {
    menuButton.classList.remove("opened");
    menu.classList.remove("opened");
    body.classList.remove("fixed");
  }
});

$(document).ready(function(){
  $('.text-block-btn').on('click', function(){
    $(this).parent().toggleClass('active');
  })

  $('.effect-text-btn').on('click', function(){
    $(this).closest('.effect-text-block').toggleClass('active');
  })


  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);  
    }
});

})