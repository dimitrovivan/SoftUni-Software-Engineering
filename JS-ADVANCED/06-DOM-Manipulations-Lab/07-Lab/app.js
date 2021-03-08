function validate() {
    
    const regex = new RegExp('/^[a-z][a-z\d]+@[a-z]+\.[a-z]+/');

    let inputElement = document.querySelector('#email');

    inputElement.addEventListener('click', checkIfPass);

    console.log(inputElement);

    function checkIfPass() {
        let email = inputElement.value;

        inputElement.style.borderColor = regex.test(email) ? 'blue' : 'red';

        console.log(email);
        console.log(regex.test(email));

   }

    
}