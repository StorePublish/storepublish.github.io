function mostrarMenuLateral(){
    const sidebar= document.querySelector('.menuLateral')
    sidebar.style.display = "flex"
}
function ocultarMenuLateral(){
    const sidebar = document.querySelector('.menuLateral')
    sidebar.style.display = "none"
}
function actualizarVisibilidadMenu() {
    var anchoVentana = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var menuLateral = document.querySelector('.menuLateral');

    if (anchoVentana > 800) {
        // Si el ancho de la ventana es mayor a 800px, mostrar el menú lateral
        menuLateral.style.display = 'none';
    }
}
// Llamar a la función inicialmente y luego en cada cambio de tamaño de la ventana
actualizarVisibilidadMenu();

// Agregar un listener para el evento 'resize'
window.addEventListener('resize', actualizarVisibilidadMenu);

//VALIDACION DE FORMULARIO
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('numero_contacto').value;
    var politicasCheckbox = document.getElementById('Politicas_Privacidad');

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validar que el nombre tenga más de 5 caracteres
    if (nombre.length <= 5) {
        alert('El nombre debe tener más de 5 caracteres.');
        return false;
    }

    // Validar que el teléfono solo contenga números
    var telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('El número de teléfono solo puede contener números.');
        return false;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Validar que se haya aceptado las políticas de privacidad
    if (!politicasCheckbox.checked) {
        alert('Debes aceptar las Políticas de Privacidad.');
        return false;
    }

    // Si todo está bien, el formulario se enviará
    return true;
}
ScrollReveal({ reset: true });
window.sr = ScrollReveal();

    sr.reveal(".arriba" , {
        duration: 1500,    
        origin: "top",
        distance: "-100px"
    });
    sr.reveal(".abajo" , {
        duration: 1500,    
        origin: "bottom",
        distance: "-100px"
    });
    sr.reveal(".izquierda" , {
        duration: 1500,    
        origin: "right",
        distance: "-100px"
    });
    sr.reveal(".derecha" , {
        duration: 1500,    
        origin: "left",
        distance: "-10px"
    });