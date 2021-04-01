(function registerUser() {

const registerBtn = document.querySelector('.registerBtn');

registerBtn.addEventListener('click', e => {
    const inputEmailElement = document.querySelector('.inputRegisterEmail');
    const inputPasswordElement = document.querySelector('.inputRegisterPassword');
    const loginForm = document.querySelector('.login-form');

    firebase.auth().createUserWithEmailAndPassword(inputEmailElement.value, inputPasswordElement.value)
        .then((userCredential) => {
            let user = userCredential.user;

            console.log(user);
            e.target.parentElement.classList.add("displayNone");
            loginForm.classList.remove("displayNone");
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(`Error: ${errorCode} , ${errorMessage}`);
        });

    inputEmailElement.value = '';
    inputPasswordElement.value = '';
})
})()