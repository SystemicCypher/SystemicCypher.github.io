window.addEventListener("DOMMouseScroll", scrollHandler, false);

function show(location){
	document.getElementById(location).style.visibility = "visible";
	var new_attr = document.getElementById(location).getAttribute("class");
	new_attr = new_attr + " fade-in";
	document.getElementById(location).setAttribute("class", new_attr);
}

function hide(location){
	document.getElementById(location).style.visibility = "hidden";
}

function scrollHandler(e){
	var e = window.Event || e;
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	
    console.log(delta);
	show('inter'); 
	show('ml'); 
	show('compsec');
}
