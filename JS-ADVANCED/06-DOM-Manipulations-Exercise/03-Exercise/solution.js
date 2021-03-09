function attachEventsListeners() {

    let daysElement = document.querySelector('#days');
    let hoursElement = document.querySelector('#hours');
    let minutesElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');

    document.querySelectorAll('input[type="button"')[0].addEventListener('click', () => calcSeconds(Number(daysElement.value)*86400));
    document.querySelectorAll('input[type="button"')[1].addEventListener('click', () => calcSeconds(Number(hoursElement.value)*3600));
    document.querySelectorAll('input[type="button"')[2].addEventListener('click', () => calcSeconds(Number(minutesElement.value)*60));
    document.querySelectorAll('input[type="button"')[3].addEventListener('click', () => calcSeconds(Number(secondsElement.value)));

    function calcSeconds(seconds) {
        daysElement.value = parseInt(seconds / 86400);
        hoursElement.value = parseInt(seconds / 3600);
        minutesElement.value = parseInt(seconds / 60);
        secondsElement.value = seconds;

    }
}