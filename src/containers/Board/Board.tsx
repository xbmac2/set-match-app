import Card, { CardOnBoard } from "../../components/Card/Card";
import { Deck } from "../../components/Card/Deck";
import { generateAnswerKey } from "./AnswerKey";
import styles from "./Board.module.scss";

const Board = () => {
  const deck = new Deck();
  const myFirstNine = deck.shuffleAndGetNine();
  //myFirstNine.forEach((card) => console.log(card.getCardDescription()));

  //place the nine on the board ie. assign number ids
  const nineOnTheBoard = myFirstNine.map((card, index) => {
    return new CardOnBoard(card, index + 1);
  });
  nineOnTheBoard.forEach((card) => {
    console.log(card.getCardDescription(), card.getNumberId());
    //prints twice in the console, second print is correct
  });
  generateAnswerKey(nineOnTheBoard);
  return (
    <div className={styles.board}>
      {myFirstNine.map((card, index) => {
        return (
          <Card
            key={index}
            shape={card.getShape()}
            shapeColour={card.getShapeColour()}
            backgroundColour={card.getBackgroundColour()}
            numberId={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Board;
