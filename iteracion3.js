//TERMINADO, PERO PREGUNTA EN EL 3.5

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const newPoitsList = [...pointsList];



// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const newToy = {...toy};


// 3.3 Dado los siguientes arrays, crea un nuevo array juntándolos usando 
// spread operatos
const pointsLis1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newPointsLis = [...pointsLis1, ...pointsLis2];
console.log(newPointsLis);


// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToyObject = {...toy1, ...toyUpdate};
console.log(newToyObject);


// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operator.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsNewArray = [...colors];
colorsNewArray.splice(2,1);

console.log(colorsNewArray);



//Pregunta con .splice()
//===============================?????

const colorsArray2 = [...colors].splice(2,1); // No entiendo por qué devuelve 'amarillo'
console.log(colorsArray2);

const pruebaArray = [1, 2, 3, 4, 5, 6].splice(2,1);
console.log(pruebaArray);