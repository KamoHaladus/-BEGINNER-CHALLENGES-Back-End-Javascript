import {
    connect,
    disconnect,
    getCurrentBlock,
    getBlockByHash,
    getBlockByNumber,
} from "./api";
import { error, info } from "./logger";
import { getBlockHashArray, getBlockNumbers } from "./validate-args";
import { outputHeader } from "./output";
import { Header } from "@polkadot/types/interfaces";
import chalk from "chalk";

const main = async () => {
    const blockNumbers = process.argv && getBlockNumbers(process.argv);
    const blockHashList = process.argv && getBlockHashArray(process.argv);
    blockNumbers.length > 0 &&
        blockHashList.length > 0 &&
        info(
            `Validated params: ${blockNumbers.join(", ")} ${blockHashList.join(
                ", ",
            )}`,
        );

    if (blockNumbers.length > 0) {
        const blockByNumberList = await getBlockByNumber(blockNumbers);

        (blockByNumberList || []).forEach((block: Header) => {
            info(
                `Queried by: ${chalk.whiteBright(chalk.bgGray(block.number))}`,
            );
            outputHeader(block);
        });
    }
    if (blockHashList.length > 0) {
        const blockByHashList = await getBlockByHash(blockHashList);
        (blockByHashList || []).forEach((block: Header) => {
            info(
                `Queried by: ${chalk.whiteBright(
                    chalk.bgGray(block.hash.toString()),
                )}`,
            );
            outputHeader(block);
        });
    }
    if (!(blockNumbers.length || blockHashList.length)) {
        const header = await getCurrentBlock();
        info("CURRENT BLOCK");
        outputHeader(header);
        return;
    }
};

(async () => {
    try {
        await connect();
        await main();
    } catch (er) {
        error(er);
    } finally {
        await disconnect();
    }
})();
