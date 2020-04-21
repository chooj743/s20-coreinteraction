var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("bgSlides");
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 10000); // Change image every 5 seconds
}



/*const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	console.log(e);
	cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px")
})*/