var myRootDiv = document.getElementById("square")
console.log("myRootDiv")

myRootDiv.insertAdjacentHTML('beforeend', `
		<div class="box"></div>
	`)

var degrees = 0;

setInterval(function(){

	for (var i = 0; i < 50; i++) {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

		
		myRootDiv.insertAdjacentHTML('beforeend', `
			<div 
				class="box"
				style="transform:rotate(${degrees}deg);
						background-color: rgb(${r}, ${g}, ${b});"
			></div>
		`)

		degrees = degrees + 25;
	}

}, 1000)






var myOvals = document.querySelectorAll("oval")
console.log("myOvals")

myRootDiv.insertAdjacentHTML('beforeend', `
		<div class="box"></div>
	`)

var degrees = 0;

setInterval(function(){

	for (var i = 0; i < 50; i++) {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

		
		myRootDiv.insertAdjacentHTML('beforeend', `
			<div 
				class="box"
				style="transform:rotate(${degrees}deg);
						background-color: rgb(${r}, ${g}, ${b});"
			></div>
		`)

		degrees = degrees + 5;
	}

}, 1000)




/*


var red = 255;
var green = 0;
var blue = 0;

var towardsBlue = true;


var circle = document.getElementById("oval");

setInterval(function(){
	circle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	if(towardsBlue == true){
		blue = blue + 40;
		red = red - 40;

	}else{
		blue = blue - 40;
		red = red + 40;
	}

	if(blue >= 255 && red <= 0){
		towardsBlue = false;

	}else if(red >= 255 && blue <= 0){
		towardsBlue = true;
	}

	}, 500)



*/






