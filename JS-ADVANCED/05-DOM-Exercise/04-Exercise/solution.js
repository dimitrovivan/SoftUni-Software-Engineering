function solve() {

    let buttonElement = document.querySelector('#exercise button[type="button"');

    buttonElement.addEventListener('click', () => {

        let inputElement = document.querySelector('#exercise input[type="text"');
        let student = inputElement.value;
        let firstLetter = student[0].toUpperCase();

        inputElement.value = '';

        let liElements = document.querySelectorAll('li');

        let alpMark = {};
        for (let index = 65; index <= 90; index++) {
            alpMark[String.fromCharCode(index)] =  index-65;
        }

        liElements[alpMark[firstLetter]].innerHTML += 
                    liElements[alpMark[firstLetter]].innerHTML ? `, ${student}` : `${student}`;
  
    });
}