import { Direction } from "../change-direction/change-direction.types";
import { Move, Position } from "./move.types";

export const move = ({ position, direction }: Move): Position => {
  let newPosition = position;
  switch (direction) {
    case Direction.E:
      newPosition.x = newPosition.x + 1;
      break;
    case Direction.W:
      newPosition.x = newPosition.x - 1;
      break;
    case Direction.S:
      newPosition.y = newPosition.y - 1;
      break;
    case Direction.N:
      newPosition.y = newPosition.y + 1;
      break;
  }

  return newPosition;
};
