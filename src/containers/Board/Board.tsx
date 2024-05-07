import { useEffect, useState } from "react";
import Card, { CardImage, CardOnBoard } from "../../components/Card/Card";
import { Deck } from "../../components/Card/Deck";
import { PlayerGuess, Round } from "../../pages/RoundPage/RoundPage";
import { generateAnswerKey } from "./AnswerKey";
import styles from "./Board.module.scss";
import { BoardState } from "./BoardState";

const Board = ({ boardCards }) => {
  const round = new Round(boardCards);
  const answers = round.getAnswerKey();
  //accept player answers
  const [guess, setGuess] = useState([]);
  useEffect(() => {
    console.log(guess);
    if (guess.length === 3) {
      guess.sort((a, b) => a - b);

      if (answers.includes(guess) === false) {
        ///this is an incorrect answer
      }

      //then if its correct answer...
      const index = answers.indexOf(guess);
      answers.splice(index, 1);
      //setGuess([]);
    }
  }, [guess]);

  useEffect(() => {
    console.log(answers, "remaining answers");
    if (answers.length === 0) {
      round.setIsMatch();
    }
  }, [answers]);
  return (
    <div className={styles.board}>
      {boardCards.map((card, index) => {
        return (
          <Card
            key={index}
            guess={guess}
            setGuess={setGuess}
            cardOnBoardObj={card}
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
