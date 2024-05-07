import { CardOnBoard } from "../../components/Card/Card";

export class BoardState {
  private cardsOnBoard: CardOnBoard[];
  private selectedCards: CardOnBoard[];

  public constructor(cardsOnBoard: CardOnBoard[]) {
    this.cardsOnBoard = cardsOnBoard;
    this.selectedCards = [];
  }

  public getCardsOnBoard(): CardOnBoard[] {
    return this.cardsOnBoard;
  }

  public getSelectedCards(): CardOnBoard[] {
    return this.selectedCards;
  }

  public setSelectedCards(cards: CardOnBoard): void {
    this.selectedCards.push(cards);
  }

  public printSelectedCards(): void {
    console.log("this method is working");
    if (this.selectedCards.length === 0) {
      console.log("no selected cards");
    }
    this.selectedCards.forEach((card) => console.log(card.getNumberId));
  }

  public clearSelectedCards(): void {
    this.selectedCards = [];
  }
}
