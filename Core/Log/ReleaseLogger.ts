module Wobble.Log {
    export class ReleaseLogger implements ILogger {
        public readonly Name: string;
        public Enabled: boolean = false;

        public constructor( name?:string ) {
            this.Name = ( name ) ? name + "RelaseLogger" : "ReleaseLogger";
        }

        public Error( message: string ) { }
        public Debug( message: string ) { }
        public Log( message: string ) { }
        public Warn( message: string ) { }
    }
}