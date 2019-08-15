module Wobble.Module {

    /**
     * The default factory class to stand up a module.
     */
    export class GenericModuleFactory<T extends BaseModule> implements IModuleFactory<T> {
        public outputProduct(): T {
            return;
        }
    }
}