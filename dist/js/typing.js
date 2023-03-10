const images = [
  {src: '/dist/image/image1.jpg', text: 'Education is the best legacy we can leave behind.', title: ''},
  {src: '/dist/image/image2.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
  {src: '/dist/image/image3.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
  {src: '/dist/image/image4.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
  {src: '/dist/image/image5.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
  {src: '/dist/image/image6.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
  {src: '/dist/image/image7.jpg', text: 'A town hall different from bala blu, blue blu bulaba.', title: ''},
];


let slideCounter = 0;
const imgLen = images.length - 1;

const img = this.document.createElement('img')
const slideText = document.querySelector('.carousel-content')
const showCase = document.querySelector('.show')
img.setAttribute('src', images[slideCounter].src)
img.setAttribute('class', 'image')
img.setAttribute('alt', 'carousel picture')

window.addEventListener('load', function() {
    const carousel = this.document.querySelector('.carousel')
    carousel.append(img)
    slideText.innerHTML = images[slideCounter].text
});

document.getElementById('nextSlide').onclick =function nextSlide() {
    if(slideCounter < imgLen) {
        slideCounter++;
        img.setAttribute('src', images[slideCounter].src)
    } else {
        slideCounter = 0;
    };
}
document.getElementById('prevSlide').onclick = function prevSlide() {
    if(!slideCounter > imgLen || slideCounter !== 0) {
        slideCounter--;
        img.setAttribute('src', images[slideCounter].src)
    } else {
        slideCounter = imgLen;
    };
}



const harmburger = document.querySelector('#harmburger');
const menus = document.querySelector('#navigation');
harmburger.onclick = function (e) {
  menus.classList.toggle('hidden');
};
window.addEventListener('resize', function (e) {
  let wsize = this.window.screen;
  if (400 < wsize.width) {
    console.log(wsize.width);
    menus.classList.remove('hidden');
  }
  console.log(e.target.classList);
});