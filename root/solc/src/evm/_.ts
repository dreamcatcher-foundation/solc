export type Account = {
    address(): Promise<string>;
    nonce(): Promise<number>;
    nextNonce(): Promise<number>;
    
};

export type Evm = {

};

export function Evm(): Evm {

}

export * as Dispatch from "./dispatch/_";
export * as TypeSystem from "./type-system/_";