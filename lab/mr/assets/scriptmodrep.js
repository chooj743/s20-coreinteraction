var myRootDiv = document.getElementById("square")
console.log("myRootDiv")

myRootDiv.insertAdjacentHTML('beforeend', `
		<div class="box-1"></div>
	`)

var degrees = 0;


	for (var i = 0; i < 50; i++) {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

		
		myRootDiv.insertAdjacentHTML('beforeend', `
			<div 
				class="box-1"
				style="transform:rotate(${degrees}deg);
						background-color: rgb(${r}, ${g}, ${b});"
			></div>
		`)

		degrees = degrees + 25;

	}



