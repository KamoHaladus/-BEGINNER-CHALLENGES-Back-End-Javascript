import { ApiPromise, WsProvider } from "@polkadot/api";
import { ApiOptions } from "@polkadot/api/types";
import { BlockHash, Header } from "@polkadot/types/interfaces";
import { info, error, success } from "./logger";

const CONNECTION_ADDRESS = process.env.CONNECTION_ADR;

let Api: ApiPromise;

export const connect = async () => {
    const options: ApiOptions = {
        provider: new WsProvider(CONNECTION_ADDRESS),
    };

    info("CONNECTING");
    Api = await new ApiPromise(options);
    await Api.isReady;

    Api.isConnected
        ? success("CONNECTED")
        : error("Dude, you made somthing wrong!!!");
};

export const getBlockByNumber = async (
    blockNumbers: number[],
): Promise<Header[]> => {
    let hashlist: BlockHash[] = [];
    if (blockNumbers.length === 0) {
        return [];
    }
    for (let num of blockNumbers) {
        const hash = await Api.rpc.chain.getBlockHash(num);
        hash && hashlist.push(hash);
    }

    let results: Header[] = [];
    for (let hash of hashlist) {
        const response = await Api.rpc.chain.getBlock(hash);
        const { header } = (response && response.block) || null;

        header && results.push(header);
    }

    return results;
    // const unsub = await Api.query.system.number.multi(
    //     [...blockNumbers],
    //     (blockHash) => {
    //         console.log("dupa", blockHash[0].toString());

    //         console.log(JSON.stringify(blockHash));
    //     },
    // );
    // unsub();
    // const hashArray = await Api.rpc.chain.getBlockHash(blockNumbers[0]);
    // console.log(hashArray);
};

export const getCurrentBlock = async (): Promise<Header> => {
    return await Api.rpc.chain.getHeader();
};

export const getBlockByHash = async (hashList: string[]): Promise<Header[]> => {
    let result: Header[] = [];
    console.log("tutaj");

    for (let hash of hashList) {
        const res = await Api.rpc.chain.getBlock(hash);
        const { header } = res && res.block;
        result.push(header);
    }

    return result;
};

export const disconnect = async () => {
    Api.isConnected && (await Api.disconnect());

    success("DISCONNECTED");
};
