//TERMINADO

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let notaExamenes = exams.reduce((acc, exam) => acc + exam.score, 0);


//Con otra sintaxis (funcion):
/* let notaExamenes = exams.reduce(function (acc, exam) {
    return acc + exam.score
},0);
 */
console.log(notaExamenes);


// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

let sumaAprobados = exams.reduce(function(acc, aprobado){
    if(aprobado.score >= 5){
        return acc + aprobado.score;
    }else{
        return acc;
    };
},0);

console.log(`Suma total de aprobados ${sumaAprobados}`);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

let notaMedia = exams.reduce((acum, act) => acum + act.score / exams.length, 0);

console.log(notaMedia);