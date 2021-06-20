// Auto bind decorator
export function Auto_bind(_: any, _2: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFn = originalMethod.bind(this);
            return bindFn;
        }
    };

    return adjustedDescriptor;

}