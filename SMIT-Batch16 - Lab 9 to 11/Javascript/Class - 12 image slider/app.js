let sliderImages = document.getElementsByClassName("slider-images"); // []
let topImageIndex = 1; // 1
let isFirstClick = true;
setInterval(function () {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.zIndex = 0;
  }
  console.log(topImageIndex, sliderImages[topImageIndex]);

  sliderImages[topImageIndex].style.zIndex = 10;
  topImageIndex++;
  if (topImageIndex >= sliderImages.length) {
    topImageIndex = 0;
  }
}, 3000);

function swapeRight() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.zIndex = 0;
  }

  sliderImages[topImageIndex].style.zIndex = 10;
  topImageIndex++;
  if (topImageIndex >= sliderImages.length) {
    topImageIndex = 0;
  }
}

function swapeleft() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.zIndex = 0;
  }

  topImageIndex--; // 1
  if (topImageIndex <= 0 && isFirstClick) {
    topImageIndex = sliderImages.length - 1; // 4
  } else if (topImageIndex < 0) {
    topImageIndex = sliderImages.length - 1; // 4
  }
  isFirstClick = false;
  sliderImages[topImageIndex].style.zIndex = 10; // undefined
//   console.log(topImageIndex, sliderImages[topImageIndex]);
}
