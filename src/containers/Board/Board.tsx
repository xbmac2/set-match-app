import Card from "../../components/Card/Card";
import { Deck } from "../../components/Card/Deck";
import styles from "./Board.module.scss";

const Board = () => {
  const deck = new Deck();
  // // deck.printDeck();
  const myFirstNine = deck.shuffleAndGetNine();
  myFirstNine.forEach((card) => console.log(card.getCardDescription()));
  return (
    <div className={styles.board}>
      {myFirstNine.map((card, index) => {
        return (
          <Card
            key={index}
            shape={card.getShape()}
            shapeColour={card.getShapeColour()}
            backgroundColour={card.getBackgroundColour()}
          />
        );
      })}
    </div>
  );
};

export default Board;
