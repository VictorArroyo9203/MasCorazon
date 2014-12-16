$(document).ready(function () {

    $("#RegistrarUsuario").click(function () {

                var _Cl = {};
                _Cl.idusuarios = $("#num").val();
                _Cl.nombreusuario = $("#TextBox2").val();
                _Cl.apellidousuarios = $("#TextBox3").val();
                _Cl.email = $("#TextBox4").val();
                _Cl.contraseña = $("#TextBox5").val();
                _Cl.sexo = $("#select1").val();
                _Cl.idciudad = $("#select2").val();

                $.ajax({
                    cache: false,
                    type: "POST",
                    url: "http://190.109.185.138:8086/Service1.svc/" + "Insertar_Usuarios",
                    data: { 'Cl': JSON.stringify(_Cl) },
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    jsonpCallback: "Insertar_Usuarios",
                    async: false,
                    success: function (result) {


                        
                        $("#num").val('');
                        $("#TextBox2").val('');
                        $("#TextBox3").val('');
                        $("#TextBox4").val('');
                        $("#TextBox5").val('');
                        $("#nac").val('');
                        registrado();
                    },
                    error: function (jqXHR, status, error) {
                        alert(error + "-" + jqXHR.responseText);
                    }
                });  
    });


    $("#cerrarsesion").click(function () {
        localStorage.clear();
        $(location).attr('href', "Menu.html");

    });

    function registrado() {

        url = "Registrado.html";
        $(location).attr('href', url);
    }

});