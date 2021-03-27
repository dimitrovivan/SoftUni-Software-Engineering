function solve() {

    

    const spanInfoElement = document.querySelector('.info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let nextStopId = 'depot';
    let currStopName = '';
    let url = `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`

    function depart() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener('loadend', function () {
            
            departBtn.setAttribute('disabled', 'true');


            let busStopData = JSON.parse(this.responseText);
            if (!busStopData) {
                spanInfoElement.innerHTML = 'Error';
                return;
            }
            currStopName = busStopData.name;
            spanInfoElement.innerHTML = `Next stop ${currStopName}`;
            console.log(busStopData.next);

            nextStopId = busStopData.next;
            arriveBtn.removeAttribute('disabled');



        })

        httpRequest.open('GET', url);
        httpRequest.send();

    }

    function arrive() {

        spanInfoElement.innerHTML = `Arriving at ${currStopName}`;
        
        arriveBtn.setAttribute('disabled', 'true');

        departBtn.removeAttribute('disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();