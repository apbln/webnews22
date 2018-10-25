// JavaScript Document app.js
// @author Al Brown


/*  Details View */ 

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("cards");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < img.length; i++) {
	
img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};

/* Like - Buttons liked/unliked */ 

var k;
var like = document.getElementsByClassName("like");
for (var k = 0; k < like.length; k++) {

    like[k].onclick = function (){
				if(this.style.backgroundColor === "green"){
				this.style.backgroundColor = "";
				}
				else{
				this.style.backgroundColor = "green";
				}
	};
}