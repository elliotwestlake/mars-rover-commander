import { ChangeDirection, Direction } from "./change-direction.types";

// export const changeDirection = ({
//   direction,
//   turn,
// }: ChangeDirection): Direction => {
//   switch (direction) {
//     case Direction.E:
//       return turn === "L" ? Direction.N : Direction.S;
//     case Direction.W:
//       return turn === "L" ? Direction.S : Direction.N;
//     case Direction.S:
//       return turn === "L" ? Direction.E : Direction.W;
//     case Direction.N:
//       return turn === "L" ? Direction.W : Direction.E;
//   }
// };

export const changeDirection = ({
  direction,
  turn,
}: ChangeDirection): Direction => {
  const turnBy = turn === "L" ? -90 : 90;

  const newDirection = direction + turnBy;

  if (newDirection === 360) return 0;

  if (newDirection < 0) return 360 + newDirection;

  return newDirection;
};
