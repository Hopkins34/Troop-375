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
