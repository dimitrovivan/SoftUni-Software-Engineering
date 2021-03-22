function solve() {

    let avaiableCardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let avaiableCardSuits = {
        S: '\u2660', 
        H: '\u2665',
        D: '\u2666', 
        C: '\u2663',
    }

    class Card {

        constructor(cardFace,cardSuit) {

            this.cardFace = cardFace;
            this.cardSuit = cardSuit;
        }

        set cardFace(value) {
            
            if (!avaiableCardFaces.includes(value)) {
                 
                throw new Error('Error');
            }

            this._cardFace = value;
        }

        set cardSuit(value) {
              
            if (!Object.keys(avaiableCardSuits).includes(value)) {
                 
                throw new Error('Error');
            }

            this._cardSuit = value;
        }

        toString() {

            return `${this._cardFace}${avaiableCardSuits[this._cardSuit]}`
        }
    }

    return {
        Card,
    }

}


let cardFactory = solve();

let newCard = new cardFactory.Card('A','S');

console.log(newCard.toString());
