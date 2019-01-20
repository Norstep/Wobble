module Wobble.Console.Menu {

    export abstract class BaseMenuItem {
        public htmlContainer: HTMLDivElement;

        constructor() {
            this.htmlContainer = this.GenerateHTML();
        }

        public abstract Destroy(): void;
        protected abstract GenerateHTML(): HTMLDivElement;
        protected abstract RunTrigger(): void;
    }
}