import { describe, it } from "node:test";
import assert from "node:assert";
import { changeDirection } from "./change-direction";
import { Direction } from "./change-direction.types";

describe("change-direction.test.ts", () => {
  it("should correctly turn left", () => {
    [
      { direction: Direction.N, expected: 270 },
      { direction: Direction.E, expected: 0 },
      { direction: Direction.S, expected: 90 },
      { direction: Direction.W, expected: 180 },
    ].forEach(({ direction, expected }) => {
      const position = changeDirection({ direction, turn: "L" });
      assert.deepStrictEqual(position, expected);
    });
  });

  it("should correctly turn right", () => {
    [
      { direction: Direction.N, expected: 90 },
      { direction: Direction.E, expected: 180 },
      { direction: Direction.S, expected: 270 },
      { direction: Direction.W, expected: 0 },
    ].forEach(({ direction, expected }) => {
      const position = changeDirection({ direction, turn: "R" });
      assert.strictEqual(position, expected);
    });
  });
});
