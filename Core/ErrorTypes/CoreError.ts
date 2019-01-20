module Wobble.ErrorTypes {

    /**
     * An error encountered when decalring an invalid Wobble.Version instance.
     */
    export class CoreError implements Error {

        public readonly name: string = "CoreError";
        public readonly message: string;
        public stack?: string;

        constructor( message: string ) {
            this.message = "Error in Wobble Core: " + message;
        }
    }
}