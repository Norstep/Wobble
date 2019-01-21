/// <reference path="BaseMenuItem.ts" />
/// <reference path="../Test/StartUpTest.ts" />

module Wobble.Console.Menu {

    export class StartUpMenuItem extends Menu.BaseMenuItem {
        public htmlContainer: HTMLDivElement;
        private _test: Test.StartUpTest;

        constructor() {
            super();
            this._test = new Test.StartUpTest();
        }

        public Destroy() {
            if ( this.htmlContainer.parentElement ) {
                this.htmlContainer.parentElement.removeChild( this.htmlContainer );
            }

            if ( this._test ) {
                this._test.Destroy();
            }

            this.htmlContainer = undefined;
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