function attachEvents() {

    //returns object of locations with code and name
    const locationURL = 'https://judgetests.firebaseio.com/locations.json';
    
    //base url for second layer fetch(upcoming weather data and daily weather data)
    const baseURL = 'https://judgetests.firebaseio.com/forecast/';
    
    let chosenLocationCode;
    
    let weatherSymbols = {
        Sunny: '&#x2600', // ☀
	    'Partly sunny': '&#x26C5', // ⛅
	    Overcast: '&#x2601', // ☁
	    Rain: '&#x2614', // ☂
	    Degrees: '&#176'  // °
    
    }
    
    const forecastParentElement = document.querySelector('#forecast');
    const currentWeatherElement = document.querySelector('#current');
    const upcomingWeatherElement = document.querySelector('#upcoming');

    

    const getWeatherBtn = document.querySelector('#submit');

    getWeatherBtn.addEventListener('click', () => {

    const locationInputElement = document.querySelector('#location');

    currentWeatherElement.lastChild.remove();
    upcomingWeatherElement.lastChild.remove();
     

        fetch(locationURL)
        .then(response => response.json())
        .then(locationsArray => {


            let chosenLocation = locationsArray.find(locObj => locObj.name == locationInputElement.value);
            chosenLocationCode = chosenLocation.code;

            let todayResponseData = fetch(`${baseURL}today/${chosenLocationCode}.json`).then(todayResponse => todayResponse.json());
            let upcomingResponseData = fetch(`${baseURL}upcoming/${chosenLocationCode}.json`).then(upcomingResponse => upcomingResponse.json());

            locationInputElement.value = '';

            Promise
            .all([todayResponseData, upcomingResponseData])
            .then(([todayWeatherData, upcomingWeatherData]) => {

                attachDataToCurrent(todayWeatherData);

                attachDataToUpcoming(upcomingWeatherData);

                forecastParentElement.style.display = 'block';
            })
            .catch(err => console.log('Error 2'))

            

        })
        .catch(err => console.log('Error occurred'))

        
    })


    function attachDataToUpcoming(data) {

           const forecastsInfoDivElement = createElement('div', 'forecasts-info');

           data.forecast.forEach(dayObj => {

            const spanUpcomingData = createElement('span', 'upcoming');
            const spanDataSymbol = createElement('span', 'symbol', weatherSymbols[dayObj.condition]);
            const spanDataTemp = createElement('span', 'forecast-data', `${dayObj.low}/${dayObj.high}`);
            const spanDataCondition = createElement('span', 'forecast-data', dayObj.condition);


            spanUpcomingData.appendChild(spanDataSymbol);
            spanUpcomingData.appendChild(spanDataTemp);
            spanUpcomingData.appendChild(spanDataCondition);

            forecastsInfoDivElement.appendChild(spanUpcomingData);

           })

            
           upcomingWeatherElement.appendChild(forecastsInfoDivElement);
                

    }


    function attachDataToCurrent(data) {

        const forecastsDivElement = createElement('div', 'forecasts');
                const spanConditionSymbol = createElement('span', 'condition symbol', weatherSymbols[data.forecast.condition]);
                const spanConditionData = createElement('span', 'condition');
                const spanDataTown = createElement('span', 'forecast-data', data.name);
                const spanDataTemp = createElement('span', 'forecast-data', `${data.forecast.low}/${data.forecast.high}`);
                const spanDataCondition = createElement('span', 'forecast-data', data.forecast.condition);

                forecastsDivElement.appendChild(spanConditionSymbol);

                spanConditionData.appendChild(spanDataTown);
                spanConditionData.appendChild(spanDataTemp);
                spanConditionData.appendChild(spanDataCondition);

                forecastsDivElement.appendChild(spanConditionData);

                currentWeatherElement.appendChild(forecastsDivElement);

    }


    function createElement(elementType, elementClass = '', elementValue = '') {

        let currElement = document.createElement(elementType);

        currElement.className = elementClass;

        currElement.innerHTML = elementValue;

        return currElement;
    }

}

attachEvents();