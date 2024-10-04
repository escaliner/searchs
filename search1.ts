import * as uk from "readline-sync";

const parrafo: string = `El muchacho se llamaba Santiago. Comenzaba a oscurecer cuando llegó
con su rebaño frente a una vieja iglesia abandonada. El techo se había
derrumbado hacía mucho tiempo y un enorme sicómoro había crecido en el
lugar que antes ocupaba la sacristía.
Decidió pasar allí la noche. Hizo que todas las ovejas entrasen por la
puerta en ruinas y luego colocó algunas tablas de manera que no pudieran
huir durante la noche. No había lobos en aquella región, pero cierta vez una
se había escapado por la noche y él se había pasado todo el día siguiente
buscando a la oveja prófuga.
Extendió su chaqueta en el suelo y se acostó, usando el libro que
acababa de leer como almohada. Recordó, antes de dormir, que tenía que
comenzar a leer libros más gruesos: se tardaba más en acabarlos y
resultaban ser almohadas más confortables durante la noche.
Aún estaba oscuro cuando se despertó. Miró hacia arriba y vio que las
estrellas brillaban a través del techo semiderruido.
«Hubiera querido dormir un poco más», pensó. Había tenido el mismo
sueño que la semana pasada y otra vez se había despertado antes del final.
Se levantó y tomó un trago de vino. Después cogió el cayado y empezó
a despertar a las ovejas que aún dormían. Se había dado cuenta de que, en
cuanto él se despertaba, la mayor parte de los animales también lo hacía.
Como si hubiera alguna misteriosa energía que uniera su vida a la de
aquellas ovejas que desde hacía dos años recorrían con él la tierra, en busca
de agua y alimento. «Ya se han acostumbrado tanto a mí que conocen mis
horarios», dijo en voz baja. Reflexionó un momento y pensó que también
podía ser lo contrario: que fuera él quien se hubiese acostumbrado al
horario de las ovejas.
Algunas de ellas, no obstante, tardaban un poco más en levantarse; el
muchacho las despertó una por una con su cayado, llamando a cada cual por
su nombre. Siempre había creído que las ovejas eran capaces de entender lo
que él les decía. Por eso de vez en cuando les leía fragmentos de los libros
que le habían impresionado, o les hablaba de la soledad y de la alegría de
un pastor en el campo, o les comentaba las últimas novedades que veía en
las ciudades por las que solía pasar.
En los dos últimos días, sin embargo, el asunto que le preocupaba no
había sido más que uno: la hija del comerciante que vivía en la ciudad
adonde llegarían dentro de cuatro días. Sólo había estado allí una vez, el
año anterior. El comerciante era dueño de una tienda de tejidos y le gustaba
presenciar siempre el esquileo de las ovejas para evitar falsificaciones. Un
amigo le había indicado la tienda, y el pastor llevó allí sus ovejas.
—Necesito vender lana —le dijo al comerciante.
La tienda del hombre estaba llena, y el comerciante rogó al pastor que
esperase hasta el atardecer. El muchacho se sentó en la acera de enfrente de
la tienda y sacó un libro de su zurrón
`

//ovejas 7
//ovejas muestra 5, las 2 que terminan la horacion y terminan en . no las cuenta (preguntar/averiguar xq)
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