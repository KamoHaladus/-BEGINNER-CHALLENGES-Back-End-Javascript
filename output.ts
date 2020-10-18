import chalk from "chalk";
import { Header } from "@polkadot/types/interfaces";

export const outputHeader = (header: Header) => {
    console.log(
        chalk.yellowBright(chalk.bgGrey("Number: ")),
        chalk.whiteBright(header.number.toString()),
    );
    console.log(
        chalk.yellowBright(chalk.bgGrey("Hash: ")),
        chalk.whiteBright(header.hash.toString()),
    );
    console.log(
        chalk.greenBright("Parent hash: "),
        chalk.whiteBright(header.parentHash.toString()),
    );
    console.log(
        chalk.greenBright("Extrinsics root: "),
        chalk.whiteBright(header.extrinsicsRoot.toString()),
    );
    console.log(
        chalk.greenBright("State root: "),
        chalk.whiteBright(header.stateRoot.toString()),
        "\n",
    );
};
