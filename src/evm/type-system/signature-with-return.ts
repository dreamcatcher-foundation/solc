import type {DataType} from "./data-type";
import {Signature} from "./signature";

export type SignatureWithReturn = `function ${string}(${string}) external view returns (${string})`;

export function SignatureWithReturn(signature: Signature, ... args: DataType[]): SignatureWithReturn {
    let args_: string = "";
    let i: bigint = 0n;
    while (Number(i) < args.length) {
        if (i !== 0n) args_ = ", ";
        args_ += args[Number(i)];
        i += 1n;
    }
    return `${signature} view returns (${args_})`;
}