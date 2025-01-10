//To Tob Button
const TopButton = document.getElementById("ToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("ToTop").style.display = "block";
  } else {
    document.getElementById("ToTop").style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

TopButton.addEventListener("click", scrollToTop());

//Form

const button = document.getElementById("submit");

button.addEventListener("click", (event) => {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  event.preventDefault();
  console.log("Button clicked");
  console.log(name.value);
  console.log(email.value);
  console.log(message.value);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
