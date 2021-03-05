class Ticket {

    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}


function solve(objectArray,sortCriteria) {

    let flyObjects = [];

    objectArray.forEach(row => {

        let [destination, price, status] = row.split('|');

        let ticket = new Ticket(destination,price,status);

        flyObjects.push(ticket);
        
    });

    if (sortCriteria !== 'price') {
        flyObjects.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    } else {
        flyObjects.sort((a, b) => a.price - b.price);
    }
    

    return flyObjects;

      
}



solve(
    ['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)