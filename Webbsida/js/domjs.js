function lightOn(){if (document.body.style.background !=="white"){document.body.style.background="white"; document.getElementById("button").innerHTML="Dark Mode"; document.getElementById("button").style.color="black"; document.getElementById("button").style.background="white"; document.getElementById("li1").style.color="black"; document.getElementById("li2").style.color="black"; document.getElementById("li3").style.color="black"; document.getElementById("li4").style.color="black"; document.getElementById("li5").style.color="black"; document.getElementById("dropdown").style.background="white"; document.getElementById("colorChange1").style.color="black"; document.getElementById("colorChange2").style.color="black"; document.getElementById("colorChange3").style.color="black"; document.getElementById("colorChange4").style.color="black"; document.getElementById("colorChange5").style.color="black"; document.getElementById("colorChange6").style.color="black"; document.getElementById("colorChange7").style.color="black"; document.getElementById("colorChange8").style.color="black"; document.getElementById("colorChange9").style.color="black"; document.getElementById("colorChange10").style.color="black"; document.getElementById("colorChange11").style.color="black";}else{document.body.style.background="rgb(40, 40, 40)"; document.getElementById("button").innerHTML="Light Mode"; document.getElementById("button").style.color="white"; document.getElementById("button").style.background="rgb(50, 50, 50)"; document.getElementById("li1").style.color="rgb(255,70,50)"; document.getElementById("li2").style.color="rgb(255,200,60)"; document.getElementById("li3").style.color="rgb(255,255,60"; document.getElementById("li4").style.color="rgb(80,175,10)"; document.getElementById("li5").style.color="rgb(10,100,175)"; document.getElementById("dropdown").style.background="rgb(30, 30, 30)"; document.getElementById("colorChange1").style.color="white"; document.getElementById("colorChange2").style.color="white"; document.getElementById("colorChange3").style.color="white"; document.getElementById("colorChange4").style.color="white"; document.getElementById("colorChange5").style.color="white"; document.getElementById("colorChange6").style.color="white"; document.getElementById("colorChange7").style.color="white"; document.getElementById("colorChange8").style.color="white"; document.getElementById("colorChange9").style.color="white"; document.getElementById("colorChange10").style.color="white"; document.getElementById("colorChange11").style.color="white";}}function dropdown_function(){document.getElementById("dropdown").classList.toggle("show"); if (document.body.style.background !=="rgb(20, 20, 20)"){if (document.body.style.background !=="rgb(100, 100, 100)"){if (document.body.style.background !=="white"){document.body.style.background="rgb(20, 20, 20)"; document.getElementById("gaming_tips").style.color="rgb(100, 100, 100)"; document.getElementById("title").style.background="rgb(10, 10, 10)"; document.getElementById("colorChange1").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange2").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange3").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange4").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange5").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange6").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange7").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange8").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange9").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange10").style.color="rgb(100, 100, 100)"; document.getElementById("colorChange11").style.color="rgb(100, 100, 100)";}else{document.body.style.background="rgb(100, 100, 100)"; document.getElementById("gaming_tips").style.color="rgb(100, 100, 100)"; document.getElementById("title").style.background="rgb(10, 10, 10)"; document.getElementById("colorChange1").style.color="black"; document.getElementById("colorChange2").style.color="black"; document.getElementById("colorChange3").style.color="black"; document.getElementById("colorChange4").style.color="black"; document.getElementById("colorChange5").style.color="black"; document.getElementById("colorChange6").style.color="black"; document.getElementById("colorChange7").style.color="black"; document.getElementById("colorChange8").style.color="black"; document.getElementById("colorChange9").style.color="black"; document.getElementById("colorChange10").style.color="black"; document.getElementById("colorChange11").style.color="black";}}else{document.body.style.background="white"; document.getElementById("gaming_tips").style.color="white"; document.getElementById("title").style.background="rgb(20, 20, 20)"; document.getElementById("colorChange1").style.color="black"; document.getElementById("colorChange2").style.color="black"; document.getElementById("colorChange3").style.color="black"; document.getElementById("colorChange4").style.color="black"; document.getElementById("colorChange5").style.color="black"; document.getElementById("colorChange6").style.color="black"; document.getElementById("colorChange7").style.color="black"; document.getElementById("colorChange8").style.color="black"; document.getElementById("colorChange9").style.color="black"; document.getElementById("colorChange10").style.color="black"; document.getElementById("colorChange11").style.color="black";}}else{document.body.style.background="rgb(40, 40, 40)"; document.getElementById("gaming_tips").style.color="white"; document.getElementById("title").style.background="rgb(20, 20, 20)"; document.getElementById("colorChange1").style.color="white"; document.getElementById("colorChange2").style.color="white"; document.getElementById("colorChange3").style.color="white"; document.getElementById("colorChange4").style.color="white"; document.getElementById("colorChange5").style.color="white"; document.getElementById("colorChange6").style.color="white"; document.getElementById("colorChange7").style.color="white"; document.getElementById("colorChange8").style.color="white"; document.getElementById("colorChange9").style.color="white"; document.getElementById("colorChange10").style.color="white"; document.getElementById("colorChange11").style.color="white";}window.onclick=function(event){if (!event.target.matches('.meny')){var dropdowns=document.getElementsByClassName("dropdown_content"); var i; for (i=0; i < dropdowns.length; i++){var openDropdown=dropdowns[i]; if (openDropdown.classList.contains('show')){openDropdown.classList.remove('show'); if (document.body.style.background !=="rgb(20, 20, 20)"){document.body.style.background="white"; document.getElementById("gaming_tips").style.color="white"; document.getElementById("title").style.background="rgb(20, 20, 20)"; document.getElementById("colorChange1").style.color="black"; document.getElementById("colorChange2").style.color="black"; document.getElementById("colorChange3").style.color="black"; document.getElementById("colorChange4").style.color="black"; document.getElementById("colorChange5").style.color="black"; document.getElementById("colorChange6").style.color="black"; document.getElementById("colorChange7").style.color="black"; document.getElementById("colorChange8").style.color="black"; document.getElementById("colorChange9").style.color="black"; document.getElementById("colorChange10").style.color="black"; document.getElementById("colorChange11").style.color="black";}else{document.body.style.background="rgb(40, 40, 40)"; document.getElementById("gaming_tips").style.color="white"; document.getElementById("title").style.background="rgb(20, 20, 20)"; document.getElementById("colorChange1").style.color="white"; document.getElementById("colorChange2").style.color="white"; document.getElementById("colorChange3").style.color="white"; document.getElementById("colorChange4").style.color="white"; document.getElementById("colorChange5").style.color="white"; document.getElementById("colorChange6").style.color="white"; document.getElementById("colorChange7").style.color="white"; document.getElementById("colorChange8").style.color="white"; document.getElementById("colorChange9").style.color="white"; document.getElementById("colorChange10").style.color="white"; document.getElementById("colorChange11").style.color="white";}}}}}}