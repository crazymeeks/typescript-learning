import 'reflect-metadata';
// import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
import { validate } from 'class-validator';


// let products = [
//     {title: 'Book', price: 12.99}
// ];


const newProd = new Product('', -1.20);

validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('Validation ERRORS');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());

    }
});

// let loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });


// for(const prod of loadedProducts) {
//     console.log(prod.getInformation());

// }

// const p1 = new Product('Book', 199);
