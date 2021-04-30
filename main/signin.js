const signUsername = document.getElementById("signUsername")
const signPassword = document.getElementById("signPassword")
const signButton = document.getElementById("signLogin")


function signChecker(){
  const signUsernameValue = signUsername.value.trim()
  const signPasswordValue = signPassword.value.trim()
  
  if(signUsernameValue === ''){
    setErrorFor(signUsername, 'Username cannot be blank')
  }else {
    setSuccessFor(signUsername)
  }

  if(signPasswordValue === ''){
    setErrorFor(signPassword, 'Password cannot be blank')
  }else if(signPasswordValue.length<8){
    setErrorFor(signPassword,'Password must be at least 8 characters long.')
  }
  else {
    setSuccessFor(signPassword)
  }
  const usernameControl = signUsername.parentElement
  const passwordControl = signPassword.parentElement
  if(!usernameControl.classList.contains('error') && !passwordControl.classList.contains('error')){
    setTimeout(function redirectPage(){
      window.location.href="todo.html"
    },300)
  }
}

// function for errors 
function setErrorFor(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-group error'
	small.innerText = message
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-group success'
}

signButton.addEventListener('click', signChecker)