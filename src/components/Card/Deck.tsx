import {
  CardImage,
  cardBackgroundColours,
  cardShapeColours,
  cardShapes,
} from "./Card";

export class Deck {
  private cards: CardImage[]; //FINAL?

  public constructor() {
    this.cards = Deck.buildCardImageArr();

    //Deck.cards = cards;
  }

  //method that builds deck then passes it to constructor
  public static buildCardImageArr(): CardImage[] {
    const cardImageArr = [];

    for (let i = 0; i < cardBackgroundColours.length; i++) {
      for (let j = 0; j < cardShapeColours.length; j++) {
        for (let k = 0; k < cardShapes.length; k++) {
          const card = new CardImage(
            cardShapes[k],
            cardShapeColours[j],
            cardBackgroundColours[i]
          );
          cardImageArr.push(card);
        }
      }
    }
    return cardImageArr;
    // cardImageArr.forEach((card) => {
    //   console.log(card.getCardDescription());
    // });
  }

  //method to show deck in console
  public printDeck(): void {
    this.cards.forEach((card) => {
      console.log(card.getCardDescription());
    });
  }

  //method that shuffles the deck and draws nine cards
  public shuffleAndGetNine(): CardImage[] {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    return this.cards.slice(0, 9);
  }
}
