const ejecutarEjercicio01 = () => {
    let letra1 = prompt("Ingresa la primera letra:");
    let letra2 = prompt("Ingresa la segunda letra:");
    if (letra1 && letra2) {
        if (letra1 < letra2) {
            alert(`La letra "${letra1}" está ubicada antes que "${letra2}".`);
        } else if (letra1 > letra2) {
            alert(`La letra "${letra1}" está ubicada después de "${letra2}".`);
        } else {
            alert(`Ambas letras son idénticas ("${letra1}").`);
        }
    } else {
        alert("Por favor, ingresa un valor válido para ambas letras.");
    }
};