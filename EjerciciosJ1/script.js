/*Ejercicio1

    Realizar un programa que pida cargar una fecha cualquiera, fhtrhtr
    luego verificar si dicha fecha corresponde a Navidad
    (se debe cargar por separado el día, el mes y el año)


    let day = parseInt(prompt("Ingresar dia"));
    let mounth = parseInt(prompt("Ingresar mes"));
    let year = prompt("Ingresar año");

    const chrismasDay = 25;
    const chrismasMounth = 1252;

    if (day === chrismasDay && mounth === chrismasMounth ) {
    console.log("Es navidad!")
    } else {
    console.log("No es navidad!")
    }*/ 

/*Ejercicio 2 
    Se ingresan tres valores por teclado, si todos son iguales se 
    imprime la suma del primero con el segundo y a este resultado 
    se lo multiplica por el tercero (tener en cuenta que puede haber 
    tres condiciones simples). En el caso que no sean iguales, 
    solo indica que los números no son iguales

    let firstNumber = parseInt(prompt("ingresar primer numero"));
    let secondNumber = parseInt(prompt("ingresar segundo numero"));
    let thirdNumber = parseInt(prompt("ingresar tercer numero"));

    if (firstNumber === secondNumber && secondNumber === thirdNumber) {
        console.log((firstNumber+secondNumber)*thirdNumber)
    } else {
        console.log("Los numero son diferentes")
    }*/

/*Ejercicio 3
    Se ingresan por teclado tres números, si todos los valores 
    ingresados son menores a 10, imprimir en la página la leyenda
     ' Todos los números son menores a diez'.

     let firstNumber = parseInt(prompt("ingresar primer numero"));
    let secondNumber = parseInt(prompt("ingresar segundo numero"));
    let thirdNumber = parseInt(prompt("ingresar tercer numero"));

    if (firstNumber < 10 && secondNumber < 10 && thirdNumber < 10) {
        console.log("Todos los números son menores a diez")
    } else {}*/

/*Ejercicio 4

    Escribir un programa que pida ingresar la coordenada de un
     punto en el plano, es decir dos valores enteros x e y.
    Posteriormente imprimir en pantalla en qué cuadrante se ubica
     dicho punto. 
     (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)

     let xPosition = parseInt(prompt("ingresar coordenada X")); 
     let yPosition = parseInt(prompt("ingresar coordenada Y"));
     
     if (xPosition > 0 && yPosition > 0) {
        console.log("Cuadrante 1")
     } else if (xPosition < 0 && yPosition > 0){
        console.log("Cuadrante 2")
     } else if (xPosition < 0 && yPosition < 0) {
        console.log("Cuadrante 3")
     } else if (xPosition > 0 && yPosition < 0) {
        console.log("Cuadrante 4")
     } */

/* Ejercicio 5

     De un operario se conoce su sueldo y los años de antigüedad. 
     Se pide confeccionar un programa que lea los datos de entrada e informe
	a. Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
     otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
	b. Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años,
     otorgarle un aumento de 5 %.
	c. Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
    

    let salary = parseInt (prompt("Ingresar salario."))
    let old = parseInt (prompt("Ingresar años de antiguedad." ))

    if (salary < 500 && old >= 10 ) {
        console.log("Felicidades, tu salario aumento un 20%. Ahora es: " + salary * 1.2)
    } else if (salary < 500 && old <= 10  ) {
        console.log("Felicidades, tu salario aumento un 5%. Ahora es: " + salary * 1.05)
    } else if (salary >= 500) {
        console.log ("Tas zarpado en plata negro, tu sueldo sigue siendo: " + salary)
    }
    */

/* Ejercicio 6

    Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete
    mostrar el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio
    debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
    Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado
    a entero podemos hacer:
    nota1=prompt('Ingrese primer nota:','');
    nota1=parseInt(nota1);
    O en forma más corta:
	nota1=parseInt(prompt('Ingrese primer nota:',''));

    let firstCalification = parseInt(prompt("Ingrese primer nota."));
    let secondCalification = parseInt(prompt("Ingrese segunda nota"));
    let thirdCalification = parseInt(prompt("Ingrese tercer nota."));

    let average = (firstCalification+secondCalification+thirdCalification)/3

    if ( average >= 7) {
        console.log("Promocionado")
    } else {
        console.log ("A febrero, noemo.")
    } */

/* Ejercicio 7

    Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son
    iguales (tener en cuenta que para ver si dos variables tienen el mismo 
    valor almacenado debemos utilizar el operador ==)
    let key1 = prompt ("Ingresar clave.");
    let key2 = prompt ("Volver a escribir");

    if (key1 === key2) {
        console.log("Clave guardada")
    } else {
        console.log("Claves no coinciden.")
    }*/

/*Ejercicio 8

    Realizar un programa que lea por teclado dos números, si el primero es mayor
    al segundo informar su suma y diferencia, en caso contrario informar el producto
    y la división del primero respecto al segundo.

    let firstNumber = parseInt(prompt("Entregar primer numero."));
    let secondNumber = parseInt(prompt("Entregar segundo numero."));

    if (firstNumber > secondNumber) {
    console.log("Su suma es: " + (firstNumber + secondNumber) + " y su diferencia es: " + (secondNumber-firstNumber))
    } else if (firstNumber < secondNumber) {
    console.log("Su producto es " + (firstNumber*secondNumber) + " y su division es: " + (secondNumber/firstNumber))
    }*/

/*Ejercicio 9

    Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar
    un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir
    a entero con parseInt para preguntar posteriormente por una variable entera). 
    Tener en cuenta qué condición debe cumplirse para tener dos dígitos un 
    número entero.

    let number = parseInt(prompt("Ingrese un numero positivo.")); 

    if (number > 0 && number < 10) {
    console.log("El numero tiene un solo digito") 
    } else if (number > 9 && number < 100  ) {
    console.log("El numero tiene dos digitos")
    } else if (number <= 0 || number >= 100) {
        console.log("El numero debe estar en el intervalo 1 al 99")
    } else {
        console.log("No se ingreso un caracter de numero")
    }*/

/*Ejercicio 10

    Se cargan por teclado tres números distintos. 
    Mostrar por pantalla el mayor de ellos.

    let numberOne = parseFloat(prompt("Ingresar primer numero"));
    let numberTwo = parseFloat(prompt("ingresar numero dos"));
    let numberthree = parseFloat(prompt("Ingresar numero tres"));

    if (numberOne >= numberTwo && numberOne >= numberTwo) {
        console.log("El numero mayor es: " + numberOne) 
    } else if (numberTwo >= numberOne && numberTwo >= numberthree) {
        console.log("El numero mayor es: " + numberTwo)
    } else if (numberthree >= numberOne && numberthree >= numberTwo) {
        console.log("El numero mayor es: " + numberthree)
    } else {
        console.log("Escribiste cualquiera ñery")
    }*/

/*Ejercicio 11

    Se ingresa por teclado un valor entero, mostrar una leyenda
     que indique si el número es positivo, cero o negativo.

     let number = parseInt(prompt("Escribir numero"))

     if (number < 0) {
        console.log("Numero negativo")
     } else if (number === 0 ) {
        console.log("El numero es 0")
     } else if (number > 0) {
        console.log("El numero es positivo")
     } else {
        console.log("Escribiste cualquiera ñery")
     }*/

/*Ejercicio 12

     Confeccionar un programa que permita cargar un número entero positivo
     de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

     let number = parseInt(prompt("Ingresar un numero entero positivo de 1 a 999"));

     if (number > 0 && number < 10) {
        console.log("El numero tiene una cifra")
     } else if (number > 9 && number < 100) {
        console.log("El numero tiene dos cifras")
     } else if (number > 99 && number < 999) {
        console.log("El numero tiene tres cifras")
     } else {
        console.log("Escribiste cualquiera vieja")
     }*/

/*Ejercicio 13 

    De un postulante a un empleo, que realizó un test de capacitación,
    se obtuvo la siguiente información: nombre del postulante, cantidad total
    de preguntas que se le realizaron y cantidad de preguntas que contestó 
    correctamente. Se pide confeccionar un programa que lea los datos del 
    postulante e informe el nivel del mismo según el porcentaje de respuestas 
    correctas que ha obtenido, y sabiendo que:
    Nivel superior: Porcentaje>=90%.
    Nivel medio: Porcentaje>=75% y <90%.
    Nivel regular: Porcentaje>=50% y <75%.
    Fuera de nivel: Porcentaje<50%.

    let questions = parseInt(prompt("Ingresar numero de preguntas"));
    let trueQuestion = parseInt(prompt("Ingresar numero de preguntas correctas"));

    if (trueQuestion < questions) {
        if ((trueQuestion / questions) < 0.5)  {
            console.log("Fuera de nivel")
        } else if ((trueQuestion / questions) >= 0.5 && (trueQuestion / questions) < 0.75 ) {
            console.log("Regular")
        } else if ((trueQuestion / questions) >= 0.75 && (trueQuestion / questions) < 0.9) {
            console.log("Medio")
        } else if ((trueQuestion / questions) >= 0.9 && (trueQuestion / questions) <= 1 ) {
            console.log("Superior")
        } else if ((trueQuestion/questions) > 1) {
            console.log("Valor invalido")
        }
    } else {
        console.log("Valor invalido")
    }*/

/*Ejercicio 14

    Se ingresan por teclado tres números, si al menos uno de los valores ingresados
    es menores a 10, imprimir en la página la leyenda 'Alguno de los números es 
    menor a diez'

    let value1 = parseInt(prompt("Valor 1"));
    let value2 = parseInt(prompt("Valor 2"));
    let value3 = parseInt(prompt("Valor 3"));

    if (value1 < 10 || value2 < 10 || value3 < 10) {
        console.log("Alguno de los números es menor a diez")
    } */

/*Ejercicio 14 (bis)

    Se ingresan por teclado dos números, mostrar en pantalla el mayor de los 2. 
    Si son iguales mostrar el mensaje “son iguales”.

    let value1 = parseInt(prompt("Valor 1"));
    let value2 = parseInt(prompt("Valor 2"));

    if (value1 > value2) {
        console.log(value1)
    } else if (value1 < value2) {
        console.log(value2) 
    } else if (value1 === value2) {
        console.log("Los valores son iguales.")
    }*/

/*Ejercicio 15

    Se ingresan por teclado tres números (largo, ancho y alto)
     y se calcular el volumen de esa caja.

    let length = parseFloat(prompt("Largo"));
    let height = parseFloat(prompt("Alto"));
    let width = parseFloat(prompt("Ancho"));
    console.log(length*height*width)*/

/*Ejercicio16

    PRECONDICIÓN: 
    La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
    El precio de todos los productos es múltiplo de 5
    La máquina soporta solo billetes uruguayos (50, 100, 200, 500, 1.000, 2.000)


    Se ingresa el valor del producto (múltiplo de 5).
    Se ingresa el dinero entregado en la máquina.
    Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.
    En caso que el cambio no alcance se imprime “no hay cambio suficiente”*/

    let product = parseInt(prompt("Ingrese valor del producto."));
    let money = parseInt(prompt("Ingresar dinero entregado."));
    let subtraction = money - product

         if ((product % 5) != 0 && money > 0 && (money % 50) === 0) {
            console.log("El valor del producto debe ser multiplo de 5")
        } else if ((product % 5) != 0 && money <= 0 && (money % 50) === 0) {
            console.log("El valor del producto debe ser multiplo de 5, el valor ingresado de dinero no es valido.")
        } else if ((product % 5) === 0 && money <= 0 && (money % 50) === 0) {
            console.log("El valor ingresado de dinero es invalido.")
        } else if ((product % 5) === 0 && money <= 0 && (money % 50) != 0) {
            console.log("El valor ingresado de dinero es invalido.")
        } else if ((product % 5) === 0 && money === 0 && (money % 50) != 0) {
            console.log("El valor ingresado de dinero es invalido.")
        } else if ((product % 5) != 0 && money <= 0 && (money % 50) != 0) {
            console.log ("Todo pal orto escribiste")
        }   else if ((product % 5) === 0 && money <= 0 && (money % 50) === 0) {
            console.log ("El valor ingresado de dinero es invalido")
        }   else if ((product % 5) === 0 && money > 0 && (money % 50) === 0) {
            if (subtraction > 550) {
                console.log("La maquina no tiene cambio suficiente.")
            } else if (subtraction <= 300 && (subtraction % 10) === 0 ) {
                console.log("El cambio seran " + (subtraction/10) + " monedas de 10.")
            }  else if (subtraction <= 300 && (subtraction % 10) != 0 ) {
                console.log("El cambio seran " + (subtraction/10) + " monedas de 10 mas 1 moneda de 5.")
            } else if (subtraction > 300 && subtraction <=550) {
                console.log("El cambio seran 30 monedas de 10 mas " + ((subtraction-300)/5) + " monedas de 5.")
            }
        }

        









        