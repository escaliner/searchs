import * as uk from "readline-sync";

const parrafo: string = `Urania. Qué nombre. A la gente le gusta, le parece sonoro, 
original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes,
 ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad,
 a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una
familia de dominicanos católicos, que adoraban a la Virgen del Rosario y
a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre.
 Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien,
 se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia.
 En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro.
 Cambiaron tanto.
`

//que 6 veces contadas a mano

// no reconoce la ñ

//crear una funcion que busque una palabra dentro del texto

const searchTxt: string = uk.question("ingrese palabra a buscar: ")

const result = searchText(parrafo, searchTxt);

function searchText(fullText: string, searchTerm: string): boolean {
    {
        return fullText.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    }
}
console.log(result);


function howManyTextInParraf(fullText: string, searchTxt: string): number {
    // guardamos en variables y los pasamos a minusculas para compararlos 
    const parrafoLower = fullText.toLocaleLowerCase();
    const wordLower = searchTxt.toLocaleLowerCase();

    let textoLimpio = parrafoLower.replace(/[.,/#!$%^&*;:{}=_`~()]/g, " ");
    //esta funcion reemplaza y quita toda la simbologia para limpiar las palabras
    // no cuenta las palabras acentuadas.

    // la propiedad split separa el texto "palabra x palabra"
    const words = textoLimpio.split(' ');

    // uso contador para guardar coincidencias entre fulltext y searchtext
    let count = 0;

    // recorremos con un for palbra por palabra
    for (const word of words) {

        // verificamos si hay conincidencias, en caso de haber el contador suma "1"
        if (word === wordLower) {
            count++;
        }
    }
    return count;
    // devolvemos un total de coincidencia   
}
howManyTextInParraf(parrafo, searchTxt)
console.log(howManyTextInParraf(parrafo, searchTxt))

// ts-node search.ts