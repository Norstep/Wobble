/// <reference path="Interfaces/ILogger.ts" />
module Wobble.Log {

    /**
     * Simple log class that outputs to web console. Used as the default Global Logger in Logger.ts 
     */
    export class BasicConsoleLogger implements ILogger {

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

        public constructor( name: string ) {
            this._name = name;
        }

        public Debug( message: string, ...optionalParams:any[] ): void {
            console.debug( message, optionalParams );
        }

        public Error( message: string, ...optionalParams: any[]  ): void {
            console.error( message, optionalParams );
        }

        public Log( message: string, ...optionalParams: any[] ): void {
            console.log( message, optionalParams );
        }

        public Warn( message: string, ...optionalParams: any[] ) {
            console.warn( message, optionalParams );
        }

        public Info( message: string, ...optionalParams: any[] ) {
            console.info( message, optionalParams );
        }
    }
}