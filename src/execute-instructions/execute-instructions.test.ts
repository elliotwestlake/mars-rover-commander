import { describe, it } from "node:test";
import { executeInstructions } from "./execute-instructions";
import assert from "node:assert";

describe("execute-instructions.types.ts", () => {
  it("should return correct result", () => {
    const result = executeInstructions({
      input: ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"],
    });

    assert.deepStrictEqual(result, ["1 3 N", "5 1 E"]);
  });
});
