/// <reference path="Tags.ts" />

module Wobble {

    /**
     * Basic building block of many Wobble objects.
     * Allows for naming, tagging, and receiving of messages.
     */
    export abstract class Block {

        public Name: string;

        public Tags: Tags;

        public constructor() {

        }
    }
}