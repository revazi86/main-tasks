const form = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById("checkbox")


function inputsChecker(){
  // getting values from inputs 
  const nameValue =  firstName.value.trim()
  const surnameValue = lastName.value.trim()
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  if(nameValue === ''){
    // for error 
    setErrorFor(firstName, 'First Name cannot be blank');
  }else if(!isName(nameValue)){
    setErrorFor(firstName, 'Use only letters')
  }
  else {
    // for success
    setSuccessFor(firstName);
  }

  if(surnameValue === ''){
    // for error 
    setErrorFor(lastName, 'Last Name cannot be blank');
  }else if(!isSurname(surnameValue)){
    setErrorFor(lastName, 'Use only letters')
  }
  else {
    // for success
    setSuccessFor(lastName);
  }

  if(usernameValue === ''){
    // for error 
    setErrorFor(username, 'Username cannot be blank');
  }
  else {
    // for success
    setSuccessFor(username);
  }

  if(emailValue === ''){
    // for error 
    setErrorFor(email, 'Email cannot be blank');
  }else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email')
  }else {
    // for success
    setSuccessFor(email);
  }
  if(passwordValue === ''){
    // for error 
    setErrorFor(password, 'Password cannot be blank');
  }else if(passwordValue.length<8){
    setErrorFor(password,'Password must be at least 8 characters long.')
  }else {
    // for success
    setSuccessFor(password);
  }
  if(password2Value === ''){
    // for error 
    setErrorFor(password2, 'Confirm Password cannot be blank');
  }else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Passwords Do Not Match')
  }
  else {
    // for success
    setSuccessFor(password2);
  }

  if(checkbox.checked == true){
    const checkboxControl = checkbox.parentElement
    checkboxControl.className = 'checkbox-group success'
  }
  else { 
    const checkboxControl = checkbox.parentElement
    checkboxControl.className = 'checkbox-group error'
  }
 
  const inputs = document.getElementsByClassName("form-group")
  const inputArr = Array.from(inputs)

  const arr = []

  inputArr.forEach((input) => {
    if(input.classList.contains('error')){
      arr.push(input)
    }
  }
  )
  if (arr.length === 0 && checkbox.checked == true){
    window.location.href = "todo.html"
  }
}


// function for errors 
function setErrorFor(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-group error'
	small.innerText = message
}

// Function for success

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-group success'
}

// function for email validation

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(firstName){
  return /^[A-Za-z]+$/.test(firstName)
}
function isSurname(lastName){
  return /^[A-Za-z]+$/.test(lastName)
}

const button = document.getElementById("login")
button.addEventListener('click' , inputsChecker)