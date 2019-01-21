/// <reference path="Interfaces/ILogger.ts" />
module Wobble.Log {

    export class BasicLogger implements ILogger {

        private _enabled: boolean = true;
        private _name: string;

        public get Name(): string {
            return this._name;
        }

        public get Enabled(): boolean {
            return this._enabled;
        }

        public set Enabled( value: boolean ) {
            this._enabled = value;
        }

        public constructor( name:string ) {

        }

        public Debug( message: string ): void {

        }

        public Error( message: string ): void {

        }

        public Log( message: string ): void {

        }
    }
}