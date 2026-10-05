const ejecutarEjercicio05 = () => {
    // Obtener el valor de los datos del usuario
        let totalPreguntas = Number(document.querySelector("#totalPreguntas").value);
        let respuestasCorrectas = Number(document.querySelector("#respuestasCorrectas").value);

    //Elemento donde se mostrará el resultado
        let resultado = document.querySelector("#resultado");

    // Validar que el total sea mayor que 0
        if (totalPreguntas <= 0) {
            resultado.innerHTML = "El total de preguntas debe ser mayor que 0";
            return;
    };

    // Validar que las respuestas correctas sean validas
        if(respuestasCorrectas < 0 || respuestasCorrectas > totalPreguntas) {
            resultado.innerHTML = "La cantidad de respuestas correctas no es válida";
            return;
    
    };
    // Validar que los campos no estén vacíos 
        if ( document.querySelector("#totalPreguntas").value === "" || 
        document.querySelector("#respuestasCorrectas").value === "" ) 
        { resultado.innerHTML = "Debe completar todos los campos."; 
        return; 

    };

    // Validar que sean números 
    if (isNaN(totalPreguntas) || isNaN(respuestasCorrectas)) {
        resultado.innerHTML = "Debe ingresar un valor numérico.";
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
        resultado.innerHTML = 
        "El rendimiento del estudiante es de " + porcentaje.toFixed(2) + 
        "%. Su categoría es: " + categoria; 
    
    
}
