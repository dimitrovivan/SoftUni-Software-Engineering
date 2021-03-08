function deleteByEmail() {
    
    let allEmails = document.querySelectorAll('tbody > tr > td:last-child');
    let inputEmailElement = document.querySelector('input[type="text"');
    let deleteEmail = inputEmailElement.value;
    inputEmailElement.value = '';

    let displayElement = document.querySelector('#result');
    
    Array.from(allEmails).forEach(email => {

        if(email.innerText == deleteEmail) {
            email.parentElement.remove();
            displayElement.innerText = 'Deleted';
        }
    });
}