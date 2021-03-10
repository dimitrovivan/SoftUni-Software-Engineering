function solve() {
    
    let chooseBtn = document.querySelector('#dropdown');
    let ulElement = document.querySelector('#dropdown-ul');
    let boxElement = document.querySelector('#box');
    let firstColor = boxElement.style.backgroundColor;

    chooseBtn.addEventListener('click', (e) => {

        if(ulElement.style.display == 'none' || !ulElement.style.display) {

            ulElement.style.display = 'block'
        } else {
            
            ulElement.style.display = 'none';
            boxElement.style.backgroundColor = firstColor;
        }

    })

    ulElement.addEventListener('click', (e) => {
        
        let color = e.target.textContent;

        boxElement.style.backgroundColor = color;
    })
}