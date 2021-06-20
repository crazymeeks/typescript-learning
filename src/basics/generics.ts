/*function merge<T, U>(objectA: T, objectB: U) {
    return Object.assign(objectA, objectB);
}


type NameObject = {
    name: string;
};

type AgeObject = {
    age: number
};

let User: NameObject = {
    name: 'Jeff'
};

let mergeObject = merge<NameObject, AgeObject>(User, {age: 30});

// Another generic function
interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi there'));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

let obj = {
    name: 'Jeff'
};

console.log(extractAndConvert(obj, 'name'));



class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Jeff Claud');

*/