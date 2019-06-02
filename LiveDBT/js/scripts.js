// Login Script
// compare localStorage to input
check = () => {

    // stored data
    let localName = localStorage.getItem('accName')
    let localPass = localStorage.getItem('accPass')
    let localEmail = localStorage.getItem('accEmail')

    // entered data from the login-form
    let inputUser = document.getElementById('inputUser')
    let inputPass = document.getElementById('inputPass')

    // check if stored data from register-form is equal to data from login form
    if ((inputUser.value == localName || inputUser.value == localEmail) && inputPass.value == localPass) {
        alert('You are being logged in.')
    } else {
        alert('ERROR: Username & Password Do Not Match!')
    }
}

// Signup Script
validate = () => {
    // Initial inputs
    let inputName = document.getElementById('inputName').value
    let inputLastName = document.getElementById('inputLastName').value
    let inputEmail = document.getElementById('inputEmail').value
    let inputEmailConfirm = document.getElementById('inputConfirmEmail').value
    let inputPass = document.getElementById('inputPassword').value
    let inputDOB = document.getElementById('inputDOB').value // Month
    let inputDOBDay = document.getElementById('inputDOBDay').value
    let inputDOBYear = document.getElementById('inputDOBYear').value
    let inputCity = document.getElementById('inputCity').value
    let inputState = document.getElementById('inputState').value

    let inputHuman = document.getElementById('inputHumanCheck').value

    if(inputHuman == "off") {
        alert('ERROR: This website is for humans only!')
    }
    else if (inputName == "" || inputLastName == "" || inputEmail == "" || inputEmailConfirm == "" || inputPass == "" || inputDOB == "" || inputDOBDay == "" || inputDOBYear == "" || inputCity == "" || inputState == "") {
        alert('Input CANNOT be left blank. Please fill in each of the question fields.')
    }
    else if(inputEmail != inputEmailConfirm) {
        alert('ERROR: Emails do not match! Please try again.')
    }
    else {
        console.log('Account created.')
    }

    store(inputName, inputLastName, inputEmail, inputPass, inputDOB, inputDOBDay, inputDOBYear, inputCity, inputState);
}

// storing input from register-form
store = (inputName, inputLastName, inputEmail, inputPass, inputDOB, inputDOBDay, inputDOBYear, inputCity, inputState) => {
    localStorage.setItem('accName', inputName)
    localStorage.setItem('accLastName', inputLastName)
    localStorage.setItem('accEmail', inputEmail)
    localStorage.setItem('accPass', inputPass)
    localStorage.setItem('accDOBM', inputDOB)
    localStorage.setItem('accDOBD', inputDOBDay)
    localStorage.setItem('accDOBY', inputDOBYear)
    localStorage.setItem('accCity', inputCity)
    localStorage.setItem('accState', inputState)
}
// saving notes in local storage
notes = () =>{
   let notes = document.getElementById("formControlNotes").value
    localStorage.setItem('notes', notes);
}