var imageSlide = document.getElementById("slider");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var index = 0;

var imgArr = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];


image1.addEventListener('click', newImage1);
image2.addEventListener('click', newImage2);
image3.addEventListener('click', newImage3);
image4.addEventListener('click', newImage4);
image1.style.color = "#7F7F7F";

function newImage1() {
  imageSlide.setAttribute("src", imgArr[0]);
  index = 1;
   image1.style.color = "#7F7F7F";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#E4E4E4";
}
function newImage2() {
  imageSlide.setAttribute("src", imgArr[1]);
  index = 2;
  image1.style.color = "#E4E4E4";
    image2.style.color = "#7F7F7F";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#E4E4E4";

}
function newImage3() {
  imageSlide.setAttribute("src", imgArr[2]);
  index = 3;
  image1.style.color = "#E4E4E4";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#7F7F7F";
    image4.style.color = "#E4E4E4";
}
function newImage4() {
  imageSlide.setAttribute("src", imgArr[3]);
  index = 1;
   image1.style.color = "#E4E4E4";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#7F7F7F";
}

function newImage() {
  imageSlide.setAttribute("src", imgArr[index]);
  
  if (index === 0){
    image1.style.color = "#7F7F7F";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#E4E4E4";
  } 
   if (index === 1){
    image1.style.color = "#E4E4E4";
    image2.style.color = "#7F7F7F";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#E4E4E4";
  } 
   if (index === 2){
    image1.style.color = "#E4E4E4";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#7F7F7F";
    image4.style.color = "#E4E4E4";
  } 
   if (index === 3){
    image1.style.color = "#E4E4E4";
    image2.style.color = "#E4E4E4";
    image3.style.color = "#E4E4E4";
    image4.style.color = "#7F7F7F";
  } 
  index++;
  if (index >= imgArr.length) index = 0;
}

setInterval(newImage, 5000);
