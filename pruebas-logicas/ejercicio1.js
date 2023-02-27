/*
Escribe un programa en PHP, JS o Python que imprima una X construida a base de
los símbolos /, \ y X (barra, contrabarra y letra X) y utilizar un doble espacio cuando
no haya carácter.
El tamaño de la x se basa en una variable n que indicará la altura de la letra para
imprimir (en una matríz de n x n) por ejemplo:
para n = 5 se obtiene para n=6 se obtiene
 */




function imprimirX(n) {
    if (typeof n !== 'number' || n < 3 || n % 2 === 0) {
      console.error('ERROR El valor de n debe ser un número impar mayor o igual a 3');
      return;
    }
  
    // Creamos una matriz vacía de tamaño n x n
    const matrix = Array(n)
      .fill(null)
      .map(() => Array(n).fill('  '));
  
    // Rellenamos la matriz con las barras y contrabarras
    for (let i = 0; i < n; i++) {
      matrix[i][i] = ' /';
      matrix[i][n - i - 1] = ' \\';
    }
  
    // Imprimimos la matriz
    for (let i = 0; i < n; i++) {
      console.log(matrix[i].join(''));
    }
  }
  

  printX(7);