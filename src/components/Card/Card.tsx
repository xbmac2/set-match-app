import { useState } from "react";
import styles from "./Card.module.scss";
import { PlayerGuess, playerGuess } from "../../pages/RoundPage/RoundPage";

export const cardShapes = ["square", "circle", "triangle"];
export const cardShapeColours = ["red", "blue", "yellow"];
export const cardBackgroundColours = ["white", "black", "grey"];

export class CardImage {
  private shape: string;
  private shapeColour: string;
  private backgroundColour: string;

  public constructor(
    shape: string,
    shapeColour: string,
    backgroundColour: string
  ) {
    this.shape = shape;
    this.shapeColour = shapeColour;
    this.backgroundColour = backgroundColour;
  }

  public getShape(): string {
    return this.shape;
  }

  public getShapeColour(): string {
    return this.shapeColour;
  }

  public getBackgroundColour(): string {
    return this.backgroundColour;
  }

  public getCardDescription(): string {
    return this.shapeColour + " " + this.shape + " " + this.backgroundColour;
  }
}

//Card in Play will have a number id; inherits card class
export class CardOnBoard extends CardImage {
  private numberId: number;

  public constructor(cardImage: CardImage, numberId: number) {
    super(
      cardImage.getShape(),
      cardImage.getShapeColour(),
      cardImage.getBackgroundColour()
    );
    this.numberId = numberId;
  }

  public getNumberId(): number {
    return this.numberId;
  }
}

export interface CardProps {
  shape: string;
  shapeColour: string;
  backgroundColour: string;
  numberId: number;
  cardOnBoardObj: CardOnBoard;
  //playerGuess: PlayerGuess;
  guess: number[];
  setGuess: (value: any) => unknown;
}

const Card = ({
  guess,
  setGuess,
  cardOnBoardObj,
  shape,
  shapeColour,
  backgroundColour,
  numberId,
}: CardProps) => {
  //sleceted state for giving answer
  const [isSelected, setIsSelected] = useState(false);
  //rendering divs
  let requiredShapeStyle = undefined; //null?
  let requiredShapeColourStyle = undefined; //null?
  let requiredBackgroundColourStyle = undefined; //null?
  let requiredMaskStyle = undefined; //null?

  switch (shape) {
    case "square":
      requiredShapeStyle = styles.square;
      break;
    case "circle":
      requiredShapeStyle = styles.circle;
      break;
    case "triangle":
      requiredShapeStyle = styles.triangle;
      break;
  }

  switch (shapeColour) {
    case "red":
      requiredShapeColourStyle = styles.red;
      break;
    case "blue":
      requiredShapeColourStyle = styles.blue;
      break;
    case "yellow":
      requiredShapeColourStyle = styles.yellow;
      break;
  }

  switch (backgroundColour) {
    case "white":
      requiredBackgroundColourStyle = styles.white_background;
      requiredMaskStyle = styles.triangle_mask_white;
      break;
    case "black":
      requiredBackgroundColourStyle = styles.black_background;
      requiredMaskStyle = styles.triangle_mask_black;
      break;
    case "grey":
      requiredBackgroundColourStyle = styles.grey_background;
      requiredMaskStyle = styles.triangle_mask_grey;
      break;
  }

  //for selecting card
  const handleClick = () => {
    //render to visually indicate selection
    setIsSelected(!isSelected);
    //give number id to board state
    console.log(cardOnBoardObj.getNumberId());
    //setting guess
    if (guess.length < 3) {
      setGuess(guess.concat([cardOnBoardObj.getNumberId()]));
    }

    //RWEIRTE THIS TO A FULL IF ELSE THAT ADDS OR REMOVES FROM SET GUESS
  };

  return (
    <article
      className={
        `${styles.card} ${requiredBackgroundColourStyle}` +
        (isSelected ? ` ${styles.is_selected}` : ` ${styles.not_selected}`)
      }
      onClick={handleClick}
    >
      <div className={styles.number_tag}>{numberId + ""}</div>
      <div
        className={`${requiredShapeStyle} ${requiredShapeColourStyle}`}
      ></div>
      {shape === "triangle" && <div className={requiredMaskStyle}></div>}
    </article>
  );
};

export default Card;
