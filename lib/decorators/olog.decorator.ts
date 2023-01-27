import "reflect-metadata";
import { OlogOptions } from "../interfaces/olog-options.interface";

export const OLOG_KEY = Symbol("olog");

export function olog(options: OlogOptions) {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
        if (!descriptor) {
            console.log("descriptor is null, not a function?");
            return;
        }

        // apply the decorator to a class method
        Reflect.defineMetadata(OLOG_KEY, options, target, propertyKey);
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`Calling ${propertyKey} with args: ${args}`);
            const result = originalMethod.apply(this, args);
            console.log(`${propertyKey} returned: ${result}`);
            return result;
        }
    }
}