module Wobble {

    export class Tags {

        private static _allTags: { [tag: string]: Array<string> };
        private _tags: { [tag: string]: boolean };
        private _parentName: string;

        public constructor( parent: Block ) {
            if ( !parent ) {
                Log.Logger.GlobalLogger.Error( "Tags created with unknown parent!" );
                return undefined;
            }

            this._parentName = parent.Name;
            this._tags = {};
        }

        public static Initialize() {
            Tags._allTags = {};
        }

        /**
         * Destoys the static tagging system along with the Blocks instances of tags.
         */
        public static Destroy() {
            Tags._allTags = undefined;
        }

        public AddTag( tag: string ) {
            if ( !Tags._allTags ) {
                Log.Logger.GlobalLogger.Warn( "Attempted to add tag " + tag + " from object " + this._parentName + " but the tagging system does not seem initialized!" );
                return;
            }

            let blockNamesForTag = Tags._allTags[tag];

            if ( !blockNamesForTag ) {
                blockNamesForTag = Tags._allTags[tag] = [];
            }

            blockNamesForTag.push( this._parentName );
            this._tags[tag] = true;
        }

        public HasTag( tag: string ) {
            return this._tags[tag] === true;
        }

        public RemoveTag( tag: string ) {

        }

        public Destroy() {
            if ( Tags._allTags ) {
                for ( let tag in this._tags ) {
                    this.RemoveTag( tag );
                }
            }

            this._tags = undefined;
        }
 
        // TODO: Expand tagging system functionality
    }
}