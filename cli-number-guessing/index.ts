#! /usr/bin/env node

//computer gerenate number
//user guess number
//compare random number vs guess user number

import inquirer from "inquirer";

//user guess number
//compare computer number VS guess number.

let randNumber: number = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    message: "Please guess any number from 0 to 10 : ",
    type: "number",
    name: "guessNumber",
  },
]);

if (randNumber === answer.guessNumber) {
  console.log(`congratulations! You Won ....!!!`);
} else {
  console.log(`oops! You loose ...!!!`);
}
