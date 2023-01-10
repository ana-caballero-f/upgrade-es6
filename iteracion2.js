//TERMINADO

/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(title);
console.log(year);

/* 
2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1, fruit2, fruit3);


/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.
 */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction();

console.log(`El nombre del animalFunction es ${name}`);
console.log(`Y la raza es ${race}`);

/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.
 */

const car = {nameCar: 'Mazda 6', itv: [2015, 2011, 2020]}

const {nameCar, itv} = car;
console.log(`La marca del coche es ${nameCar}`);
console.log(`Y los años de itv son ${itv}`);

const [primeraItv, segundaItv, terceraItv] = car.itv;
console.log(`La primera itv fue en ${primeraItv}`);
console.log(`La segunda itv fue en ${segundaItv}`);
console.log(`Y la última la pasó en ${terceraItv}`);