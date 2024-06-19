function latest() {
  var about = document.querySelector(".about");
  var latest = document.querySelector(".latest");
  var clickabout = document.querySelector("#clickabout");
  var clicklatest = document.querySelector("#clicklatest");

  clicklatest.style.backgroundColor = "rgb(243, 237, 237)"
  clickabout.style.backgroundColor = "white"
  about.style.width = "0";
  about.style.height = "0";
  about.style.padding = "0 0";
  latest.style.padding = "2rem 0";
  about.style.overflow = "hidden";
  // latest.style.transition = "all 0.4s ease";
  latest.style.overflow = "visible";
  latest.style.width = "100%";
  latest.style.height = "100%";
}

function about() {
  var about = document.querySelector(".about");
  var latest = document.querySelector(".latest");
  var clickabout = document.querySelector("#clickabout");
  var clicklatest = document.querySelector("#clicklatest");

  clickabout.style.backgroundColor = "rgb(243, 237, 237)"
  clicklatest.style.backgroundColor = "white"
  latest.style.padding = "0 0";
  about.style.padding = "2rem 0";

  latest.style.width = "0";
  latest.style.height = "0";
  latest.style.overflow = "hidden";
  // about.style.transition = "all 0.4s ease";
  about.style.overflow = "visible";
  about.style.width = "100%";
  about.style.height = "100%";
}


function handleHide(){
var widht = document.querySelector(".widht")
widht.style.transition = "all 0.8s ease";
widht.style.left="-100%"
widht.style.width = "0";
widht.style.overflow = "hidden";

}


function handleShow(){
  var widht = document.querySelector(".widht")
  widht.style.transition = "all 0.5s ease";
  widht.style.left="0"
  widht.style.width = "100%";
  widht.style.overflow = "visible";

  
  }
