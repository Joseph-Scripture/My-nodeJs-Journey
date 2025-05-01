import path, { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as readline from 'node:readline/promises';

import chalk from "chalk";

import * as calculator from "./my_modules/calculator.js"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const main = async () => {
    const operation = await rl.question(chalk.redBright("Enter the operation (add, subtract, multiply, divide:\n"));
    const a = parseFloat(await rl.question("Enter the first number:\n"));
    const b =parseFloat( await rl.question("Enter the second number:\n"));
    if (!calculator[operation]){
        console.log(`The operation "${operation}" is not supported`);
    }else{
        let result = calculator[operation](a, b);
        if (operation === 'add'){
            
            console.log(chalk.red(`${a} + ${b} = ${result}`));
        } else if (operation === 'subtract'){
            console.log(chalk.blue(`${a} - ${b} = ${result}`));
        } else if (operation === 'multiply'){
            console.log(chalk.green(`${a} * ${b} = ${result}`));
        } else {
            console.log(chalk.greenBright(`${a} / ${b} = ${result} `));
        }
    }
    
const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const  __dirname = path.dirname(__filename);
console.log(`The Current directory name is: ${__dirname}`);
console.log(chalk.red(`current file name is : ${basename}`))
    
        
    rl.close();
}

main();

