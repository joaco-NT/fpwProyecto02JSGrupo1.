const ejecutarEjercicio04 = () => {
    // Pedimos la cadena al usuario (ejemplo: "3?4?1")
    let cadena = prompt("Ingresa una cadena intercalada (ej: 3?4?1):");

    // Creamos una variable vacía para guardar la nueva cadena
    let resultado = "";

    // Recorremos la cadena letra por letra usando un ciclo for
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        // Si encontramos un signo de pregunta, sumamos sus vecinos
        if (caracter === "?") {
            // El vecino de la izquierda está en la posición anterior (i - 1)
            // El vecino de la derecha está en la posición siguiente (i + 1)
            let vecinoIzquierda = parseInt(cadena[i - 1]);
            let vecinoDerecha = parseInt(cadena[i + 1]);

            // Sumamos los dos números
            let suma = vecinoIzquierda + vecinoDerecha;

            // Agregamos la suma a nuestro resultado
            resultado = resultado + suma;
        } else {
            // Si es un número normal, lo dejamos como está
            resultado = resultado + caracter;
        }
    }

    // Mostramos el resultado final en un alert
    alert("Cadena original: " + cadena + "\nCadena nueva: " + resultado);
};