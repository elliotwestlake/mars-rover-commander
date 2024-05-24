import { changeDirection } from "../change-direction/change-direction";
import { Direction } from "../change-direction/change-direction.types";
import { move } from "../move/move";
import { Coordinates } from "../move/move.types";
import { ExecuteInstructions, Instruction } from "./execute-instructions.types";

export const executeInstructions = ({ input }: ExecuteInstructions) => {
  const [x, y] = input[0].split(" ");
  const plateauSize: Coordinates = { x: Number(x), y: Number(y) };

  const output: Array<string> = [];

  for (let i = 1; i < input.length; i++) {
    let startingPosition = input[i].split(" ");
    let instructions = input[i + 1].split("") as Array<Instruction>;

    let direction = Direction[startingPosition[2]];
    let position: Coordinates = {
      x: Number(startingPosition[0]),
      y: Number(startingPosition[1]),
    };

    instructions.forEach((instruction) => {
      if (instruction === "L" || instruction === "R") {
        direction = changeDirection({ direction, turn: instruction });
        return;
      }

      if (instruction === "M") {
        position = move({ position, direction, plateauSize });
        return;
      }
    });

    output.push(`${position.x} ${position.y} ${Direction[direction]}`);

    i++;
  }

  return output;
};
