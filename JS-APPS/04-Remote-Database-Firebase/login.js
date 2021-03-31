(function loginUser() {

    const loginBtn = document.querySelector('.loginBtn');

    loginBtn.addEventListener('click', e => {

        const inputEmailElement = document.querySelector('.inputLoginEmail');
        const inputPasswordElement = document.querySelector('.inputLoginPassword');
        const movieList = document.querySelector('.movie-list-wrapper');

        firebase.auth().signInWithEmailAndPassword(inputEmailElement.value, inputPasswordElement.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      e.target.parentElement.classList.add('displayNone');
      movieList.classList.remove('displayNone');

    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`Error: ${errorCode} , ${errorMessage}`);
    });

    inputEmailElement.value = '';
    inputPasswordElement.value = '';

    });
 
    

})();