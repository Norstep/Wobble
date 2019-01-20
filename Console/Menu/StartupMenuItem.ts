/// <reference path="BaseMenuItem.ts" />
/// <reference path="../Test/StartUpTest.ts" />

module Wobble.Console.Menu {

    export class StartUpMenuItem extends Menu.BaseMenuItem {
        public htmlContainer: HTMLDivElement;
        private _test: Test.StartUpTest;

        //TODO: Make this support a collection of tests, one after another... in a generic way.
        public triggeredTest;

        constructor() {
            super();
            this._test = new Test.StartUpTest();
        }

        public Destroy() {

        }

        protected GenerateHTML() {
            const output: HTMLDivElement = document.createElement( "div" );

            let button: HTMLInputElement = document.createElement( "input" );
            button.type = "Button";
            button.onclick = this.RunTrigger.bind ( this );
            button.textContent = "Start Up Test";
            button.value = "Start Up Test";

            output.appendChild( button );

            return output;
        }

        protected RunTrigger(): void {
            this._test.Test();
        }
    }
}