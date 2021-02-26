function printStars(starRows = 5) {

    let result = '';

    for (let i = 0; i < starRows; i++) {
        for (let j = 0; j < starRows; j++) {
            result += '* ';
        }

        result +='\n';
    }

    console.log(result.trim());
}

printStars(1);