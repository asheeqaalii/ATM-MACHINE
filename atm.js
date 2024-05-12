#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 106;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter ur pin code",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let actionAns = await inquirer.prompt({
        name: "action",
        message: "Please select an option",
        type: "list",
        choices: ["withdraw", "check balance"],
    });
    if (actionAns.action === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter the amount u wanna withdraw",
            type: "number",
        });
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficiant balance");
        }
    }
    let afterWithdraw = await inquirer.prompt({
        name: "Question",
        message: "Do u wanna check your balance or not?",
        choices: ["Yup", "Nope"],
        type: "list",
    });
    if (afterWithdraw.Question == "Yup") {
        console.log(`Your total balance is ${myBalance} `);
    }
}
else {
    console.log("opps! Incorrect pin code");
}
