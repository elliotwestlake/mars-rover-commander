# Nandos Test - Mars Rover 🤖

Using this high tech interface you can control a mars rover!

## Assumptions

- The rover should not exceed the plateau. In this case I stop the rover from moving further than the plateau, however another solution could be to make it move to the other side of the plateau (like pacman or snake)

## Notes

- I decided to use node as it's the language I'm most experienced with.
- I decided against doing a frontend for pure speed really. It would have been cool to add some sort of user interface for this test, but in the interest of time I decided to get user input via the command line.
- Each function has a set of tests and types to go along with it. I have found this structure scales quite well
- Tests are using `node:test` to reduce the amount of dependencies the project has. Also I've not used it before and it's super fast!
- Similarly in the interest of using minimal dependices, I used `node:readline` to read the user input. However it's not the cleanest and something like [prompts](https://www.npmjs.com/package/prompts) may be a better choice.
- I'm using [tsx](https://www.npmjs.com/package/tsx) to run the application and tests as it's great for running typescript code with zero setup!
- I used `npm` to generate the lock and run commands in this case, however day to day I often use `pnpm`
- I originally changedDirection based on fixed directions, however I have now implemented a calculation to work out the new direction. I've left the old implementation in for visibility. I think the original implementation is more readable, but the new one is more flexible.

### Getting Started

#### Running the application

```bash
npm start
```

After the application has started, you'll then be asked to input the instructions. Which looks a little something like this:

```bash
elliot@Elliots-MacBook-Pro nandos-test % npm run start

> nandos-test@1.0.0 start
> tsx ./src/index.ts

🪐 What are the instructions?
> 5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

Here are the results! 🎉

Rover 1: 1 3 N

Rover 2: 5 1 E

elliot@Elliots-MacBook-Pro nandos-test %
```

#### Running tests

```bash
npm test
```
