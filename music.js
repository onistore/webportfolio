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

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}