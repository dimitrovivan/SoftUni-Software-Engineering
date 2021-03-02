function solve(commands) {

    let resultArray = [];

    let counter = 0;
    commands.forEach(command => {

        counter++;

        if (command == 'add') {
            resultArray.push(counter);
        } else if (resultArray && command == 'remove') {
              resultArray.pop();
        }
    })

    resultArray.length > 0 ? console.log(resultArray.join('\n')) : console.log('Empty');
}

solve([]);