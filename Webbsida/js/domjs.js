function lightOn() {
    if (document.body.style.background !== "white") {
                document.body.style.background = "white";
                document.getElementById("colorChange1").style.color = "black";
                document.getElementById("colorChange2").style.color = "black";
                document.getElementById("colorChange3").style.color = "black";
                document.getElementById("colorChange4").style.color = "black";
                document.getElementById("colorChange5").style.color = "black";
                document.getElementById("colorChange6").style.color = "black";
                document.getElementById("colorChange7").style.color = "black";
                document.getElementById("colorChange8").style.color = "black";
            }  
            else {
                document.body.style.background = "rgb(40, 40, 40)";
                document.getElementById("colorChange1").style.color = "white";
                document.getElementById("colorChange2").style.color = "white";
                document.getElementById("colorChange3").style.color = "white";
                document.getElementById("colorChange4").style.color = "white";
                document.getElementById("colorChange5").style.color = "white";
                document.getElementById("colorChange6").style.color = "white";
                document.getElementById("colorChange7").style.color = "white";
                document.getElementById("colorChange8").style.color = "white";
            }
}

function dropdown_function() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.meny')) {
      var dropdowns = document.getElementsByClassName("dropdown_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }