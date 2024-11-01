import type {Arithmetic} from "./arithmetic";
import type {Base} from "./base";
import type {Array} from "./array";
import type {Struct} from "./struct";

export type DataType = 
    | Arithmetic 
    | Base 
    | Array 
    | Struct;