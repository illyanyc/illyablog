// resize header to size of browser window

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight / 3 + "px";
})

// set modal time delay before loading

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

function ProperGreeting()
{
  var hour = new Date().getHours();
  var greeting;
  if (hour < 12){greeting = "Good morning";}
  if (hour < 18){greeting = "Good afternoon";}
  else {greeting = "Good evening"}
  document.getElementById("greet").innerHTML = greeting;
}