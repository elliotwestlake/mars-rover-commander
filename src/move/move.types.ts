import { Direction } from "../change-direction/change-direction.types";

export type Move = {
  position: Coordinates;
  direction: Direction;
  plateauSize: Coordinates;
};

export type Coordinates = {
  x: number;
  y: number;
};
