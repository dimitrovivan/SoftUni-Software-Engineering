function getInfo() {
    
    let inputField = document.querySelector('#stopId');
    let busStopId = inputField.value;
    inputField.value = '';

    let stopNameDiv = document.querySelector('#stopName');
    let busesUlElement = document.querySelector('#buses');

    const url = `https://judgetests.firebaseio.com/businfo/${busStopId}.json`;

    const httpRequest = new XMLHttpRequest();


    httpRequest.addEventListener('loadend', function() {

        if(this.status.toString()[0] == 4) {
            stopNameDiv.innerHTML = 'Error';
            return;
        }
             
        let busStopData = JSON.parse(this.responseText);
        
        const buses = busStopData.buses;
        const busStopName = busStopData.name;

        stopNameDiv.innerHTML = busStopName;
        console.log(buses);
        busesUlElement.innerHTML = Object.keys(buses).reduce((acc,key) => {

            let currBuss = `<li>${key} arrives in ${buses[key]} minutes.</li>`

            return acc += currBuss;
        }, '')
    });

    httpRequest.open('GET',url);
    httpRequest.send();
    
}