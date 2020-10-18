import chalk from "chalk";

export const error = (message: string) =>
    console.log(chalk.redBright(`${message}`));

export const warn = (message: string) =>
    console.log(chalk.yellow(`${message}`));

export const info = (message: string) => console.log(chalk.grey(`${message}`));

export const success = (message: string) =>
    console.log(chalk.greenBright(`${message}`));
