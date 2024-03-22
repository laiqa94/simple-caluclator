import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "seconedNumber" },
    {
        message: "Select one Operator to perform Operations",
        type: "List",
        name: "operator",
        choices: ["Addition", "Subtructions", "Multiplication", "Division"],
    },
]);
//Condtional statement
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.seconedNumber);
}
else if (answers.operator === "Subtructions") {
    console.log(answers.firstNumber - answers.seconedNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.seconedNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.seconedNumber);
}
else {
    console.log("Invalid Operator");
}
