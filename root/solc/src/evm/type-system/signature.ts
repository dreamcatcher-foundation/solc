import {Selector} from "./selector";

export type Signature = `function ${string}(${string}) external`;

export function Signature(selector: Selector): Signature {
    return `function ${selector} external`;
}