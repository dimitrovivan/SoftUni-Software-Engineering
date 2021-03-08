function validate() {
    
    const regex = /^[a-z][a-z\d]+@[a-z]+\.[a-z]+/;

    let inputElement = document.querySelector('#email');

    inputElement.addEventListener('change', e => {

        let email = inputElement.value;

        if(regex.test(email)) {

            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');

        }

    });
}