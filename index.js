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
   var txt = 'PADA SUATU DIMENSI, ADA SEORANG MANUSIA YANG BIASA BIASA SAJA (YAH MEMANG BIASA SAJA). . . PADA SUATU HARI IA JATUH HATI PADA SEORANG WANITA. NAMUN, IA TIDAK BERANI UNTUK MENGUNGKAPKAN ISI HATINYA. IA HANYA BISA MELIHATNYA DARI KEJAUHAN,  DANNN. . . . DOAIN YAH BIAR ADA CERITA LANJUTAN NYA . . . . . . . . . . . DAHHHHH ITU AJA SOALNYA BELUM ADA PART PART SELANJUTNYA 🗿.        . . . . . . . MAKASIH UDAH DI CLICK HEHEHE';
   var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}