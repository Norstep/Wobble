/// <reference path="Interfaces/ITestDefinition.ts" />
/// <reference path="../../Lib/WobbleCore.d.ts" />

module Wobble.Console.Test {

    export class StartUpTest implements ITestDefinition  {

        private _core: Core;

        public get WobbleCore(): Core {
            return this._core;
        }

        constructor() {

        }

        Test() {

            try {
                this._core = new Core();
                this._core.initialize();
            } catch ( err ) {
                console.error( "StartUpTest failed! " + err.message + "\n" + err.stack );
                return false;
            }
        }
    }
}