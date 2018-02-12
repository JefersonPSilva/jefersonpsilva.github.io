//https://github.com/igorescobar/jQuery-Mask-Plugin
//jquery mask plugin configuração mask form
$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000", {placeholder: "(00) 00000-0000"});

    (function(){
        emailjs.init("user_nPcjen9FAB5mMoXpExSKf");
    })();
});


$(function(){
    //https://jqueryvalidation.org
    //jquery validation plugin
    jQuery.validator.addMethod("phoneBR", function(value, element) {
        return this.optional( element ) || /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/.test(value);
    }, "Este número de celular e inválido.");

    $("#formContato").validate({
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
                required: "Por favor, informe um email.",
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
            if (form.valid()) {
                emailjs.send("user_nPcjen9FAB5mMoXpExSKf","template_FXxnEYmN", {
                    name: "James", 
                    notes: "Check this out!"
                })
                .then(function(response) {
                   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                   console.log("FAILED. error=", err);
                });
                // $(".sucess_box").css("display", "block");          
            };
            return false;
        }
    });
});
