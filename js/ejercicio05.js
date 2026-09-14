const ejecutarEjercicio05 = () => {
    // Obtener el valor de los datos del usuario
        let totalPreguntas = Number(prompt("Ingrese el total de preguntas"));
        let respuestasCorrectas = Number(prompt("Ingrese la cantidad de respuestas correctas"));
    
    // Validar que el total sea mayor que 0
        if (totalPreguntas <= 0) {
            resultado.innerHTML = "El total de preguntas debe ser mayor que 0";
            alert("El total de preguntas debe ser mayor que 0");
            return;
    };

    // Validar que las respuestas correctas sean validas
        if(respuestasCorrectas < 0 || respuestasCorrectas > totalPreguntas) {
            resultado.innerHTML = "La cantidad de respuestas correctas no es válida";
            alert("La cantidad de respuestas correctas no es válida");
            return;
    
    };
    // Calculamos el porcentaje
        let porcentaje = (respuestasCorrectas / totalPreguntas) * 100;

    // Variable para guardar la categoría
        let categoria;
    
    // Clasificación del rendimiento
        if (porcentaje >= 90) {
            categoria = "Excelente";
        }
        else if (porcentaje >= 70 && porcentaje < 90) {
            categoria = "Muy Bueno";
        }
        else if (porcentaje >= 50 && porcentaje < 70) {
            categoria = "Aprobado";
        }
        else {
            categoria = "Desaprobado";
        }
    
    // Mostrar el resultado
    
        alert("El rendimiento del estudiante es de " + porcentaje.toFixed(0) + "%. Su categoría es " + categoria);

    
    
}
