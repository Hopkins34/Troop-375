//To Tob Button
const TopButton = document.querySelector('#ToTop');

window.onscroll = () =>  {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    ToTop.style.display = "block";
  } else {
    ToTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

TopButton.addEventListener("click", scrollToTop());

const hero = document.querySelector('.Hero');
const images = ['Hike.png', 'North.png', 'Philmont.jpg', 'Hero.png'];
let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(Images/${images[index]})`;
}

setInterval(changeBackground, 5000);
