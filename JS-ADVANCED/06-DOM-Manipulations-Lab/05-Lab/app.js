function attachGradientEvents() {
    let resultElement = document.querySelector('#result');
    let gradientDiv = document.querySelector('#gradient');

    gradientDiv.addEventListener('click', (e) => {
        let offsetX = e.offsetX;

        let offsetXPercantage = `${Math.ceil(Number(offsetX)/3)}%`;

        resultElement.innerHTML = offsetXPercantage;
    })
}