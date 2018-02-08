//jquery mask plugin configuração mask form
$("#telefone").mask("(00) 00000-0000", {placeholder: "(00) 00000-0000"});
$("#email").mask("A", {
    translation: {
        "A": { pattern: /[\w@\-.+]/, recursive: true }
    },
    placeholder: "contato@contato.com"
});,

// Métodos para validação com nono dígito
jQuery.validator.addMethod("digit9", function(value, element, param) {
    return this.optional(element) || /^9[0-9]{9}$/.test(value);
},"Requer o digito 9.");

// Métodos para validação sem nono dígito
jQuery.validator.addMethod("tel", function(value, element, param) {
    return this.optional(element) || /^[0-9]{9}$/.test(value);
},"Digite seu numero.");

$("#form").validate({
    errorContainer: "#erros",
    errorLabelContainer: "#erros",
    wrapper: "li",
    rules: {
        ddd: {
            required: true,
            number: true,
            maxlength: 2,
            minlength: 2
        },
        phone: {
            required: true,
            number: true,
            digit9: {
                depends: function(element){
                   return ($('.ddd').val() == 11);
                }
            },
            tel: {
                depends: function(element){
                    return ($('.ddd').val() != 11);
                }
            }
        }
    },
    messages: {
        ddd: {
            required: "O campo DDD é obrigatorio.",
            number: "O campo DDD aceita apenas digitos numericos.",
            maxlength: "O campo DDD requer apenas dois digitos.",
            minlength: "O campo DDD requer dois digitos."
        },
        phone: {
            required: "O campo telefone é obrigatorio.",
            number: "O campo telefone aceita apenas digitos numericos."
        }
    },
    submitHandler: function(form) {
        alert('success');
       //form.submit();
    }
});