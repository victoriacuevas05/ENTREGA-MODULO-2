alert("Bienvenido a mi sitio web de pelis");

const nombre = prompt("Hola, ¿cuál es tu nombre?");
console.log(nombre);

let apellido = prompt("¿Cuál es tu apellido?");
console.log(apellido);

// Edad
let añoNacimiento = parseInt(prompt("Ingrese el año de su nacimiento"));

let edad = 2026 - añoNacimiento;

console.log(edad);

alert("Hola, " + nombre + ", tenés " + edad + " años");

// Tiempo disponible
let tiempo = Number(prompt("¿Cuántos minutos tenés disponibles?"));

let continuar = true;

while (continuar) {

    let opcion = prompt(
        "Hola " + nombre + "\n\n" +
        "¿Qué querés hacer?\n" +
        "1. Elegir una película\n" +
        "2. Ver todas las categorías\n" +
        "3. Salir"
    );

    switch (opcion) {

        case "1":

            for (let i = 1; i <= 5; i++) {

                let genero = prompt(
                    "Intento " + i + " de 5.\n\n" +
                    "¿Qué género querés ver?\n" +
                    "1. Terror\n" +
                    "2. Comedia\n" +
                    "3. Romance\n" +
                    "4. Acción"
                );

                switch (genero) {

                    case "1":

                        if (edad >= 18 && tiempo >= 120) {
                            alert("Te recomiendo: Obsesión");
                        } else if (edad < 18) {
                            alert("No podés ver esta película porque es para mayores de 18 años.");
                        } else {
                            alert("No tenés suficiente tiempo para ver esta película.");
                        }

                        break;

                    case "2":

                        if (tiempo >= 90) {
                            alert("Te recomiendo: Son como niños");
                        } else {
                            alert("No tenés suficiente tiempo para ver esta película.");
                        }

                        break;

                    case "3":

                        alert("Te recomiendo: Mensajes de voz para Isabelle");
                        break;

                    case "4":

                        alert("Te recomiendo: Maze Runner");
                        break;

                    default:

                        alert("No elegiste una opción válida.");
                }

                let otra = prompt(
                    "¿Querés buscar otra película?\n" +
                    "1. Sí\n" +
                    "2. No"
                );

                if (otra === "2") {
                    break;
                }
            }

            break;

        case "2":

            alert(
                "Categorías disponibles:\n" +
                "Terror\n" +
                "Comedia\n" +
                "Romance\n" +
                "Acción"
            );

            break;

        case "3":

            alert("¡Gracias por usar el simulador, " + nombre + "!");
            continuar = false;

            break;

        default:

            alert("Opción inválida. Elegí 1, 2 o 3.");
    }
}