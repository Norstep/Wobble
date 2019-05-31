module Wobble.Log {

    /**
     * Interface that defines a log class 
     */
    export interface ILogger {

        Enabled: boolean;
        Name: string;
        Log( message: string, ...optionalParams: any[]  ): void;
        Debug( message: string, ...optionalParams: any[]  ): void;
        Error( message: string, ...optionalParams: any[]  ): void;
        Warn( message: string, ...optionalParams: any[] ): void;
        Info( message: string, ...optionalParams: any[] ): void;
    }
}