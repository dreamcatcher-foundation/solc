import type {Signature} from "./signature";
import type {SignatureWithReturn} from "./signature-with-return";

export type AbstractBinaryInterface =
    | (
        | Signature
        | SignatureWithReturn
    )[]
    | object[];