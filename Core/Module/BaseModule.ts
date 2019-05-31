module Wobble.Module {

    /**
     * Defines a Module in Wobble. In this world a module is a component like system
     * that extends functionality off the core. 
     * This allows for modules to be swapped in and out at run time, keeping the smallest footprint possible.
     * 
     * Classes that extend this are considered Entry Points for the module. 
     * Multiple points could be defined in a module, but only one should be invoked!
     */
    export abstract class BaseModule {

    }
}