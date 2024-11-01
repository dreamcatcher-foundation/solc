# Solc
## Overview
This module serves as a wrapper for the `solc` package, creating a packaged, compiled executable that can be launched by other processes using inter-process communication (IPC). It provides typed input and output interfaces for `solc`, ensuring that data adheres to expected schemas with built-in assertions for validation.

## Executing Solc with Inter-Process Communication
In this example, we use the `child_process` module to spawn the `solc` executable as a separate process and send Solidity code for compilation.
```typescript
import {Out} from "solc";
import {ChildProcess} from "child_process";
import {execFile} from "child_process";

let path: string = /** solc.exe */
let solc: ChildProcess = execFile(path);
let out: Out;
solc.on("message", response => out = JSON.parse(response));
solc.send(JSON.stringify({
    src: `
        pragma solidity ^0.8.24;

        contract Car {
            uint256 private _distance;

            function drive() external returns (uint256) {
                return _distance += 1;
            }
        }
    `,
    language: "Solidity",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}));
solc.kill();
```

## Using the Compile Method Directly
This example demonstrates the use of `compile` to handle input directly, compiling the Solidity code within the same process.
```typescript
import {Out} from "solc";
import {compile} from "solc";

let out: Out = 
    compile({
        src: `
            pragma solidity ^0.8.24;

            contract Car {
                uint256 private _distance;

                function drive() external returns (uint256) {
                    return _distance += 1;
                }
            }
        `,
        language: "Solidity",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    });
```