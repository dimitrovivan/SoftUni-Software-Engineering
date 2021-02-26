function calcWalkTime(footSteps,footStepLengthInMeter, studentSpeedInKmh) {

     let metresToSchool = footSteps * footStepLengthInMeter;
     let metresPerSecond = studentSpeedInKmh*(1000/3600);
     let secondsToSchool = metresToSchool/metresPerSecond;
     let minutesRest = parseInt(metresToSchool/500);
     secondsToSchool += minutesRest*60

     let hours = 0;
     let minutes = 0;

    hours = Math.floor(secondsToSchool/3600);
    minutes = Math.floor(secondsToSchool/60);
    seconds = Math.floor(secondsToSchool%60);
     
     if(hours < 10) {
     console.log(`0${hours}:${minutes}:${seconds}`);
     } else {
        console.log(`${hours}:${minutes}:${seconds}`);
     }
}

calcWalkTime(4188, 0.60, 5);