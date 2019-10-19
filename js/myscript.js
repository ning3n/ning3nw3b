$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $links = $('#menu').find('a')

		$menulink.click(function() {
  		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
  		return false
	});

	$links.click(function(){
		$menulink.toggleClass('active')
		$menu.toggleClass('active')
	});



});

ScrollReveal().reveal('.header', {
  duration: 1000,
  origin: 'bottom',
  distance: '10px'
});
ScrollReveal().reveal('#MIWEL2', {
  duration: 1000,
  origin: 'bottom',
  distance: '300px'
});
ScrollReveal().reveal('#obj', {
  duration: 1000,
  origin: 'right',
  distance: '300px'
});
ScrollReveal().reveal('#portfolio', {
  duration: 2000,
});
ScrollReveal().reveal('#uno', {
  duration: 1000,
  origin: 'left',
  distance: '300px'
});
ScrollReveal().reveal('#dos', {
  duration: 1000,
  origin: 'right',
  distance: '300px'
});
ScrollReveal().reveal('.btn2', {
  duration: 1000,
  origin: 'bottom',
  delay: 1000
});
ScrollReveal().reveal('#contact', {
  duration: 2000,
  viewFactor: 0.2
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* 

SCRIPT SLIDES

*/
var slideIndex = 1;

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


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);





/*

CIERRE SCRIPT SLIDES

*/
