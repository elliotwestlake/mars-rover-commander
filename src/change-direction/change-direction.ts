import { ChangeDirection, Direction } from "./change-direction.types";

export const changeDirection = ({
  direction,
  turn,
}: ChangeDirection): Direction => {
  switch (direction) {
    case Direction.E:
      return turn === "L" ? Direction.N : Direction.S;
    case Direction.W:
      return turn === "L" ? Direction.S : Direction.N;
    case Direction.S:
      return turn === "L" ? Direction.E : Direction.W;
    case Direction.N:
      return turn === "L" ? Direction.W : Direction.E;
  }
};
