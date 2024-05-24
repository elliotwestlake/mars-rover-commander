import readline from "node:readline";
import { executeInstructions } from "./execute-instructions/execute-instructions";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: Array<string> = [];

rl.write("🪐 What are the instructions?\n");
rl.prompt();

rl.on("line", (line) => {
  if (!input.length && !line) {
    console.log("Please enter your commands for the rover 🤖\n");
    return;
  }

  if (!line) rl.close();

  input.push(line);
});

rl.on("close", () => {
  // unsure what to do with max plateau coordinates. I have put some suggestions in the README
  const [x, y] = input[0].split(" ");

  const output = executeInstructions({ input });

  console.log("Here are the results! 🎉\n");
  output.forEach((item, index) =>
    console.log(`Rover ${index + 1}: ${item} \n`)
  );

  process.exit(0);
});
