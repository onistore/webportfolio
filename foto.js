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

var i = 0;
var txt = 'INGAT 1000 KEBAIKAN TIDAK AKAN BERARTI JIKA ANDA MELAKUKAN SEBUAH KESALAHAN. BAHKAN JIKA ITU KESALAHAN YANG BIASA SAJA 🗿🗿.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
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