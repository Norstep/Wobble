module Wobble.Console.Test {

    export interface ITestDefinition {

        Test(): boolean;
        Destroy(): void;
    }
}