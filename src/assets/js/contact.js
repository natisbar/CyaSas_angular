function ValidateFormContact() {
    var message = '';
    $("#loaderSender").show();
    var tema = $("#subject").val();
    if (tema == "" || tema == null) {
        message += message != '' ? '<br/>' : '';
        message += ' Asunto o tema es invalido. ';
    };
    var regex1 = new RegExp("[a-zA-Z0-9\s]$");
    var nombre = $("#firstname").val();
    if (nombre == "" || nombre == null || !regex1.test(nombre)) {
        message += message != '' ? '<br/>' : '';
        message += ' Nombre invalido. ';
    };
    var apellido = $("#lastname").val();
    if (apellido == "" || apellido == null || !regex1.test(apellido)) {
        message += message != '' ? '<br/>' : '';
        message += ' Apellido invalido. ';
    };
    var correo = $("#email").val();
    var regex2 = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    if (correo == "" || correo == null || !regex2.test(correo)) {
        message += message != '' ? '<br/>' : '';
        message += ' Correo electrónico invalido. ';
    };
    var telefono = $("#phone").val();
    if (telefono == "" || telefono == null || telefono.length < 10) {
        message += message != '' ? '<br/>' : '';
        message += ' Teléfono celular invalido. ';
    };
    var cuerpo = $("#message").val();
    if (cuerpo == "" || cuerpo == null || telefono.length < 4) {
        message += message != '' ? '<br/>' : '';
        message += ' Mensaje muy corto. ';
    };
    if (message != '') {
        $("#loaderSender").hide();
        document.getElementById('errorMessageLabel').innerHTML = message;
        $("#errorMessageDiv").show();
    }
    else {
        $("#errorMessageDiv").hide();
        SendEmail(tema, nombre, apellido, cuerpo, correo, telefono);
    }
};

function SendEmail(tema, nombreContacto, apellidoContacto, mensaje, correo, telefono) {
    ///uso de servidor https://dashboard.emailjs.com/admin
    var correoReceptorCya = 'jhon-h-mc@hotmail.com';
    var correoReceptor2Cya = '';
    var templateParams = {
        asunto: tema,
        nombre: nombreContacto,
        apellido: apellidoContacto,
        cuerpo_mensaje: mensaje,
        responder_a: correo,
        telefono: telefono,
        receptor_cya: correoReceptorCya,
        receptor2_cya: correoReceptor2Cya
    };
    emailjs.send('service_ir3ib2c', 'template_coad6f4', templateParams, '9CipNPzK_XO2quSGH') //use your Service ID and Template ID
        .then(function (response) {
            $("#loaderSender").hide();
            console.log('SUCCESS!', response.status, response.text);
            window.alert("Su mensaje ha sido enviado con éxito. Pronto recibirá respuesta de nuestro equipo C&A.");
            window.location.reload();
        }, function (error) {
            $("#loaderSender").hide();
            console.log('FAILED...', error);
            window.alert("Su mensaje no ha sido enviado con éxito. Por favor intente nuevamente o contacte directamente a nuestro equipo C&A.");
            window.location.reload();
        });
};

function ValidarNumerico(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
};
