import {SourceOutput} from "./source-output";
import {ContractOutput} from "./contract-output";
import {Error} from "./error";

export type Output = {
    errors?: Error[];
    sources?: {[filename: string]: SourceOutput};
    contracts?: {[filename: string]: {[contract: string]: ContractOutput}};
};

export const Output = ({errors, sources, contracts}: Output) => ({errors, sources, contracts});