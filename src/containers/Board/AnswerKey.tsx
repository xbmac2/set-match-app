import { CardOnBoard } from "../../components/Card/Card";

//there are 84 possible combinations
export const possibleCombinations = [
  [1, 2, 3],
  [1, 2, 4],
  [1, 2, 5],
  [1, 2, 6],
  [1, 2, 7],
  [1, 2, 8],
  [1, 2, 9],
  [1, 3, 4],
  [1, 3, 5],
  [1, 3, 6],
  [1, 3, 7],
  [1, 3, 8],
  [1, 3, 9],
  [1, 4, 5],
  [1, 4, 6],
  [1, 4, 7],
  [1, 4, 8],
  [1, 4, 9],
  [1, 5, 6],
  [1, 5, 7],
  [1, 5, 8],
  [1, 5, 9],
  [1, 6, 7],
  [1, 6, 8],
  [1, 6, 9],
  [1, 7, 8],
  [1, 7, 9],
  [1, 8, 9],
  [2, 3, 4],
  [2, 3, 5],
  [2, 3, 6],
  [2, 3, 7],
  [2, 3, 8],
  [2, 3, 9],
  [2, 4, 5],
  [2, 4, 6],
  [2, 4, 7],
  [2, 4, 8],
  [2, 4, 9],
  [2, 5, 6],
  [2, 5, 7],
  [2, 5, 8],
  [2, 5, 9],
  [2, 6, 7],
  [2, 6, 8],
  [2, 6, 9],
  [2, 7, 8],
  [2, 7, 9],
  [2, 8, 9],
  [3, 4, 5],
  [3, 4, 6],
  [3, 4, 7],
  [3, 4, 8],
  [3, 4, 9],
  [3, 5, 6],
  [3, 5, 7],
  [3, 5, 8],
  [3, 5, 9],
  [3, 6, 7],
  [3, 6, 8],
  [3, 6, 9],
  [3, 7, 8],
  [3, 7, 9],
  [3, 8, 9],
  [4, 5, 6],
  [4, 5, 7],
  [4, 5, 8],
  [4, 5, 9],
  [4, 6, 7],
  [4, 6, 8],
  [4, 6, 9],
  [4, 7, 8],
  [4, 7, 9],
  [4, 8, 9],
  [5, 6, 7],
  [5, 6, 8],
  [5, 6, 9],
  [5, 7, 8],
  [5, 7, 9],
  [5, 8, 9],
  [6, 7, 8],
  [6, 7, 9],
  [6, 8, 9],
  [7, 8, 9],
];

//function to check all the same
const isSame = (arr: any[]) => arr.every((val) => val === arr[0]);

//function to check all unique
const isUnique = (value: any, index: number, array: any[]) => {
  return array.indexOf(value) === array.lastIndexOf(value);
};

export const checkShape = (possibleSet: CardOnBoard[]): boolean => {
  if (possibleSet.length !== 3) {
    console.log("sets shouls only be three");
  }

  const shapeArr = possibleSet.map((card) => card.getShape());

  if (isSame(shapeArr)) {
    return true;
  }

  if (shapeArr.every(isUnique)) {
    return true;
  }

  return false;
};

export const checkShapeColour = (possibleSet: CardOnBoard[]): boolean => {
  if (possibleSet.length !== 3) {
    console.log("sets shouls only be three");
  }

  const shapeColourArr = possibleSet.map((card) => card.getShapeColour());

  if (isSame(shapeColourArr)) {
    return true;
  }

  if (shapeColourArr.every(isUnique)) {
    return true;
  }

  return false;
};

export const checkBackgroundColour = (possibleSet: CardOnBoard[]): boolean => {
  if (possibleSet.length !== 3) {
    console.log("sets shouls only be three");
  }

  const backgroundColourArr = possibleSet.map((card) =>
    card.getBackgroundColour()
  );

  if (isSame(backgroundColourArr)) {
    return true;
  }

  if (backgroundColourArr.every(isUnique)) {
    return true;
  }

  return false;
};

export const generateAnswerKey = (cardsOnBoard: CardOnBoard[]) => {
  const answerKey: number[][] = [];

  possibleCombinations.forEach((combination) => {
    const testSet: CardOnBoard[] = [];

    combination.forEach((number) => {
      testSet.push(cardsOnBoard[number - 1]);
    });

    if (
      checkShape(testSet) &&
      checkShapeColour(testSet) &&
      checkBackgroundColour(testSet)
    ) {
      answerKey.push(combination);
    }
  });

  console.log(answerKey);
  return answerKey;
};
