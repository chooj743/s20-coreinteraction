var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('tick');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

 var source = "../core/content/Tick.mp3"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;
