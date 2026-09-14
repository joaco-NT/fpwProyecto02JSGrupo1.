const ejecutarEjercicio02 = () => {

    let base = parseFloat(prompt("Ingresa la base del triángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

    let area = (base * altura) / 2;

    alert("El área del triángulo es: " + area);
};