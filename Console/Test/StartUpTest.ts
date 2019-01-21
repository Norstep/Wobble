/// <reference path="Interfaces/ITestDefinition.ts" />
/// <reference path="../../Lib/WobbleCore.d.ts" />

module Wobble.Console.Test {

    export class StartUpTest implements ITestDefinition  {

        private _core: Core;

        public get WobbleCore(): Core {
            return this._core;
        }

        public Test() {

            try {
                this._core = new Core();
                this._core.Initialize();
            } catch ( err ) {
                console.error( "StartUpTest failed! " + err.message + "\n" + err.stack );
                return false;
            }
        }

        public Destroy() {
            this._core.Destroy();
            this._core = undefined;
        }
    }
}