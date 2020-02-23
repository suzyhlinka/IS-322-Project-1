var currentImage = 1;

runSlideshow();

function runSlideshow(){
    if (currentImage > 4){
        currentImage = 1;
    }
    if (currentImage == 1){
        document.getElementById("img1").style.display = "block"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img3").style.display = "none"
        document.getElementById("img4").style.display = "none"
    }
    if (currentImage == 2){
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "block"
        document.getElementById("img3").style.display = "none"
        document.getElementById("img4").style.display = "none"
    }
    if (currentImage == 3){
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img3").style.display = "block"
        document.getElementById("img4").style.display = "none"
    }
    if (currentImage == 4){
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img3").style.display = "none"
        document.getElementById("img4").style.display = "block"
    }
    
    currentImage ++;
    setTimeout(runSlideshow, 4000);
}