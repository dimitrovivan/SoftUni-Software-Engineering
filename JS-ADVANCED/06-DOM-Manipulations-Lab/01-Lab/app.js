function addItem() {
    let listElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');

    let inputText = inputElement.value;
    inputElement.value = '';

    if (inputText) {
    listElement.innerHTML += `<li>${inputText}</li>`;
    }
    
}