// Aguarda o carregamento completo da página
 document.addEventListener('DOMContentLoaded', function () {
    const formularios = document.querySelectorAll('form');

    formularios.forEach(function (formulario) {
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            alert('Formulário enviado com sucesso!');
            formulario.reset();
        });
    });
});
