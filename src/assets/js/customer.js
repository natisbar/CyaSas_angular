function ValidateForm() {
    var message = '';
    $("#loaderSender").show();
    var tipoCertificado = $("#certificationType").val();
    var nombreCertificado = $("#certificationType option:selected").text();
    if (tipoCertificado == "" || tipoCertificado == null) {
        message += message != '' ? '<br/>' : '';
        message += ' Tipo de certificado sin seleccionar. ';
    };
    var tipoIdentificacion = $("#identificationType").val();
    if (tipoIdentificacion == "" || tipoIdentificacion == null) {
        message += message != '' ? '<br/>' : '';
        message += ' Tipo de identificación sin seleccionar. ';
    };
    var numeroIdentificacion = $("#identificationNumber").val();
    var regex1 = new RegExp("[a-zA-Z0-9]{4,18}$");
    if (numeroIdentificacion == "" || numeroIdentificacion == null || !regex1.test(numeroIdentificacion)) {
        message += message != '' ? '<br/>' : '';
        message += ' Número de identificación invalido. ';
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
    if (message != '') {
        $("#loaderSender").hide();
        document.getElementById('errorMessageLabel').innerHTML = message;
        $("#errorMessageDiv").show();
    }
    else {
        $("#errorMessageDiv").hide();
        SendEmail(tipoCertificado, nombreCertificado, tipoIdentificacion, numeroIdentificacion, correo, telefono);
    }
};

function SendEmail(tipoCertificado, nombreCertificado, tipoIdentificacion, numIdentificacion, correo, telefono) {
    ///uso de servidor https://dashboard.emailjs.com/admin
    var correoReceptorCya = 'jhon-h-mc@hotmail.com';
    var correoReceptor2Cya = '';
    var templateParams = {
        tipo_certificado: tipoCertificado,
        nombre_certificado: nombreCertificado,
        tipo_documento: tipoIdentificacion,
        numero_documento: numIdentificacion,
        responder_a: correo,
        telefono: telefono,
        receptor_cya: correoReceptorCya,
        receptor2_cya: correoReceptor2Cya
    };
    emailjs.send('service_ir3ib2c', 'template_mpzw6zo', templateParams, '9CipNPzK_XO2quSGH') //use your Service ID and Template ID
        .then(function (response) {
            $("#loaderSender").hide();
            console.log('SUCCESS!', response.status, response.text);
            window.alert("La solicitud ha sido enviada con éxito. Pronto recibirá respuesta de nuestro equipo C&A.");
            window.location.reload();
        }, function (error) {
            $("#loaderSender").hide();
            console.log('FAILED...', error);
            window.alert("La solicitud no ha sido enviada con éxito. Por favor intente nuevamente o contacte directamente a nuestro equipo C&A.");
            window.location.reload();
        });
};

function ValidarNumerico(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
};
