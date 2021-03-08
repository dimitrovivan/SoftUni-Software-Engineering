function addItem() {
    let listElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newText');

    let inputText = inputElement.value;
    inputElement.value = '';

    if (inputText) {
    listElement.innerHTML += `<li>${inputText} <span class="delete" style='color: red'>[delete]</span></li>`;

    let spanDeleteElement = document.querySelector('.delete');
    spanDeleteElement.addEventListener('click', (e) => {
          e.currentTarget.remove();
    })
    }
    
}