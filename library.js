function redirvideo() {
      window.location.href = "video.html"
    }
    function redirfoto() {
      window.location.href = "foto.html"
    }
    function redirlibrary() {
      window.location.href = "library.html"
    }
    function redirmusic() {
      window.location.href = "music.html"
    }
    function redirabout() {
      window.location.href = "aboutme.html"
    }


    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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