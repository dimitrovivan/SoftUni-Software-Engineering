function solve() {

   class Balloon {

       constructor(color, gasWeight) {
           this.color = color;
           this.gasWeight = gasWeight;
       }

   }

   class PartyBalloon extends Balloon {

       constructor(color, gasWeight, ribbonColor, ribbonLength) {
           super(color,gasWeight);
           this.ribbon = {color: ribbonColor, length: ribbonLength};
       }

   }


   class BirthdayBalloon extends PartyBalloon {

    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
        super(color,gasWeight,ribbonColor, ribbonLength);
        this.text = text;
    }
}

   return {
       Balloon,
       PartyBalloon
   }

}

let clasContainer = solve();

let partyBalloon1 = new clasContainer.PartyBalloon('blue', 200, 'red', 20);
console.log(partyBalloon1);