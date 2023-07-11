var emailField = document.querySelector('#email');
var button = document.querySelector('#button');
var response = document.querySelector('#res');
var form = document.querySelector('form')

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return false
  }
  return true
}

button.addEventListener('click', function(e) {
  var email = emailField.value;
  if (email.value == ''){
    e.preventDefault()
  } else if (validateEmail(email)) {
    e.preventDefault()
    form.classList.add("error")
  } else {
    form.classList.remove("error")

  }
});