import inquirer from "inquirer";
// 1) computer will generate a random number - Done.
// 2) user input for guessing number - Done.
// 3) compare user input with computer generated number and show result - Done.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        // type: "number",
        message: "please guess a number between 1-5: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you've guessed the right number.");
}
else {
    console.log("you've guessed the wrong number");
}
