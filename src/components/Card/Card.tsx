import styles from "./Card.module.scss";
import { Deck } from "./Deck";

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
    backgourndColour: string
  ) {
    this.shape = shape;
    this.shapeColour = shapeColour;
    this.backgroundColour = backgourndColour;
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

export interface CardProps {
  shape: string;
  shapeColour: string;
  backgroundColour: string;
}

const Card = ({ shape, shapeColour, backgroundColour }: CardProps) => {
  // const deck = new Deck(); //caused to hang due to loop?
  // // //Deck.buildCardImageArr();
  // // deck.printDeck();
  // const myFirstNine = deck.shuffleAndGetNine();
  // myFirstNine.forEach((card) => console.log(card.getCardDescription()));

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

  return (
    <>
      <article className={`${styles.card} ${requiredBackgroundColourStyle}`}>
        <div
          className={`${requiredShapeStyle} ${requiredShapeColourStyle}`}
        ></div>
        {shape === "triangle" && <div className={requiredMaskStyle}></div>}
      </article>

      {/* <article className={styles.card}>
        <div className={styles.circle}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.triangle}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.square}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.circle}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.triangle}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.square}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.circle}>shape</div>
      </article>

      <article className={styles.card}>
        <div className={styles.triangle}>shape</div>
      </article> */}
    </>
  );
};

export default Card;
