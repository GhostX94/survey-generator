var estado = "";

function getEncuestaById(id) {
    var currentLocation =
        this.location.origin +
        this.location.pathname.replace('inicio', 'getPreguntaByTipo');
}

$(document).ready(function () {


    $("#abiertas").hide();
    $("#cerradas").hide();
    $("#mixtas").hide();

    $('#Cerradas').on('click', function (e) {
        estado = "Cerradas";
        $("#cerradas").show();
        $("#abiertas").hide();
        $("#mixtas").hide();
    });
    $('#Abiertas').on('click', function (e) {
        estado = "Abiertas";
        $("#abiertas").show();
        $("#cerradas").hide();
        $("#mixtas").hide();
    });
    $('#Mixtas').on('click', function (e) {
        estado = "Mixtas";
        $("#mixtas").show();
        $("#cerradas").hide();
        $("#abiertas").hide();
    });
});
var count = 0;

function get(id) {
    var currentLocation =
        this.location.origin +
        this.location.pathname.replace('inicio', 'getPreguntaByTipo');
    $('#' + id.id).on('click', function (e) {
        var idTipoEncuesta = $('#' + id.id).text();

        $.get(currentLocation + '/' + idTipoEncuesta, function (message) {});
    });
}


function post(id) {
    var _token = $("input[name='csrf-token']").val();
    var titulo = $("#titulo").val();
    //var tipos = id
    $.ajax({
        url: currentLocation,
        type: 'POST',
        data: {
            _token: _token,
            request: tipos,
            titulo: titulo,
        },
        success: function (data) {

        },
    });
}
