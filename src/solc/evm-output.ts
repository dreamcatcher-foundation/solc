import * as This from "@this";
import {Bytecode} from "./bytecode";

export type EvmOutput = {
    assembly?: string;
    legacyAssembly?: object;
    bytecode?: Bytecode;
    deployedBytecode?: Bytecode;
    methodIdentifiers?: {[selector: This.Evm.Dispatch.Selector]: string;};
    gasEstimates?: {
        creation?: {
            codeDepositCost?: string;
            executionCost?: string;
            totalCost?: string;
        };
        external?: {[selector: This.Evm.Dispatch.Selector]: string};
        internal?: {[selector: This.Evm.Dispatch.Selector]: string};
    };
};

export const EvmOutput = ({
    assembly,
    legacyAssembly,
    bytecode,
    deployedBytecode,
    methodIdentifiers,
    gasEstimates}: EvmOutput) => ({
        assembly,
        legacyAssembly,
        bytecode,
        deployedBytecode,
        methodIdentifiers,
        gasEstimates
    });