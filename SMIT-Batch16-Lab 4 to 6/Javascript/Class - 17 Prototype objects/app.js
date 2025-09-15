// function Car(color) {
//     this.model = "Toyota"
//     this.color = color
// }

// let carObj = new Car("Black");

// Car.prototype.price = "900000";
// Car.prototype.cancelPlan = true;
// Car.prototype.greetPossibleOwner = function (userName) {
//     console.log("Welcome " + userName)
// };
// console.log(carObj)

// let carObj = new Car("Black");
// let carObj1 = new Car("White");
// let carObj2 = new Car("Brown");

// carObj1.price = "800000";
// carObj2.cancelPlan = false;

// console.log(carObj.greetPossibleOwner("Talal"), carObj1, carObj2);
// console.log(carObj1.hasOwnProperty("model"));

// console.log(document.referrer)

// console.log(location.hash);

// let images = document.getElementById("first")
 
 
// function forward() {
// images.setAttribute("src","https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg")
// }
// function backward() {
// images.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/026/992/343/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg")
// }



let silderImages = document.getElementsByClassName("slider-images");
let topImageIndex = 1;
let isFirstClick = true;


setInterval(function () {
    for(let i = 0; i < silderImages.length; i++) {
        silderImages[i].style.zIndex = 0;
    }

    console.log(topImageIndex, silderImages[topImageIndex]);
    
    silderImages[topImageIndex].style.zIndex = 10;
    topImageIndex++;
    
    if (topImageIndex >= silderImages.length) {
        topImageIndex = 0;
    }
    
}, 3000);


function swapeRight () {
    for(let i = 0; i < silderImages.length; i++) {
        silderImages[i].style.zIndex = 0;
    }
    
    silderImages[topImageIndex].style.zIndex = 10;
    topImageIndex++;
    
    if (topImageIndex >= silderImages.length) {
        topImageIndex = 0;
    }
}

function swapeLeft () {
    for(let i = 0; i < silderImages.length; i++) {
        silderImages[i].style.zIndex = 0;
    }
    
    topImageIndex--; // 1, 4
    
    if (topImageIndex <= 0 && isFirstClick) {
        topImageIndex = silderImages.length-1; // 4
    } else if (topImageIndex < 0) {
        topImageIndex = silderImages.length-1; // 4
    }
    isFirstClick = false;

    silderImages[topImageIndex].style.zIndex = 10; // 3
    console.log(topImageIndex, silderImages[topImageIndex]);
}