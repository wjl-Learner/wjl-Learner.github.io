$(function(){
    $('.container').fullpage({
        navigation: true
    });
})

$(document).ready(function(){
    $(".logo").mouseover(function(){
      $(".like").show();
    });
    $(".logo").mouseout(function(){
        $(".like").hide();
      });
  });
  
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
