/// <reference path="Tags.ts" />

module Wobble {

    /**
     * Basic building block of many Wobble objects.
     * Allows for naming, tagging, and receiving of messages.
     */
    // TODO: Finish/Update stubs
    export abstract class Block {

        public Name: string;

        public Tags: Tags;

        public constructor() {

        }

        // update this def when the objects exist
        public processMessage( msg: any ): boolean {
            return false;
        }
    }
}