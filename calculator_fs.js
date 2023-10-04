#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "n1",
            type: "number",
            message: "Enter first number",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Error: please enter number";
                }
                return true;
            }
        },
        {
            name: "n2",
            type: "number",
            message: "Enter second number",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Error: please enter number";
                }
                return true;
            }
        },
        {
            name: "calculation",
            type: "list",
            message: "Enter operator to perform",
            choices: ["addition", "subtraction", "multiplication", "division"]
        }
    ]);
    async function calculator_fs() {
        if (answer.calculation === "addition") {
            console.log(chalk.bgYellow(answer.n1 + answer.n2));
        }
        else if (answer.calculation === "subtraction") {
            console.log(chalk.bgCyanBright(answer.n1 - answer.n2));
        }
        else if (answer.calculation === "multiplication") {
            console.log(chalk.bgGreen(answer.n1 * answer.n2));
        }
        else if (answer.calculation === "division") {
            console.log(chalk.bgRed(answer.n1 / answer.n2));
        }
        else {
            console.log("Operator not found");
        }
    }
    ;
    calculator_fs();
    let repeat = await inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "Do you want to perform another calculation"
        }
    ]);
    condition = repeat.again;
}
;
