/* Ejercicio 1 - Realizar un programa que imprima 25 términos de la serie
 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).

    for (let i = 11 ; i <= 275; i+=11) {
    console.log(i)
    }*/

/*Ejercicio 2 Mostrar los múltiplos de 8 hasta el valor 500. 
Debe aparecer en pantalla 8 -16 -24, etc.

    for (let i = 8 ; i <= 500; i+=8) {
    console.log(i)
    }*/
/*Ejercicio 3 Escribir un programa que lea 10 notas de alumnos y nos informe
cuántos tienen notas mayores o iguales a 7 y cuántos menores.

    let list = [3,4,65,6,43,3,43,43,43,43,543,5634,65,76,7,1];
    let aprove = 0;
    let unaprove = 0;

    for (let i = 0; i < list.length; i++) {
        if(list[i] >= 7) {
            aprove++
        } else if (list[i] < 7) {
            unaprove++
        }
    }

    console.log("Aprovados: " + aprove);
    console.log("No aprovados: " + unaprove);*/

/*Ejercicio4 Se ingresan un conjunto de 5 alturas 
de personas por teclado. Mostrar la altura promedio de las personas.

let list = [7,7,7,7,7,454,4543,4634];
let x = 0;

for (let i = 0; i < list.length; i++) {
    x+=((list[i])/list.length)
}

console.log(x)*/

/*Ejercicio5 En una empresa trabajan 5 empleados cuyos
sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos 
que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y 
cuántos cobran más de $300. Además el programa deberá informar el importe que gasta 
la empresa en sueldos al personal.

    let list = [100,200,300,400,500,450];
    let poor = 0;
    let millonarie = 0;
    let bills = 0;

    for (let i = 0; i < list.length; i++ ) {
        if (list[i] >= 100 && list[i] <= 300  ) {
            poor++;
            bills+=list[i]
        } else if (list[i] > 300 && list[i] <= 500) {
            millonarie++;
            bills+=list[i];
        }

    }

    console.log("Pobres: " + poor);
    console.log("Millonarios: " + millonarie);
    console.log("Gastos: " + bills)*/

/*Ejercicio6 Mostrar los múltiplos de 10 hasta el valor 1500. 
Debe aparecer en consola 10 - 20 -30 etc.


    for (i=10 ; i <= 1500; i+=10 ) {
        if (i % 10 === 0) {
            console.log(i)
        }
    }*/

/*Ejercicio7 Realizar un programa que permita cargar dos listas de 3 valores cada una. 
Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor 
(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales’)

Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.


    let list1 = [];
    let list2 = [];
  
    for (let i = 0; i <= 3; i++ ) {
        list1.push(Math.random());
        list2.push(Math.random());
    }

    let plus1 = 0;
    let plus2 = 0;
    
    for (let i = 0; i <= 3; i++) {
        plus1+=list1[i];
        plus2+=list2[i];
    }

    if (plus1 > plus2) {
        console.log("Lista 1 mayor")
    } else if (plus1 < plus2) {
        console.log("Lista 2 mayor")
    } else if (plus1 === plus2) {
        console.log("Lista iguales")
    }*/

/*Ejercicio8 Desarrollar un programa que permita cargar 5 números enteros y luego
 nos informe cuántos valores fueron pares y cuántos impares.

Emplear el operador "%" en la condición de la estructura condicional.
	if (valor%2==0)

El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2,
 retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.


    let list = [];
    let pair = 0;
    let odd = 0;
    
  
    for (let i = 0; i <= 5; i++ ) {
        list.push(parseInt(prompt("Ingrese numero: " + (i+1))));
        if ( list[i] % 2 === 0) {
            pair++
        } else {
            odd++
        }
       
    }


    console.log("Numero par: " + pair)
    console.log("Numero inpar: " + odd)*/

    /*Ejercicio9 Confeccionar un programa que lea 3 pares de datos, 
    cada par de datos corresponde a la medida de la base y la altura de un triángulo. 
    El programa deberá informar:

    De cada triángulo la medida de su base, su altura y su superficie.
    La cantidad de triángulos cuya superficie es mayor a 12.

        
        let objeto = [];
        let area = 0 ;
        

    for (let i = 1; i <= 3; i++) {
        let objet = {
            width: 0, 
            height: 0,
            area: 0,

         };               
         objet.width = parseFloat((prompt("Ingrese base: " + i)));  
         objet.height = parseFloat((prompt("Ingrese altura: " + i)));  
         objet.area = (objet.width * objet.height)/2;
         objeto.push(objet);
         if (objet.area > 12) {
            area++

         }

        
    }
    
    console.log(objeto);
    console.log("Cantidad de triangulos mayo a 12 mm cuadrados: " + area);*/

    /*Ejercicio10
    Desarrollar un programa que solicite la carga de 10 números e 
    imprima la suma de lo últimos 5 valores ingresados.

    let total = 0;
    

    for (let i = 1; i <= 10; i++) {
        let value = parseInt (prompt("Escribir numero: " + i))
        if (i > 5 ) {
            total+=value
        }
    }

    console.log(total)*/

        
    /*Ejercicio11

    Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).

    for (let i =0; i < 55; i+=5) {
        console.log(i)
    }*/

    /*Ejercicio12

    Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre 
    la tabla de multiplicar del mismo (los primeros 12 términos)
    Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

    let value = parseInt(prompt(`Ingresar numero`))

    for (let i = 1; i < 13; i++) {
        console.log(value * i)
    }*/

    /*Ejercicio 12

    Realizar un programa que lea los lados de 4 triángulos, e informar:

    De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), 
    isósceles (dos lados iguales), o escaleno (ningún lado igual)
    Cantidad de triángulos de cada tipo.
    Tipo de triángulo del que hay menor cantidad.


    let list = [];
    let equilatero = 0;
    let isoseles = 0;
    let escaleno = 0;

    for (let i = 1; i <= 4; i++ ) {
        let objet = {
            ladoA : parseInt(prompt("Triangulo numero " + i + " lado a.")),
            ladoB : parseInt(prompt("Triangulo numero " + i + " lado b.")),
            ladoC : parseInt(prompt("Triangulo numero " + i + " lado c.")),
        }
        list.push(objet)
        if (objet.ladoA === objet.ladoB && objet.ladoA === objet.ladoC ) {
            equilatero++
        } else if (objet.ladoA === objet.ladoB || objet.ladoA === objet.ladoC 
            || objet.ladoB === objet.ladoC) {
                isoseles++
            } else if ( objet.ladoA != objet.ladoB && objet.ladoA != objet.ladoC 
                && objet.ladoB != objet.ladoC) {
                    escaleno++
                }

    }

     console.log("Triangulos equilateros: " + equilatero);
     console.log("Triangulos isoseles: " + isoseles);
     console.log("Triangulos escalenos: " + escaleno);

     if (equilatero < isoseles && equilatero < escaleno ) {
        console.log("Menos numero de equilateros")
     } else if (isoseles < equilatero && isoseles < escaleno) {
        console.log("Menos numero de isoseles")
     } else if (escaleno < equilatero && isoseles > escaleno) {
        console.log("Menos numero de escaleno")
     }
*/

/*Ejercicio13

Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. 
Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. 
Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.


let list = [];

let primerCuadrante = 0;
let segundoCuadrante = 0;
let tercerCuadrante = 0;
let cuartoCuadrante = 0;
let puntoFrontera = 0;

let HOW_MUSH_DATE = parseInt(prompt("Cuantos puntos se van a ingresar?"));

for ( let i = 1; i <= HOW_MUSH_DATE; i++) {
    let objet = {
        x : parseInt(prompt("Ingresar coordenada x del punto nro:" + i )),
        y : parseInt(prompt("Ingresar coordenada y del punto nro:" + i )),
    };
    list.push(objet);
    if (objet.x > 0 && objet.y > 0) {
        primerCuadrante++
    } else if (objet.x > 0 && objet.y < 0) {
        segundoCuadrante++
    } else if (objet.x < 0 && objet.y < 0) {
        tercerCuadrante++
    } else if (objet.x < 0 && objet.y > 0) {
        cuartoCuadrante++
    } else if (objet.x === 0 || objet.y === 0) {
        puntoFrontera++
    }

}

console.log("Primer cuadrante: " +  primerCuadrante);
console.log("Segundo cuadrante: " +  segundoCuadrante);
console.log("Tercer cuadrante: " +  tercerCuadrante);
console.log("Cuarto cuadrante: " +  cuartoCuadrante);
console.log("Punto forntera: " +  puntoFrontera);*/

/*Ejercicio14

Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
La cantidad de valores negativos ingresados.
La cantidad de valores positivos ingresados.
La cantidad de múltiplos de 15.
El valor acumulado de los números ingresados que son pares.

let positiveValue = 0;
let negativeValue = 0;
let divisibleBy15 = 0;
let howManyPairs = 0;

    for (let i = 1; i <= 10; i++ ) {
        let number = parseInt(prompt("Ingresar numero: " + i))
        if (number < 0) {
            negativeValue++
        } else if (number > 0) {
            positiveValue++}
        if ( number % 15 ===0) {
            divisibleBy15++
        }
        if (number % 2 === 0 ) {
            howManyPairs+=number
        }
    }

    console.log(`Positivos: ${positiveValue}`);
    console.log(`Negativos: ${negativeValue}`);
    console.log(`Divisible entre 15: ${divisibleBy15}`);
    console.log(`Suma de los pares: ${howManyPairs}`);*/

    /*Ejercicio 15

    Se cuenta con la siguiente información:
    Las edades de 5 estudiantes del turno mañana.
    Las edades de 6 estudiantes del turno tarde.
    Las edades de 11 estudiantes del turno noche.
    Las edades de cada estudiante debe ingresar por teclado.

    Obtener el promedio de las edades de cada turno (tres promedios).
    Imprimir dichos promedios (promedio de cada turno).
    Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
    promedio de edades mayor.

    let morning = 0;
    let afternoon= 0;
    let evening= 0;

    for (let i = 1; i <= 22; i++) {
        if (i >= 1 && i <=5) {
            morning+=(parseFloat(prompt(`Ingresar edad estudiante turno mañana nro ${i}`)))/5

        } else if (i >= 6 && i <=11) {
            afternoon+=(parseFloat(prompt(`Ingresar edad estudiante turno tarde nro ${i-5}`)))/6
        }

        else if (i >= 12 && i <=22) {
        evening+=(parseFloat(prompt(`Ingresar edad estudiante turno noche nro ${i-11}`)))/11
    }
    }

    console.log(`Promedio turno mañana: ${morning}`)
    console.log(`Promedio turno tarde: ${afternoon}`)
    console.log(`Promedio turno noche: ${evening}`)

    if (morning > afternoon && morning && evening) {
        console.log(`El horario de la mañana tiene mayor promedio`)
    } else if (afternoon > morning && afternoon > evening) {
        console.log(`El horario de la tarde tiene mayor promedio`)
    } else if (evening > morning && evening > afternoon) {
        console.log(`El horario de la tarde tiene mayor promedio`)
    }*/

    //ARREGLOS

    /*Ejercicio 1

    Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
	El valor acumulado de todos los elementos del vector.
	El valor acumulado de los elementos del vector que sean mayores a 36.
	Cantidad de valores mayores a 50. 


    let vector = [];
    let total= 0;

    for ( let i = 0; i <= 8; i++) {
        let number = parseInt(prompt(`Igresar valor ${i+1}`));
        vector.push(number);
        total+=number;
        if (total > 36) {
            console.log(`A partir del valor ${i} es mayor que 36.`)
        };
        
    };
    if (total >= 50) {
        console.log(`El valor total es mayor que 50.`)
    };
    console.log(total);*/
   
    /*Ejercicio 2

    Realizar un programa que pida la carga de dos vectores numéricos. 
    Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer 
    vector del mismo tamaño. Sumar componente a componente.

    El tamaño del vector es a elección.


    let vector1 = [];
    let vector2 = [];
    let vector3 = []; 
    let numberOfValue = parseInt(prompt("Ingrese el numero de valores del vector."));

    for (let i = 0; i < numberOfValue; i++) {
        let number = parseInt(prompt("Ingrese el valor " + (i+1) + " del vector 1."));
        vector1.push(number)
    };
    for (let i = 0; i < numberOfValue; i++) {
        let number = parseInt(prompt("Ingrese el valor " + (i+1) + " del vector 2."));
        vector2.push(number);
    };
    for (let i = 0; i < numberOfValue; i++) {
        let number = vector1[i] + vector2[i];
        vector3.push(number);
    };

    console.log(vector1);
    console.log(vector2);
    console.log(vector3);*/

    






    
