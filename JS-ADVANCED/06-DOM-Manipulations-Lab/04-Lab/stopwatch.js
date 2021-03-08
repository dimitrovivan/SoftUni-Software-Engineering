function stopwatch() {
    
    let startButton = document.querySelector('#startBtn');
    let stopButton = document.querySelector('#stopBtn');
    let timeElement = document.querySelector('#time');

    let myInterval;

    startButton.addEventListener('click', onClickTimeGo);
    stopButton.addEventListener('click', onClickTimeStop);


    function onClickTimeGo(e) {
        timeElement.innerText = '00:00';

        stopButton.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', 'true');
        
        myInterval = setInterval(() => {
            time = timeElement.innerText;
            let [minutes,seconds] = time.split(':').map(x => Number(x));
            
            seconds++;

            if(seconds > 59) {
                seconds -= 59;
                minutes += 1;
            }
            
        timeElement.innerHTML = `${minutes = minutes < 10 ? `0${minutes}` : minutes}:${seconds = seconds < 10 ? `0${seconds}`: seconds}`;
       
    },1000)

    }

    function onClickTimeStop(e) {

        clearInterval(myInterval);
        startButton.removeAttribute('disabled');
        e.currentTarget.setAttribute('disabled', 'true');
        
    }
}