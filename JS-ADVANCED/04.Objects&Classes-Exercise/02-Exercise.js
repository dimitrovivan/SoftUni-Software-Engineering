function solve(input) {
          
    let parsedData = JSON.parse(input);

    let html = '<table>';

    parsedData.forEach(obj => {
        html += '<tr>';
        Object.values(obj).forEach(data => {
            html += `<td>${data}</td>`
        })

        html += '</tr>';
    });


    html += '</table>';

    console.log(html);
}


solve(
    [
     '[{"name":"Pesho","position":"Promenliva","salary":100000}',
     '{"name":"Teo","position":"Lecturer","salary":1000}',
     '{"name":"Georgi","position":"Lecturer","salary":1000}]'
    ]
)