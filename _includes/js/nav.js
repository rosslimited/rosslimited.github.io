
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');

    if (hamburger.classList.contains('is-active')) {
      document.getElementById("nav-bar").style.display = "block";
      document.getElementsByTagName("nav")[0].style.backgroundColor = "black";
      document.getElementsByTagName("body").style.opacity = "0.25";
    }
    else {
      document.getElementById("nav-bar").style.display = "none";
      document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
      document.getElementsByTagName("body").style.opacity = "1";
    }
});
