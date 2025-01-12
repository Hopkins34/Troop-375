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

//Form

const form = document.querySelector("#form");

form.addEventListener("submit", e => {

  e.preventDefault();

  console.clear();
  console.log("Name:", form.name.value);
  console.log("Email:", form.email.value);
  console.log("Message:", form.message.value);

  document.form.name.value = "";
  document.form.email.value = "";
  document.form.message.value = "";

});

form.name.addEventListener('keyup', e => {

  namePattern = /^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?: [A-Za-z]+(?:['-]?[A-Za-z]+)*)*$/

  if(form.name.value == '') {
    form.name.style.backgroundColor = ''
  } else {
    if(namePattern.test(e.target.value)) {
      form.name.style.backgroundColor = 'lightGreen'
    } else {
      form.name.style.backgroundColor = 'coral'
    }
  }

});

form.email.addEventListener('keyup', e => {

  emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/

  if (form.email.value == '') {
    form.email.style.backgroundColor = ''
  } else {
    if (emailPattern.test(e.target.value)) {
      form.email.style.backgroundColor = 'lightGreen'
    } else {
      form.email.style.backgroundColor = 'coral'
    }
  }

});
