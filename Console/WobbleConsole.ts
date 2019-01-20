/// <reference path="../Lib/WobbleCore.d.ts" />
/// <reference path="../Lib/WobbleIO.d.ts" />
/// <reference path="Menu/BaseMenuItem.ts" />
/// <reference path="Menu/StartUpMenuItem.ts" />

module Wobble.Console {

    export class WobbleConsole {

        private static readonly DIV_TAG_ELEMENT_ID: string = "MenuItemContainer";
        private _divTag: HTMLDivElement;
        private _activeMenuOptions: Menu.BaseMenuItem[];

        constructor() {
            this._activeMenuOptions = [];
        }

        public initialize() {
            this._divTag = document.getElementById( WobbleConsole.DIV_TAG_ELEMENT_ID ) as HTMLDivElement;

            //Just start add the default test to the window directly for now
            const startMenu: Menu.StartUpMenuItem = new Menu.StartUpMenuItem();
            this._activeMenuOptions.push( startMenu );

            this.displayMenuItems();
        }

        private displayMenuItems() {
            for ( let value of this._activeMenuOptions ) {
                this._divTag.appendChild( value.htmlContainer );
            }
        }
    }

    var g_WobbleConsole: WobbleConsole;
    function StartEverything() {
        g_WobbleConsole = new WobbleConsole();
        g_WobbleConsole.initialize();
    }

    window.onload = StartEverything;
}