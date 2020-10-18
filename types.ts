export interface Header {
    readonly parentHash: string;
    readonly hash: string;
    readonly number: number;
    readonly stateRoot: string;
    readonly extrinsicsRoot: string;
}
