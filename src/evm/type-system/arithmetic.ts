import type {ArithmeticBitSize} from "./arithmetic-bit-size";

export type Arithmetic = "uint" | "int" | `${"uint" | "int"}${ArithmeticBitSize}`;