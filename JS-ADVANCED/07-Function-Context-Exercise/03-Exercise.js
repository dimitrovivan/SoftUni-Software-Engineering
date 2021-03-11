class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(obj) {

        if((typeof obj).toLowerCase() != 'object') {
            return new Hex(this.value + obj);
        } else {
            return new Hex(this.value + obj.value);
            
        }
       
    }

    minus(obj) {

        if((typeof obj).toLowerCase() != 'object') {
            return new Hex(this.value - obj);
        } else {
            return new Hex(this.value - obj.value);
            
        }
       
    }
}


let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
