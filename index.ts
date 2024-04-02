#! /usr/bin/env node

import inquirer from "inquirer"

//1. computer will generate a random number
//2. user input for guessing number
//3. compare user input with computer generated number and show result


 const  randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
{
    name:"userguessnumber",
    type:"number",
    message:"please guess a number between 6",
}
]);

if(answers.userguessnumber === randomNumber){
    console.log("conggratzz!!! you guess right number");
}
else {
    console.log("you guess wrong number");
}