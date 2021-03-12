function solve(jsonData, criteria) {

  let employees = JSON.parse(jsonData);

  let filtredEmloyees =  employees.filter(isValid);
  
  Object.keys(filtredEmloyees).forEach((key,index) => {
      console.log(`${index++}. ${filtredEmloyees[key].first_name} ${filtredEmloyees[key].last_name} - ${filtredEmloyees[key].email}`);
  });

  function isValid(obj) {

    if (criteria == 'all') {

        return true;

    } else {
        let [key, value] = criteria.split('-');

        return obj[key] == value;
  } 
}
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)

