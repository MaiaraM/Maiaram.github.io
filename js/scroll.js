window.onscroll = function() {scrollFunction()};
var menu=document.getElementById("menu");
var logo=document.getElementById("logotipo")

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menu.style.height = "65px";
    menu.style.textAlign="center";
    //menu.style.borderTop="5px solid #000";
    //menu.style.background="rgba(254, 200, 35, 0.8)";

    logo.style.width="15em";
  } else {
    menu.style.height = "90px";
    menu.style.textAlign="start";
    //menu.style.textAlign="start";
    //menu.style.background="rgba(0, 0, 0, 0.7)";
    //menu.style.borderTop="5px solid #ffc823";
    
    logo.style.width="20em";
    
  }
}