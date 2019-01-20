/// <reference path="ErrorTypes/VersionError.ts" />

module Wobble {

    /**
     * Class that defines a version for anything that needs it (core, modules, etc.)
     * Defined by a string in format of MAJOR.MINOR.REVISION. Each must be numeric.
     */
    export class Version {

        private _major: number;
        private _minor: number;
        private _revision: number;
        private _versionString: string;

        /**
         * The full version string
         */
        public get Version(): string {
            return this._versionString;
        }

        /*
         * Major version number
         */
        public get Major(): number {
            return this._major;
        }

        /**
         * Minor version number
         */
        public get Minor(): number {
            return this._minor;
        }

        /*
         * Revsion version number
         */
        public get Revision(): number {
            return this._revision;
        }

        /**
         * Creates a new Version definition
         * Defined by a string in format of MAJOR.MINOR.REVISION. Each must be numeric
         * @param versionString
         */
        constructor( versionString: string ) {
            let splitter: string[] = versionString.split(".");

            if ( splitter.length !== 3 ) {
                throw new ErrorTypes.VersionError( versionString );
            }

            this._major     = parseInt( splitter[0] );
            this._minor     = parseInt( splitter[1] );
            this._revision  = parseInt( splitter[2] );

            if ( isNaN( this._major ) || isNaN( this._minor ) || isNaN( this._revision ) ) {
                throw new ErrorTypes.VersionError( versionString );
            }

            this._versionString = versionString;
        }
    }
}