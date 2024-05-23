import readline from "node:readline";
import { executeInstructions } from "./execute-instructions/execute-instructions";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: Array<string> = [];

rl.write("🪐 What's the instructions commander?!\n");
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
  console.log("Thank you! Processing 🤖\n");
  const [x, y] = input[0].split(" ");

  const output = executeInstructions({ input });

  console.log("Here are the results! 🎉\n");
  output.forEach((item) => console.log(item + "\n"));

  process.exit(0);
});
