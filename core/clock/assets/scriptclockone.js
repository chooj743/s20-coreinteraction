

var text = document.getElementById("tick");
console.log(text)

var timing = [
	[2000, 4000, 9000, 5000, 5000
	, 5000, 5000, 5000, 5000, 5000
	, 1000, 1000, 1000, 1000
	, 1000, 1000, 1000, 1000, 1000, 1000, 1000 
	, 1000, 1000, 1000, 1000, 1000],
	[1000, 2000, 2500, 1000, 1000, 1000],
	[1000, 2000, 2500, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000, 1000,
		1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
	[1000, 2000, 2500, 1000, 1000, 1000, 1000, 1000]
];

var scenes = [
	["alarm buzzing", "gasps", "panting", "bed creaks", "door closes",
		"toilet flushes", "water running", "water splattering","water stops", "door opens", 
		"remote clicks", "static noise", "TV plays in the background", "indistinct chatter over TV", 
		"footsteps", "dishes clatter", "yawns", "fridge door opens and closes", "utensils clank", "remote clicks", "thud", 
		"floor creaks", "keys rattling", "zip fastening", "shoes thud", "doors slams"
	],
	["silence", "silence continues", "horn honks in distance", "truck reversing in distance", "silence", "silence continues"],
	["footsteps in distance", "key in lock", "doors open", "shoes thud", "keys rattling",
		"switch ticks", "door closes", "bag rustles", "laptop chimes", "music playing", "typing",
		"door buzz rings", "inaudible", "knock on door", "lock clicks", "door squeaks open",
		"objects clanging", "music stops abruptly", "glasses shattering", "breathing heavily", "floor creaking", "breahe shakily", "device dialing",
		"footsteps approaching quickens", "door opens loudly", "painting", "gun cocks", "muffled cries", "chuckles", "gunshots", "thud", "silence"
	],
	["silence continues", "siren wails in distance", "screaming", "people shouting", "silence", "silence continues", "birds chirping", "birds chirping continues"]
];



function subtitleContent(sceneIndex, actionIndex, subtitleELementA){
	subtitleELementA.innerHTML = "[" + scenes[sceneIndex][actionIndex] + "]"
}


text.innerHTML = "[" + "tick" + "]";



var currentScene = 0;
var currentAction = 0;

setInterval(function(){

	subtitleContent(currentScene, currentAction, text)

	if (currentAction < timing[currentScene].length - 1){

		currentAction = currentAction + 1;

	}else{
		currentAction = 0;
		currentScene = currentScene + 1;
	}

}, timing[currentScene][currentAction])



