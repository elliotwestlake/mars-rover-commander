import { Direction } from "../change-direction/change-direction.types";
import { Move, Coordinates } from "./move.types";

export const move = ({
  position,
  direction,
  plateauSize,
}: Move): Coordinates => {
  let newPosition = position;
  switch (direction) {
    case Direction.E:
      if (newPosition.x + 1 <= plateauSize.x) {
        newPosition.x = newPosition.x + 1;
      }
      break;
    case Direction.W:
      if (newPosition.x - 1 >= 0) {
        newPosition.x = newPosition.x - 1;
      }
      break;
    case Direction.S:
      if (newPosition.y - 1 >= 0) {
        newPosition.y = newPosition.y - 1;
      }
      break;
    case Direction.N:
      if (newPosition.y + 1 <= plateauSize.y) {
        newPosition.y = newPosition.y + 1;
      }
      break;
  }

  return newPosition;
};
