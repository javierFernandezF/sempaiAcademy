    //  Si el usuario es menor de 18 años, le saldrá, debajo de su nombre completo y año de nacimiento, el mensaje: 
    // “Eres menor de edad, no podemos darte de alta hasta el año XXXX” 
    
    // Si es mayor de 18 años y menor de 25, le saldrá el mensaje: “Tienes un 10% de descuento”
    // Si es mayor de 25 años, le saldrá el mensaje: “Lo sentimos, pero no tienes descuento”
    // Si tiene justo 18 o 25 años, le saldrá el mensaje: “Premio, tienes un descuento especial del 20%”

    //let name = prompt("Cual es tu nombre?");
    let age = parseInt(prompt("Cual es tu edad?"));
    let year = 2022
    let yearForBeOld = 2022 + 18 - age


    if (age < 18) {
        console.log("Eres menor de edad, no podemos darte de alta hasta el año " + yearForBeOld)
    } else if (age > 18 && age < 25) {
        console.log("Tienes un 10% de descuento")
    } else if (age > 25) {
        console.log("Lo sentimos, pero no tienes descuento")
    } else if (age === 25 || age === 18) {
        console.log ("Premio, tienes un descuento especial del 20%")
    } else {
        console.log("Lo sentimos, el valor ingresado de edad no es correcto.")
    }