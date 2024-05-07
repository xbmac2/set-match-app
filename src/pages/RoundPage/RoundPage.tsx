import { CardOnBoard } from "../../components/Card/Card";
import { Deck } from "../../components/Card/Deck";
import { generateAnswerKey } from "../../containers/Board/AnswerKey";
import Board from "../../containers/Board/Board";

// export const playerGuess: number[] = [];

export class Round {
  private board: CardOnBoard[];
  private answerKey: number[][];
  private isMatch: boolean;

  public constructor(board: CardOnBoard[]) {
    this.board = board;
    this.answerKey = generateAnswerKey(board);
    this.isMatch = false;
  }

  public getAnswerKey(): number[][] {
    return this.answerKey;
  }

  public setIsMatch(): void {
    this.isMatch = true;
  }
}

export class PlayerGuess {
  private guess: number[];

  public constructor() {
    this.guess = [];
  }

  private getGuess(): number[] {
    return this.guess;
  }

  private addToGuess(number: number): number[] {
    this.guess.push(number);
    return this.guess;
  }
}

export const playOneRound = (nineOnTheBoard: CardOnBoard[]) => {
  //accept player answers
  //const playerGuess = [];
  //clicking cards should push answer to player guess
  //score player answer
  //gyul opportunity
};

const RoundPage = () => {
  //set up the board, answers, and gyul boolean
  const deck = new Deck();
  const nineFromDeck = deck.shuffleAndGetNine();
  const nineOnTheBoard = nineFromDeck.map((card, index) => {
    return new CardOnBoard(card, index + 1);
  });

  return (
    <main>
      <Board boardCards={nineOnTheBoard} />
    </main>
  );
};

export default RoundPage;
