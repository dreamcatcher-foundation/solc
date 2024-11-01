import type {Arithmetic} from "./arithmetic";
import type {Bytes} from "./bytes";
import type {Base} from "./base";

export type Array = `${Arithmetic | Bytes | Base}[]`;