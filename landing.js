var currentImage = 0;
var images = ["/imgs/beeswax.jpg", "/imgs/deoderant.jpg", "/imgs/masonjar.jpg", "/imgs/mascara.jpg"];

runSlideshow();

function runSlideshow(){
    if (currentImage >= images.length){
        currentImage = 0;
    }
    
    document.getElementById("gallery").innerHTML = "<img class='slideshow' src='"+images[currentImage]+"'>";
    
    currentImage ++;
    setTimeout(runSlideshow, 4000);
}