function solve(name, age, weightInKg, heightInCm) {

    let BMI = Math.round(Number(weightInKg) / Math.pow((Number(heightInCm) / 100),2));

    let patient = {
        name,
        personalInfo: {
            age,
            weight: weightInKg,
            height: heightInCm,
        },
        BMI,
        status: check(),
    }

    if(patient.status == 'obese') {
        patient.recommendation = 'admission required';
    }

    console.log(patient);

    function check() {
        if(BMI <= 18.5) return 'underweight'
          else if (BMI < 25 && BMI > 18.5) return 'normal';
          else if (BMI < 30 && BMI > 25) return 'overweight';
          else if (BMI >= 30)  return 'obese';
       }
}

solve('Honey Boo Boo', 9, 57, 137);