/*function Logger(originalConstructor:  any) {
    console.log('Class decorator');
    console.log(originalConstructor);
    let p = new originalConstructor();
    p.displayTitle();
}

function Log2(originalConstructor: any, propertyName: string | Symbol) {
    console.log('Propery decorator');
    console.log(originalConstructor);
    console.log(propertyName);
}

function WithHtmlTemplate(template: string, hookId: string) {


    return function<T extends {new(...args: any[]) : {title: string}}>(originalConstructor: T){
        return class extends originalConstructor {

            constructor(..._: any[]) {
                super();

                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    document.querySelector('h1')!.textContent = this.title;
                }
            }
        }
    }
}

@WithHtmlTemplate('<h1>Jeff</h1>', 'app')
class Product {
    @Log2
    title: string = 'Product';

    constructor() {
        console.log('Initializing product class');
    }

    displayTitle() {
        console.log(this.title);
    }
    
}

const p = new Product();

type StringOrSymbol = string | Symbol;

function Autobind(_: any, _2: StringOrSymbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;
}

class Printer {
    message = 'This works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }

}

const pr = new Printer();
pr.showMessage();
const button = document.querySelector('button')!;

button.addEventListener('click', pr.showMessage);


interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function RequiredField(target: any, propName: string) {
    console.log('Required Validator');
    console.log(target.constructor.name);
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any): boolean {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;

    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
    
}

class Course {
    @RequiredField
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        throw new Error('Invalid input, please try again!');
    }
    console.log(createdCourse);
});
*/