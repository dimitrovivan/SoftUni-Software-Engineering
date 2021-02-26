function roadRadar(speed, area) {
    let  motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let difference;
    let result = '';
    switch(area) {
      
        case 'motorway': {
            difference = speed - motorwayLimit;
            if(difference >= 1 && difference <= 20) {
                result = 'speeding'
            } else if(difference >= 21 && difference <= 40) {
                result = 'excessive speeding '
            } else if (difference > 40) {
                result = 'reckless driving ';
            }

            break;
        }

        case 'interstate': {
            difference = speed - interstateLimit;
            if(difference >= 1 && difference <= 20) {
                result = 'speeding'
            } else if(difference >= 21 && difference <= 40) {
                result = 'excessive speeding '
            } else if (difference > 40) {
                result = 'reckless driving ';
            }
            break;
        }
        

        case 'city': {
            difference = speed - cityLimit;
            if(difference >= 1 && difference <= 20) {
                result = 'speeding'
            } else if(difference >= 21 && difference <= 40) {
                result = 'excessive speeding '
            } else if (difference > 40) {
                result = 'reckless driving ';
            }
            break;
        }
       

        case 'residential': {
            difference = speed - residentialLimit;
            if(difference >= 1 && difference <= 20) {
                result = 'speeding'
            } else if(difference >= 21 && difference <= 40) {
                result = 'excessive speeding '
            } else if (difference > 40) {
                result = 'reckless driving ';
            }
            break;
        }
        
    }

    console.log(result);
}

roadRadar(61, 'residential');