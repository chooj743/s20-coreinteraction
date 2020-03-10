//date & time
var newDate = new Date();
console.log(newDate)

var myDate = new Date();
console.log(myDate.getHours() + ":" + myDate.getMinutes())

var text = document.getElementById("tick")

// starting points
var globalCurrentScene = 0; // corresponds to each subArray
var globalCurrentAction = 0; // corresponds to each item in the subArray

var ourHours = myDate.getHours(); //0 - 23
var ourMinutes = myDate.getMinutes(); //0 - 59
console.log(ourHours)


//STARTING CHECKPOITNS
//scene 1: Morning 6:30 till 8:00
if(ourHours === 6 && ourMinutes === 30){
	globalCurrentScene = 0;
	globalCurrentAction = 0;
}

//scene 2: RUSH HOUR 8:00 till 10:00
if(ourHours === 8 && ourMinutes === 10){
	globalCurrentScene = 1;
	globalCurrentAction = 0;
}

//scene 3: STILL 11:30 till 14:00
if(ourHours >= 11 && ourMinutes > 23){
	globalCurrentScene = 2;
	globalCurrentAction = 0;
}

//scene 4: RUSH HOUR 15:00 till 18:00
if(ourHours === 15){
	globalCurrentScene = 3;
	globalCurrentAction = 0;
}

//scene 5: ACTIVE 18:00 till 19:00
if(ourHours === 18){
	globalCurrentScene = 4;
	globalCurrentAction = 0;
}

//scene 6: ACTION 19:00 till 20:00
if(ourHours === 19){
	globalCurrentScene = 5;
	globalCurrentAction = 0;
}

//scene 7: AFTER ACTION 21:00 till 24:00
if(ourHours === 20){
	globalCurrentScene = 6;
	globalCurrentAction = 0;
}

//scene 8: STILL 5:00 till 
if(ourHours === 21){
	globalCurrentScene = 7;
	globalCurrentAction = 0;
}



//TIMING OF PAIRED SCENES
var timing = [
	[8000, 7000, 5000, 40000, 50000, 10000,
		600000, 50000, 5000, 180000, 1851000, 50000,
		10000, 13000, 4000, 10000,
		30000, 5000, 10000, 10000, 30000,

		5000, 180000, 900000, 30000,
		120000, 300000, 300000, 5000, 20000,
		120000, 1140000, 5000, 230000, 300000, 5000],
	[1320000, 1320000, 1320000, 1320000, 1320000],
	[3600000, 9000, 23000, 3780000, 28000],
	[60000, 7140000, 1140000, 60000],
	//>
	[1000, 2000, 2500, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
	[2000, 2500, 1000, 1000, 1000, 1000, 1000]
];

//SUBTITLE TEXTS
var scenes = [
	["alarm buzzing", "alarm buzzing continues", "gasps", "panting", "bed creaks", "door closes",
		"faucet running", "toilet flushes", "glassware tinkling", "faucet stops running", "water splattering", "door opens", 
		"footsteps", "faucet running", "faucet stops running", "electric stove beeps",
		"fridge door opens and closes", "yawns", "dishes clatter", "kettle hissing", "water pouring",

		"remote clicks", "TV plays in the background", "cereal crunches", "utensils clanking",
		"slurps loudly", "indistinct chatter over TV", "slips coffee", "remote clicks", "thud",
		"floor creaks", "keys rattling", "zip fastening", "shoes thud", "doors slams"
	],
	["horn honks in distance", "truck reversing in distance", "ties screech", "dog barking in distance", "siren wails in distance"],
	["inaudible", "telephone ringing", "telephone continues ringing", "telephone ringing stops", "indistinct chatter"],
	["tires squealing", "indistinct shouting in distance", "horn beeps", "indistinct coversations"],
//>
	["footsteps in distance", "key in lock", "doors open", "shoes thud", "keys rattling",
		"switch ticks", "door closes", "bag rustles", "laptop chimes", "music playing", "typing",
		"door buzz rings", "inaudible", "knock on door", "lock clicks", "door squeaks open",
		"objects clanging", "music stops abruptly", "glasses shattering", "breathing heavily", "floor creaking", "breahe shakily", "device dialing",
		"footsteps approaching quickens", "door opens loudly", "painting", "gun cocks", "muffled cries", "chuckles", "gunshots", "thud",
	],
	["siren wails in distance", "screaming", "people shouting", "silence", "silence continues", "birds chirping", "birds chirping continues"]
];


function subtitleContent(sceneIndex, actionIndex, subtitleELementA){
	console.log("action: ", scenes[sceneIndex][actionIndex])
	subtitleELementA.innerHTML = "[" + scenes[sceneIndex][actionIndex] + "]"

	//EACH SUBTITLE TO APPEAR FOR 5s DURATION
	if(timing[sceneIndex][actionIndex] > 5000){
		setTimeout(function(){
			subtitleELementA.innerHTML = ''
		}, 5000)
	}

	//TICKING WHEN SILENCE FOR MORE > 10s
	if(timing[sceneIndex][actionIndex] > 10000){
		
		// get total amount of time before next action
		var countDown = timing[sceneIndex][actionIndex];
		console.log("before " + countDown)
		// after a delay of 9 seconds, start ticking
		setTimeout(function(){
			// immediatly subtract the delay from our countdown (we want to get to 0 to know when to stop)
			countDown = countDown - 9000;
			console.log("after " + countDown)
			var showTick = true // the showTick toggles between showing and hiding the ticker
			// tick every second:
			var ticking = setInterval(function(){
				// every second, subtract an additional 1 second from our countdown
				countDown = countDown - 1000;

				if(countDown <= 0){
					// if our countdown has reached 0, stop ticking
					clearInterval(ticking)
				}
				// if showTick is true, show our ticker and swithc to false for next time
				if(showTick){
					subtitleELementA.innerHTML = "[" + "tick" + "]"
					showTick = false;
				}else{
					subtitleELementA.innerHTML = ""
					showTick = true;
				}
			}, 1000)

		}, 8000)
	}
}



//ENABLES SCENES TO FIRE IN ORDER
function delayedTime(currentScene, currentAction){
	// update our subtitle
	console.log("timing: ", timing[currentScene][currentAction])
	subtitleContent(currentScene, currentAction, text)

	setTimeout(function(){
		//after a certain amount of time, 
		// lets update our information
		if (currentAction < timing[currentScene].length - 1){
			currentAction = currentAction + 1;

		}else{
			currentAction = 0;
			currentScene = currentScene + 1;
		}

		//then, we run our function again with our updated information
		delayedTime(currentScene, currentAction)

	}, timing[currentScene][currentAction])
}




delayedTime(globalCurrentScene, globalCurrentAction)







