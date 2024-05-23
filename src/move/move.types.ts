import { Direction } from "../change-direction/change-direction.types";

export type Move = {
  position: Position;
  direction: Direction;
};

export type Position = {
  x: number;
  y: number;
};
