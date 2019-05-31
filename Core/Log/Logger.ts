module Wobble.Log {

    /**
     * Access to the generic global logger object and a factory method to get new instances.
     * Eventually this could get expanded for various other logger functions and outputs (screen, file (local), and console)
     * 
     * TODO: Currently in Release type builds the ReleaseLogger will not give any output.
     * This probably should be configurable.
     */
    export class Logger {

        public static get GlobalLogger(): ILogger {
            return Logger._globalLogger;
        }

        private static _globalLogger: ILogger;

        public static Initialize(): void {
            Logger._globalLogger = Logger.getNewLogger<BasicConsoleLogger>( BasicConsoleLogger, "Wobble Global Logger" );
        }

        public static Destroy(): void {
            Logger._globalLogger = undefined;
        }

        public static getNewLogger<T extends ILogger>( endType: new ( name: string ) => T, name: string ): ILogger {
            if ( Wobble.Core.VERSION.CurrentBuildType === BuildType.DEBUG ) {
                return new endType( name );
            } else {
                return new ReleaseLogger( name );
            }
        }
    }
}