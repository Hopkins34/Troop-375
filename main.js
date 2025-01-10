console.log("hello");

// Show button when scrolled down 100px

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("ToTop").style.display = "block";
  } else {
    document.getElementById("ToTop").style.display = "none";
  }
};

// Scroll to the top of the page

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
