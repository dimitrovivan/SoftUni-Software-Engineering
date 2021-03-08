function focus() {
    let allInputText = document.querySelectorAll('input[type="text"');

    Array.from(allInputText).forEach(input => {

        input.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.setAttribute('class','focused');
        });
        
        input.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.removeAttribute('class');
        })
    })
}