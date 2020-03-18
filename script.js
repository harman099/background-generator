var css = document.querySelector("h3");
var color1 = document.querySelector("input#color1");
var color2 = document.querySelector("input#color2");
var body = document.querySelector("body");

function setGradient(){
	body.style.background = "linear-gradient(to right, "+
	 color1.value +","
	+color2.value+")";	

	css.textContent = body.style.background + ";"; //adds text content
}

color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);