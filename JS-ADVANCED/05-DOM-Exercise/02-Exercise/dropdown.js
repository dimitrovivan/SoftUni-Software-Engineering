function addItem() {
    
    let inputTextElement = document.querySelector('#newItemText');
    let inputValueElement = document.querySelector('#newItemValue');
    let inputText = document.querySelector('#newItemText').value;
    let inputValue = document.querySelector('#newItemValue').value;

    inputTextElement.value = '';
    inputValueElement.value = '';

    let optionElement = document.createElement('option');
    optionElement.innerHTML = inputText;
    optionElement.setAttribute('value',inputValue);

    let parentSelectElement = document.querySelector('#menu');
    parentSelectElement.appendChild(optionElement);
}