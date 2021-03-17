function Figure(units = 'cm') {

    this.units = units;
}

Figure.prototype.changeUnits = function(value) {

    let previousUnit = this.units;
    
    this.units = value != this.units ? value : this.units;

    if(previousUnit != this.units) {

    switch(this.units) {

        case 'mm': this.radius *= 10; break;
        case 'm': this.radius /=10; break;
    }
}

}

function Circle(radius) {

    Figure.call(this);

    this.radius = radius;

    this.area = () => {
        
        return this.radius**2 * Math.PI;

    }

    this.toString = () => {

        return `Figures units: ${this.units} Area: ${this.area()} - radius: ${this.radius}`;
    }
}

Circle.prototype = Object.create(Figure.prototype);




let c = new Circle(5);
console.log(c.area()); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

c.changeUnits('mm');
console.log(c.area()); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
