const ejecutarEjercicio03 = () => {
    // Pedimos los datos
    let ciudad = prompt("Ingresa una ciudad:");
    let pais = prompt("Ingresa un país:");

    // Juntamos los textos
    let union = ciudad + ", " + pais;
    alert("Ciudad y país: " + union);

    // Contamos las letras de cada uno
    let largoCiudad = ciudad.length;
    let largoPais = pais.length;

    alert("Letras de la ciudad: " + largoCiudad + "\nLetras del país: " + largoPais);

    // Comparamos cuál es más grande
    if (largoCiudad > largoPais) {
        alert("La ciudad es más larga que el país.");
    } else {
        if (largoPais > largoCiudad) {
            alert("El país es más largo que la ciudad.");
        } else {
            alert("Tienen el mismo largo.");
        }
    }
};