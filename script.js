function generarCorreoYContrasena() {
    const estado = document.getElementById("state").value; // Obtener el valor del estado
    const generoSeleccionado = document.getElementById("genero").value; // Obtener el valor del género seleccionado
    const curp = document.getElementById("curp").value; // Obtener la CURP

    if (curp.length < 10) {
        alert("Por favor, ingrese una CURP válida.");
        return;
    }

    // Obtener el género de la CURP (décimo carácter)
    const generoCurp = curp.charAt(10).toUpperCase();

    // Verificar que el género de la CURP coincida con el seleccionado
    if (generoCurp !== generoSeleccionado) {
        alert("El género seleccionado no coincide con el género de la CURP.");
        return;
    }

    // Formato de correo y contraseña con el género
    const correo = `${estado}${generoSeleccionado}${curp.slice(0, 10)}@inea.gob.mx`;
    const contrasena = `${curp.slice(0, 4)}@${curp.slice(4, 10)}`;

    // Función para reemplazar la última letra por 'X' si es una palabra inadecuada
    const palabrasInadecuadas = ["malo", "feo"]; // Añade palabras inadecuadas aquí

    function verificarPalabraInadecuada(texto) {
        for (let palabra of palabrasInadecuadas) {
            if (texto.toLowerCase().includes(palabra)) {
                return texto.slice(0, -1) + 'X';
            }
        }
        return texto;
    }

    // Verificación de correo y contraseña
    const correoFinal = verificarPalabraInadecuada(correo);
    const contrasenaFinal = verificarPalabraInadecuada(contrasena);

    // Mostrar resultados
    document.getElementById("resultadoCorreo").innerText = `Correo: ${correoFinal}`;
    document.getElementById("resultadoContrasena").innerText = `Contraseña: ${contrasenaFinal}`;
    document.querySelector(".result").style.display = "block";
}

