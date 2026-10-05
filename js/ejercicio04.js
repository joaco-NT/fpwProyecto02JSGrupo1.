const ejecutarEjercicio04 = () => {
    let cadena = prompt("Ingresa una cadena (ejemplo: 3?4?1):");
    
    if (cadena !== null) {
        
        const reemplazarInterrogaciones = (str) => {
            if (str.length % 2 === 0) {
                return "Error: La cantidad de caracteres debe ser impar.";
            }

            let resultado = "";

            for (let i = 0; i < str.length; i++) {
                let letra = str[i];

                if (i % 2 === 0) {
                    if (letra < "0" || letra > "5") {
                        return "Error: Los números deben estar entre 0 y 5 inclusive.";
                    }
                    resultado = resultado + letra;
                } else {
                    if (letra !== "?") {
                        return "Error: Los caracteres deben estar intercalados con '?'";
                    }

                    let numeroIzquierda = parseInt(str[i - 1]);
                    let numeroDerecha = parseInt(str[i + 1]);
                    let suma = numeroIzquierda + numeroDerecha;

                    resultado = resultado + suma;
                }
            }

            return resultado;
        };

        let respuesta = reemplazarInterrogaciones(cadena);
        alert(respuesta);
    }
};