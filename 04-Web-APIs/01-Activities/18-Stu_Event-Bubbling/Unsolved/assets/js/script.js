// TODO: Which element is the following line of code selecting?
//This is creating a variable called carousel from the carouselbox from the HTML section line 16.
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
//This is creating a variable next from the HTML line 20.
//Creating a variable prev from the HTML line 17.
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0; //this is creating a variable called in index that has a value of 0. This tracks the position of the current images.
let currentImage;//this is creating a variable called currentImage, but currently has no value.

// this is creating a variable called images with an array with multiple links to images.
const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];
//this is going pulling the CSS style from the CSS file.
carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

//This is a function
function navigate(direction) {
  index = index + direction;// we are resigning the index 0 value to 1.
  if (index < 0) {
    index = images.length - 1;//3
  } else if (index > images.length - 1) {//index > 3
    index = 0;//reset back to the original image
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
//When I click on the image of the carousel, it takes me to a different site showing me the image. It is stored in the index array.
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // this is the next button.
  event.stopPropagation();// this makes it that only the next button works at a time.

  navigate(1);//this goes forward 1 image
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
