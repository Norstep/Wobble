module Wobble {

    const g_BuildType: BuildType = BuildType.DEBUG;

    export class Core {

        public static readonly VERSION: Version = new Version( "0.0.1", g_BuildType );

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

        public Initialize() {
            Wobble.Log.Logger.Initialize();
        }

        public Destroy() {
            Wobble.Log.Logger.Destroy();
            Core._instance = undefined;
        }
    }
}