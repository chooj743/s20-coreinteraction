var roofHeight = 1;
console.log(roofHeight)

var cl = document.getElementById("circle");
console.log(cl)

var circleHeight = 50;
var circleWidth = 50;

var sq = document.getElementById("square");
console.log(sq)

var ov = document.getElementById("oval");
console.log(ov)

var ovalBottom = 120;
var ovalHeight = 100;


setInterval (function(){
	//cl.style.borderTop = "solid " + roofHeight + "rem red";

	//If height of circle is still less than 200px, keep increasing it
	if (circleHeight < 550){
		cl.style.height  = circleHeight + "px";
		circleHeight = circleHeight + 1;
		//console.log(circleHeight);

		//Move(Trasnslate other objects to "grow" together with the circle)
		ov.style.bottom = ovalBottom + "px";
		ovalBottom = ovalBottom + 1;
	}	
	else if (ovalHeight < 200){
		ov.style.height  = ovalHeight + "px";
		ovalHeight = ovalHeight + 1;
	}
	
	//roofHeight = roofHeight + 1;

}, 100);





setInterval (function(){
	//cl.style.borderTop = "solid " + roofHeight + "rem red";

	//If height of circle is still less than 200px, keep increasing it
	if (circleWidth < 320){
		cl.style.width = circleWidth + "px";
		circleWidth = circleWidth + 1;
		//console.log(circleHeight);

		//Move(Trasnslate other objects to "grow" together with the circle)
		ov.style.bottom = ovalBottom + "px";
		ovalBottom = ovalBottom + 1;
	}	
	else if (ovalHeight < 200){
		ov.style.height  = ovalHeight + "px";
		ovalHeight = ovalHeight + 1;
	}
	
	//roofHeight = roofHeight + 1;
	}, 100);

