/*
 * "Método Construtor" inicializa a verificação do Caps Lock
 */
$(document).ready(function () {
    $("#title").click(function () {
        $("#btn-title").removeClass("edited").addClass("editing");
    });
    $("#title").blur(function () {
        $("#btn-title").removeClass("editing").addClass("edited");
    });
    
    $("#subtitle").click(function () {
        $("#btn-subtitle").removeClass("edited").addClass("editing");
    });
    $("#subtitle").blur(function () {
        $("#btn-subtitle").removeClass("editing").addClass("edited");
    });
});

function tema1(){
    removerTemas();
    $("body").addClass("teme1");
}
function tema2(){
    removerTemas();
    $("body").addClass("teme2");
}
function tema3(){
    removerTemas();
    $("body").addClass("teme3");
}
function tema4(){
    removerTemas();
    $("body").addClass("teme4");
}

function removerTemas(){
    $("body").removeClass("teme1").removeClass("teme2").removeClass("teme3").removeClass("teme4");
}

/*
 * Desabilita o botão Enviar ao clicar e habilita ao finalizar o processamento
 * @param {type} data
 * @returns {undefined}
 */
function btnLsEnviar(data) {
    if (data.status === 'begin') {
        $("#icoLsEnviar").removeClass("glyphicon-envelope").addClass("glyphicon-time");
        $("#icoLsConfirmar").removeClass("glyphicon-ok").addClass("glyphicon-time");
        $("#frmLembrarSenha\\:btnLsEnviar").attr('disabled', 'disabled');

    }
    if (data.status === 'success') {
        $("#icoLsEnviar").removeClass("glyphicon-time").addClass("glyphicon-envelope");
        $("#icoLsConfirmar").removeClass("glyphicon-time").addClass("glyphicon-ok");
        $("#frmLembrarSenha\\:btnLsEnviar").removeAttr('disabled');
    }
}