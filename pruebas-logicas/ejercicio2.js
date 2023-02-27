/*
tienes un arreglo con 20 elementos (enteros en el rango de 1 a 9). Escribe un
programa en el lenguaje preferido que imprima el número que tiene más
ocurrencias seguidas en arreglo y también imprimir la cantidad de veces que
aparece en la secuencia.
El programa debe analizar el arreglo de derecha a izquierda para que en caso de
que dos números cumplan la condición el que aparece por primera vez sea el que
se imprima.
La salida de los datos para el arreglo el ejemplo [1,2,2,5,4,6,7,8,8,8] sería la siguiente:
El número más repetido de forma seguida es el 8, se repitió 3 veces.
En el ejemplo, la secuencia más larga la tiene el número 8 con una secuencia
de tres ochos seguidos.
 */

const arreglo=[1,2,2,3,4,5,5,5,6,2,7,8,9,9,1,8,8,7,6,4,3,0,2,9,9,9,3,9,9,7,5,3,3,3,3,3,3,0,6,6]

const moreSecuence=(arreglo)=>{
    let currentNum = null;
    let currentCount = 0;
    let maxNum = null;
    let maxCount = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] !== currentNum) {
        currentNum = arreglo[i];
        currentCount = 1;
      } else {
        currentCount++;
      }
      
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxNum = currentNum;
      }
    }
return console.log(`El número más repetido de forma seguida es el ${maxNum}, se repitió ${maxCount} veces.`);

}
moreSecuence(arreglo)