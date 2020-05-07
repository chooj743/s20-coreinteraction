window.addEventListener('DOMContentLoaded', function() {
  groupInteractions();
})


//global variables
var body = document.querySelector("body");
var core = document.getElementById("core");
var lab = document.getElementById("lab");
var others = document.getElementById("others");
var index = document.getElementById("index");
var container = document.getElementById("container");
         
        
function groupInteractions(){
  
  //question and close button
  var qButton = false;
  
  expand.addEventListener("click", function(){
    //console.log(qButton);
    if (container.classList.contains("open")){
      container.classList.remove ("open");
      container.innerHTML = '';
      qButton = false;
      
    }else{
      container.classList.add ("open");
      container.innerHTML = `<text>` + 'Human activity has impacted the globe in such a massive scale, imprints of it are starting to be left as permanent damage on earth.' + `</text>`;
      qButton = true; 
    }
  }) 