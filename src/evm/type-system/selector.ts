import type {DataType} from "@this/evm/type-system";

export type Selector = `${string}(${string})`;

export function Selector(name: string, ... args: DataType[]): Selector {
    let args_: string = "";
    let i: bigint = 0n;
    while (Number(i) < args.length) {
        if (i !== 0n) args_ = ", ";
        args_ += args[Number(i)];
        i += 1n;
    }
    return `${name}(${args_})`;
}