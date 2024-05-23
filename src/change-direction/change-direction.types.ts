export type ChangeDirection = {
  direction: Direction;
  turn: "L" | "R";
};

export enum Direction {
  "N" = 0,
  "E" = 90,
  "S" = 180,
  "W" = 270,
}
