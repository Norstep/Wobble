module Wobble.ErrorTypes {

    /**
     * An error encountered when decalring an invalid Wobble.Version instance.
     */
    export class VersionError implements Error {

        public readonly name: string = "VersionError";
        public readonly message: string;
        public stack?: string;

        constructor( inavlidVersion: string ) {
            this.message = "\"" + inavlidVersion + "\" does not match the format MAJOR.MINOR.REVISION - Each piece must also be numeric.";
        }
    }
}