
alert("Bienvenido a mi sitio web")


const nombre  = prompt ("hola, ¿Cuál es tu nombre?")
console.log(nombre)

let curso = prompt (" ¿Cuál es tu apellido?")
console.log(curso)

//edad//
let numberA= parseInt(prompt("Ingrese el año de su nacimiento"))

let resultado=(2026 - numberA)

console.log(resultado)
alert("Hola," + nombre + ", tenes " + resultado + " años");

// condicionales

let edad = 18;

if (edad >= 18) {
console.log("Ahora si, estas dentro del mejor sitio");
}

else {
   console.log("No podes entrar"); 
}

let dinero = Number(prompt("¿Cuánto dinero tenés?"));

for (let i = 1; i <= 5; i++) {

let precio = Number(prompt(" ingrese el precio de algun producto" + i));

if (precio === dinero) {

    console.log("Gracias por tu compra! Gastaste todo tu dinero.");
} 
  
else if (precio < dinero) {
 console.log("Te alcanzó para comprar el producto " + i);
 dinero = dinero - precio;
    console.log("Te quedan $" + dinero);
 }
    
 else {
    console.log("No podés comprar el producto " + i + " porque no te alcanza.");
  }
   }