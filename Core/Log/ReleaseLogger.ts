module Wobble.Log {

    /**
     * "Log" class used to disable log output.
     * Remember it is still best to remove uneeded log calls as it is still
     * a performence hit, this class is just to prevent unwanted output to console.
     */
    export class ReleaseLogger implements ILogger {
        public readonly Name: string;
        public Enabled: boolean = false;

        public constructor( name?:string ) {
            this.Name = ( name ) ? name + "RelaseLogger" : "ReleaseLogger";
        }

        public Error( message: string, ...optionalParams: any[]  ) { }
        public Debug( message: string, ...optionalParams: any[]  ) { }
        public Log( message: string, ...optionalParams: any[]  ) { }
        public Warn( message: string, ...optionalParams: any[] ) { }
        public Info( message: string, ...optionalParams: any[] ) { }
    }
}