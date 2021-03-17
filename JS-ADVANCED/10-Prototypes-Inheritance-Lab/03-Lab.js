function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Cat';
    classToExtend.prototype.toSpeciesString = function ()  {
       return `I am a ${this.species} ,  ${this.toString()}  asd ${this.eat()}`;
    }
}

class Animal {
    
    toString() {
        return 'mrrr';
    }

    eat() {
        return 'mqmmq';
    }
}

let cat = new Animal();

extendProrotype(Animal);

console.log(cat.species);
console.log(cat.toSpeciesString());
console.log(cat.eat());