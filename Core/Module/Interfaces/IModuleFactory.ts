module Wobble.Module {
    /**
     * 
     */
    export interface IModuleFactory<T extends BaseModule> {
        outputProduct(): T;
    }
}