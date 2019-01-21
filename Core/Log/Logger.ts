module Wobble.Log {

    export class Logger {

        public static get GlobalLogger(): ILogger {
            return Logger._globalLogger;
        }

        private static _globalLogger: ILogger;

        public static Initialize(): void {
            Logger._globalLogger = Logger.getNewLogger<BasicLogger>( BasicLogger, "Wobble Global Logger" );
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