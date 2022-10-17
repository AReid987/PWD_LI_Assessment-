class Deck {
  constructor() {
    // array to hold card objects
    this.deck = [];
    
    // array of suits
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    // array of card values
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
    // iterate over suits
    for (let suit in suits) {
      // iterate over values
      for (let value in values) {
        // create an object for each suit with each value
        const card = {suit: `${suits[suit]}`, value: `${values[value]}`}
        // add object to deck array
        this.deck.push(card)
      }
    }
  }

  // first shuffle deck in non biased way
  shuffleDeck() {
    // destructuring
    const { deck } = this; 
    // condition for loop and counter variable
    let m = deck.length, i;
    
    // for length of deck... 
    while(m) {
      i = Math.floor(Math.random() * m--);
      // swap two random cards
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this
  }

  pickTwoRandomCards() {
    // hold two random card
    const twoRandomCards = [];
    // shuffle deck
    this.shuffleDeck();
    // take last card
    const cardOne = this.deck.pop();
    // save card one
    twoRandomCards.push(cardOne);
    // shuffle again
    this.shuffleDeck();
    // take last card
    const cardTwo = this.deck.pop();
    // save card two
    twoRandomCards.push(cardTwo);
    
    return twoRandomCards
  }

  compareCards() {
    const randomCards = this.pickTwoRandomCards();
    const winner = randomCards[0].value > randomCards[1].value ? randomCards[0] : randomCards[1]
    console.log("two cards face off...");
   
    console.log(randomCards[0], " vs. ", randomCards[1])
   
    console.log("and the winner is: ", winner)
  }
}

const deckOne = new Deck();
console.log(deckOne.deck);
deckOne.compareCards();
// console.log(deckOne.deck)