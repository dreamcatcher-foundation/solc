import {default as Solc} from "solc"; /** this is ok */
import {Configuration} from "./configuration";
import {Output} from "./output";

export const compile = (configuration: Configuration): Output => JSON.parse(Solc.compile(JSON.stringify(configuration)));

export * from "./bytecode";
export * from "./configuration";
export * from "./contract-output";
export * from "./error-type";
export * from "./error";
export * from "./evm-output";
export * from "./output";
export * from "./source-location";
export * from "./source-output";