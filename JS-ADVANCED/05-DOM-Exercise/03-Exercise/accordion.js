function toggle() {
    
    let extraElement = document.querySelector('#extra');

    if (extraElement.style.display != 'block') {
        extraElement.style.display = 'block';
        let divElement = document.createElement('div');
        divElement.classList.add('head');
        divElement.innerHTML = 'DOM Manipulations Exercise <span class="button" onclick="hide()">Less</span>';
        extraElement.prepend(divElement);
    }
}

function hide() {
    let extraElement = document.querySelector('#extra');

    if(extraElement.style.display == 'block') {
        extraElement.style.display = 'none';
        document.querySelector('#extra > .head').remove();
    }
}