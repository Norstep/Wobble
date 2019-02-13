module Wobble.Log {
    export interface ILogger {

        Enabled: boolean;
        Name: string;
        Log( message: string ): void;
        Debug( message: string ): void;
        Error( message: string ): void;
        Warn( message: string ): void;
    }
}