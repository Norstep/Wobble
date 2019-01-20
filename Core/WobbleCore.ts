module Wobble {

    export class Core {

        public static readonly VERSION: Version = new Version( "0.0.1" );

        public static get Instance(): Core {
            return Core._instance;
        }

        private static _instance: Core;

        public constructor() {
            if ( Core._instance ) {
                throw new Error( "Wobble core instance was created more than once!" );
            }

            Core._instance = this;
        }

        public initialize() {

        }
    }
}