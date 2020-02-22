var beesWax = new Object();
beesWax.name = "Bees Wax Paper";
beesWax.price = "6.99";
beesWax.category = "Cleaning & Storage";
beesWax.url = "imgs/beeswax.jpg";

var produceBags = new Object();
produceBags.name = "Produce Bags";
produceBags.price = "7.99";
produceBags.category = "Cleaning & Storage";
produceBags.url = "imgs/producebags.jpg";

var masonJar = new Object();
masonJar.name = "Mason Jar";
masonJar.price = "1.99";
masonJar.category = "Cleaning & Storage";
masonJar.url = "imgs/masonjar.jpg";

var sprayBottle = new Object();
sprayBottle.name = "Glass Spray Bottle";
sprayBottle.price = "5.99";
sprayBottle.category = "Cleaning & Storage";
sprayBottle.url = "imgs/spraybottle.jpg";

var dishBlock = new Object();
dishBlock.name = "Dish Washing Block";
dishBlock.price = "9.99";
dishBlock.category = "Cleaning & Storage";
dishBlock.url = "imgs/dishblock.jpg";

var shampoo = new Object();
shampoo.name = "Shampoo Bar";
shampoo.price = "3.99";
shampoo.category = "Health & Beauty";
shampoo.url = "imgs/shampoo.jpg";

var toothpaste = new Object();
toothpaste.name = "Toothpaste Bites";
toothpaste.price = "8.99";
toothpaste.category = "Health & Beauty";
toothpaste.url = "imgs/toothpaste.jpg";

var toothbrush = new Object();
toothbrush.name = "Bamboo Toothbrush";
toothbrush.price = "2.99";
toothbrush.category = "Health & Beauty";
toothbrush.url = "imgs/toothbrush.jpg";

var deoderant = new Object();
deoderant.name = "Zero Waste Deoderant";
deoderant.price = "4.99";
deoderant.category = "Health & Beauty";
deoderant.url = "imgs/deoderant.jpg";

var mascara = new Object();
mascara.name = "Zero Waste Mascara";
mascara.price = "10.99";
mascara.category = "Health & Beauty";
mascara.url = "imgs/mascara.jpg";

var items = [beesWax, produceBags, masonJar, sprayBottle, dishBlock, shampoo, toothpaste, toothbrush, deoderant, mascara];
var itemsSort = [beesWax, produceBags, masonJar, sprayBottle, dishBlock, shampoo, toothpaste, toothbrush, deoderant, mascara];


function displayItems(arrayOfItems){
    
    document.getElementById("content-contain").innerHTML="";
    for (i in arrayOfItems){
        document.getElementById("content-contain").innerHTML +=
            '<div class = "card"> <div class = "item-description">' + arrayOfItems[i].name + '</div><img class="item-img" src = "' + arrayOfItems[i].url + '"><div class="item-description">$' +  arrayOfItems[i].price + '</div></div>';
    }
}

function sortChange(){
    var selection = document.getElementById("sortType").value;
    var healthList = [];
    var cleanList = [];
    
    if (selection === ""){
        displayItems(items);
    }
    
    if (selection === "name"){
        itemsSort.sort(function(a,b){return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
        displayItems(itemsSort);
    }
                         
    if (selection === "price"){
        itemsSort.sort(function(a,b){return a.price - b.price});
        displayItems(itemsSort);
    }                     
    
    if (selection === "health"){
        for (itemNumber = 0; itemNumber < items.length; itemNumber ++){
            if (items[itemNumber].category === "Health & Beauty"){
                healthList.push(items[itemNumber]);
            }
        }
        displayItems(healthList);
    }   
    
    if (selection === "cleaning"){
        for (itemNumber = 0; itemNumber < items.length; itemNumber ++){
            if (items[itemNumber].category === "Cleaning & Storage"){
                cleanList.push(items[itemNumber]);
            }
        }
        displayItems(cleanList);
    }
}

displayItems(items);