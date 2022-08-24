//Crear un formulario con tres botones con las leyendas "1", "2" y "3". 
//Mostrar un mensaje indicando qué botón se presionó.


let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");

let functionOne = () => console.log("Boton uno precionado") ;
let functionTwo = () => console.log("Boton dos precionado") ;
let functionThree = () => console.log("Boton tres precionado") ;



buttonOne.addEventListener("click", functionOne);
buttonTwo.addEventListener("click", functionTwo);
buttonThree.addEventListener("click", functionThree);

