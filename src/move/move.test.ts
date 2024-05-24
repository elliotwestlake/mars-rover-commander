import { describe, it } from "node:test";
import { move } from "./move";
import { Direction } from "../change-direction/change-direction.types";
import assert from "node:assert";

describe("move.test.ts", () => {
  it("should return correct position", () => {
    [
      { direction: Direction.N, expected: { x: 1, y: 2 } },
      { direction: Direction.E, expected: { x: 2, y: 1 } },
      { direction: Direction.S, expected: { x: 1, y: 0 } },
      { direction: Direction.W, expected: { x: 0, y: 1 } },
    ].forEach(({ direction, expected }) => {
      const position = move({
        position: { x: 1, y: 1 },
        direction,
        plateauSize: { x: 5, y: 5 },
      });
      assert.deepEqual(position, expected);
    });
  });

  it("should not execute the plateau size", () => {
    const position = move({
      position: { x: 5, y: 5 },
      direction: Direction.N,
      plateauSize: { x: 5, y: 5 },
    });
    assert.deepEqual(position, { x: 5, y: 5 });
  });
});
