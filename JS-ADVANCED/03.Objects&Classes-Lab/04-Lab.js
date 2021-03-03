function solve(input) {
  
    let inputParsedData = JSON.parse(input);

    let tableHeadings = Object.keys(inputParsedData[0]);

    let html = '<table><tr>';

    tableHeadings.forEach(heading => {
          
        html += `<th>${heading}</th>`;
    })

    html += '</tr>';

    inputParsedData.forEach(obj => {
      
        html += '<tr>'
        html += Object.values(obj).map(el => `<td>${el}</td>`).join('');
        html += '</tr>'
    })

    html += '</table>';

    console.log(html);
}

solve(
    [
        '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
    ]);
