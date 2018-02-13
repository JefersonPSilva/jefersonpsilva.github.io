//https://github.com/igorescobar/jQuery-Mask-Plugin
//jquery mask plugin configuração mask form
$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000", {placeholder: "(00) 00000-0000"});
});

$(function(){
    //https://jqueryvalidation.org
    //jquery validation plugin
    jQuery.validator.addMethod("phoneBR", function(value, element) {
        return this.optional( element ) || /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test(value);
    }, "Este número de celular e inválido.");

    $("#formContato").validate({
        errorClass: "invalidoEmail",
        rules:{
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true,
                minlength: 2
            },
            assunto: {
                required: true,
                minlength: 2,
            },
            telefone:{
                phoneBR: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Por favor, informe seu email.",
                email: "Este email e inválido."
            },
            nome: {
                required: "Por favor, informe seu nome.",
                minlength: "Por favor, digite pelo menos 2 caracteres."
            },
            assunto: {
                required: "Por favor, informe do que se trata.",
                minlength: "Por favor, digite pelo menos 2 caracteres."
            },
            mensagem: {
                required: "Por favor, digite sua mensagem."
            }
        },
        submitHandler: function (form) {
            var formulario = $("#formContato").valid();
            if (formulario) {
                //EmailJS SMTP configuration
                //https://www.emailjs.com/
                emailjs.init("user_nPcjen9FAB5mMoXpExSKf");
                emailjs.send("jefersonpsilva_outlook","portf_lio_jeferson",{
                    nome: $("#nome").val(),
                    email: $("#email").val(),
                    mensagem: $("#mensagem").val(),
                    telefone: $("#telefone").val(),
                    notes: "https://jefersonpsilva.github.io/index.html"
                });
                $(".sucess_box").css("display", "block");
                $("#nome").focus(); 
            }
            return false;
        }
    });
});
