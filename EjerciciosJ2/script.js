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
    imprima la suma de lo últimos 5 valores ingresados.*/

    







