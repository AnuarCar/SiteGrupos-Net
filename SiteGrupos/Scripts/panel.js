
function myFunction() {
    document.getElementById("myDropdown").style.display = 'block';
}

function closeWin() {
    document.getElementById("myDropdown").style.display = 'none';   // Closes the new window
}

function prueba(valor) {
    /**Botón vuelos    #FF0080*/
    if (valor == 1) {
        document.getElementById("VuelosLi").style.backgroundColor = '#FF0080';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=2&CurrentEngine=2&ShowProducts=false&EngineConfigs[0].Engine=2&SectionConfigs[0].SectionTab=2&SectionConfigs[0].DefaultEngine=2&IsHorizontal=true"></script>'; //Vuelos
        $('#ptw-container').append(stringHtml)
    }
    /*Botón Hotel*/
    if (valor == 2) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#FF0080';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=1&CurrentEngine=1&ShowProducts=false&EngineConfigs[0].Engine=1&SectionConfigs[0].SectionTab=1&SectionConfigs[0].DefaultEngine=1&IsHorizontal=true"></script>';
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Hotel + vuelo*/
    if (valor == 3) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#FF0080';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=3&CurrentEngine=3&ShowProducts=false&EngineConfigs[0].Engine=3&EngineConfigs[1].Engine=8&SectionConfigs[0].SectionTab=3&SectionConfigs[0].DefaultEngine=3&IsHorizontal=true"></script>';
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Autos*/
    if (valor == 4) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#FF0080';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=6&CurrentEngine=6&ShowProducts=false&EngineConfigs[0].Engine=6&SectionConfigs[0].SectionTab=6&SectionConfigs[0].DefaultEngine=6&IsHorizontal=true "></script>'; //Autos
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Crucero*/
    if (valor == 5) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#FF0080';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=9&CurrentEngine=9&ShowProducts=false&EngineConfigs[0].Engine=9&SectionConfigs[0].SectionTab=9&SectionConfigs[0].DefaultEngine=9&IsHorizontal=true"></script>'; //Cruceros
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Translados*/
    if (valor == 6) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#FF0080';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=4&CurrentEngine=4&ShowProducts=false&EngineConfigs[0].Engine=4&SectionConfigs[0].SectionTab=4&SectionConfigs[0].DefaultEngine=4&IsHorizontal=true"></script>'; //Traslados
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Tours*/
    if (valor == 7) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#FF0080';
        document.getElementById("ptw-container").style.display = 'block'
        var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=5&CurrentEngine=5&ShowProducts=false&EngineConfigs[0].Engine=5&SectionConfigs[0].SectionTab=5&SectionConfigs[0].DefaultEngine=5&IsHorizontal=true"></script>'; //Traslados
        $('#ptw-container').append(stringHtml)
    }
    /*Boton Grupos*/
    if (valor == 8) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'none'
    }
    //Boton Grupos Corporativo
    if (valor == 9) {
        document.getElementById("VuelosLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelLi").style.backgroundColor = '#6101d1';
        document.getElementById("HotelVueloLi").style.backgroundColor = '#6101d1';
        document.getElementById("AutoLi").style.backgroundColor = '#6101d1';
        document.getElementById("CruceroLi").style.backgroundColor = '#6101d1';
        document.getElementById("TransladosLi").style.backgroundColor = '#6101d1';
        document.getElementById("ActividadesLi").style.backgroundColor = '#6101d1';
        document.getElementById("ptw-container").style.display = 'none'
    }
}

$(document).ready(function () {

    // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
    $('.table-responsive-stack').find("th").each(function (i) {

        $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ':</span> ');
        $('.table-responsive-stack-thead').hide();
    });

    $('.table-responsive-stack').each(function () {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
    });

    function flexTable() {
        if ($(window).width() < 768) {

            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });

            // window is less than 768px   
        } else {


            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });

        }
    }

    flexTable();

    window.onresize = function (event) {
        flexTable();
    };

    var amount = $('#tarifaTotal').val();
    var tax = $('#impuesto').val();
    var taxbase = $('#tarifaPlena').val();
    var boton = "<form><script src='https://checkout.epayco.co/checkout.js'" +
        "class='epayco-button'" +
        "data-epayco-key = '4860fa74d9b010ee1ccbc616e5119cad'" +
        "data-epayco-amount = '" + amount + "'" +
        "data-epayco-tax = '" + tax + "'" +
        "data-epayco-tax-base = '" + taxbase + "'" +
        "data-epayco-name = 'Pago viajes Grupos'" +
        "data-epayco-description = 'Pago viajes Grupos'" +
        "data-epayco-currency = 'cop'" +
        "data-epayco-country = 'co'" +
        "data-epayco-test = 'true'" +
        "data-epayco-external = 'false'" +
        "data-epayco-response = 'https://localhost:44300/Transaccion/Resultado'" +
        "data-epayco-confirmation = 'https://grupos.co/confirmacion'>" +
        "</script ></form>";
    $('#btnPagar').append(boton);


    var nextinput = 2;
    var idDiv = 0;
    var idSelect = 4;
    var idninos = 4;
    var idadultos = 4;
    var element = '';
    $("#agregarVuelo").on('click', function () {
        nextinput++;
        idDiv++;
        idSelect++;
        idninos++;
        idadultos++;
        $('#listVuelos').append(
            '<div id="vuelo' + idDiv + '" class="vuelosjq row col-12 mt-3">' +
            '<div class="col-1"> <p class="numeroVuelo">VUELO ' + nextinput + '</p></div>' +
            ' <div class="col-3">' +
            ' <label for="destino3">Origen:</label>' +
            '<select id="origen' + idSelect + '" class="form-control">' +
            '<option value="SELECCIONAR"> Seleccionar</option >' +
            '</select>' +
            ' </div>' +
            ' <div class="col-3">' +
            ' <label for="destino3">Destino:</label>' +
            '<select id="destino' + idSelect + '" class="form-control">' +
            '<option value="SELECCIONAR"> Seleccionar</option >' +
            '</select>' +
            ' </div>' +
            '<div class="col-3">' +
            '<label for="fechaIda1">Ida:</label>' +
            '<input type="date" id="fechaIda ' + idninos + '" class="form-control">' +
            '</div>' +
            '<div class="col-lg-2 col-sm-12">' +
            '<label for="fechaIda1">Cabina:</label>' +
            ' <select id="cabina' + idninos + '" class="form-control">' +
            ' <option value="Economy">Económica</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-1"></div>' +
            '<div class="col-lg-2 col-sm-12">' +
            '<label for="adultos3">Adultos:</label>' +
            '<select id="adultos' + idadultos + '" class="form-control">' +
            '<option value="1">1 persona</option>' +
            '<option value="2">2 personas</option>' +
            '<option value="3">3 personas</option>' +
            '<option value="4">4 personas</option>' +
            '<option value="5">5 personas</option>' +
            '<option value="6">6 personas</option>' +
            '<option value="7">7 personas</option>' +
            '<option value="8">8 personas</option>' +
            '<option value="9">9 personas</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-lg-2 col-sm-12">' +
            '<label for="ninos3">Menores:</label>' +
            '<select id="ninos' + idninos + '"class="ninoselect form-control">' +
            '<option value="0">0</option>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            '<option value="6">6</option>' +
            '<option value="7">7</option>' +
            '<option value="8">8</option>' +
            '<option value="9">9</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-lg-7 col-sm-12 mb-4" id="menoresMultiDestino' + idninos + '">' +
            '<label for="grupoMenores" id="menoresMultiDestinoLb' + idninos + '" style="display:none">Edades:</label>' +
            '<div class="row col-lg-12 col-sm-12" style="padding: 0; display: inline-flex;" id="grupoMenoresMultiDestino' + idninos + '">' +
            '</div>' +
            '</div>' +
            '</div>'
        );
        ObtenerCiudadesporid(idSelect);
        $('#eliminar').show();
    });

    $(document).on('change', ".ninoselect", function () {
        var Id = $(this).attr('id')
        var IdDiv = document.getElementById("grupoMenoresMultiDestino" + idninos).id;
        var IdDivElelment = document.getElementById("grupoMenoresMultiDestino" + idninos);
        var indice = document.getElementById(Id).value;
        while (IdDivElelment.firstChild) {
            IdDivElelment.removeChild(IdDivElelment.firstChild);
        }
        var adultos = $('#adultos' + idadultos).val();
        var ninos = $('#ninos' + idninos).val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos" + idadultos).selectedIndex = "0";
            document.getElementById("ninos" + idninos).selectedIndex = "0";
            //Limpiar Selects Edades niños
            while (IdDivElelment.firstChild) {
                IdDivElelment.removeChild(IdDivElelment.firstChild);
            }
        } else {
            for (j = 0; j < indice; j++) {
                AgregarSelectMenoresDinamico(j, IdDiv)
            }
        }

    });

    $("#eliminarVuelo").click(function (event) {
        $("#vuelo" + idDiv).remove();
        idDiv--;
        nextinput--;
        if (idDiv == 0) {
            $('#eliminar').hide();
        }
    });

    $(document).on('change', ".check_class", function () {
        $(".check_class").prop("checked", false);
        $(this).prop("checked", true);
        var Id = $(this).attr('id')
        var IndiceIda = "";
        if (Id.includes("IdaMiniOpc")) { IndiceIda = Id.replace("IdaMiniOpc", ""); }
        if (Id.includes("IdaMaxiOpc")) { IndiceIda = Id.replace("IdaMaxiOpc", ""); }
        if (Id.includes("IdaSuperOpc")) { IndiceIda = Id.replace("IdaSuperOpc", ""); }
        if (Id.includes("IdaMegaOpc")) { IndiceIda = Id.replace("IdaMegaOpc", ""); }

        $("#fechaSalidaIda").val(document.getElementById("fechaSalidaIda" + IndiceIda).value);
        $("#fechaLlegadaIda").val(document.getElementById("fechaLlegadaIda" + IndiceIda).value);
        $("#numVueloIda").val(document.getElementById("numVueloIda" + IndiceIda).value);


        var IdImpuesto = Id.replace("Opc", "Impuesto");
        $("#impuestoIda").val(document.getElementById(IdImpuesto).value);
        $("#valorIda").val(document.getElementById(Id).value);

        var IdClase = Id.replace("Opc", "Clase");
        $("#claseIda").val(document.getElementById(IdClase).value);

        valorIda = $("#valorIda").val();
        valorRegreso = $("#valorRegreso").val();
        var totalImpuesto = 0;
        var valorImpuestoIda = 0;
        var valorImpuestoRegreso = 0;
        valorImpuestoIda = $("#impuestoIda").val();
        valorImpuestoRegreso = $("#impuestoRegreso").val();
        totalImpuesto = parseInt(valorImpuestoIda) + parseInt(valorImpuestoRegreso);
        document.getElementById("valorTotImpuesto").value = totalImpuesto;

        if (valorIda == "") { valorIda = 0; }
        if (valorRegreso == "") { valorRegreso = 0; }
        total = parseInt(valorIda) + parseInt(valorRegreso);
        document.getElementById("valorTotal").innerHTML = "Valor Total: $" + new Intl.NumberFormat().format(total);
        document.getElementById("valorTotal2").innerHTML = "Valor Total: $" + new Intl.NumberFormat().format(total);
    });

    $(document).on('change', ".check_classR", function () {
        $(".check_classR").prop("checked", false);
        $(this).prop("checked", true);
        var Id = $(this).attr('id')
        var IndiceReg = "";
        if (Id.includes("RegresoMiniOpc")) { IndiceReg = Id.replace("RegresoMiniOpc", ""); }
        if (Id.includes("RegresoMaxiOpc")) { IndiceReg = Id.replace("RegresoMaxiOpc", ""); }
        if (Id.includes("RegresoSuperOpc")) { IndiceReg = Id.replace("RegresoSuperOpc", ""); }
        if (Id.includes("RegresoMegaOpc")) { IndiceReg = Id.replace("RegresoMegaOpc", ""); }

        $("#fechaSalidaRegreso").val(document.getElementById("fechaSalidaRegreso" + IndiceReg).value);
        $("#fechaLlegadaRegreso").val(document.getElementById("fechaLlegadaRegreso" + IndiceReg).value);
        $("#numVueloRegreso").val(document.getElementById("numVueloRegreso" + IndiceReg).value);

        var IdImpuesto = Id.replace("Opc", "Impuesto");
        $("#impuestoRegreso").val(document.getElementById(IdImpuesto).value);
        $("#valorRegreso").val(document.getElementById(Id).value);
        var total = 0;
        var valorIda = 0;
        var valorRegreso = 0;
        valorIda = $("#valorIda").val();
        valorRegreso = $("#valorRegreso").val();

        var IdClase = Id.replace("Opc", "Clase");
        $("#claseRegreso").val(document.getElementById(IdClase).value);

        var totalImpuesto = 0;
        var valorImpuestoIda = 0;
        var valorImpuestoRegreso = 0;
        valorImpuestoIda = $("#impuestoIda").val();
        valorImpuestoRegreso = $("#impuestoRegreso").val();
        totalImpuesto = parseInt(valorImpuestoIda) + parseInt(valorImpuestoRegreso);
        document.getElementById("valorTotImpuesto").value = totalImpuesto;

        if (valorIda == "") { valorIda = 0; }
        if (valorRegreso == "") { valorRegreso = 0; }
        total = parseInt(valorIda) + parseInt(valorRegreso);
        document.getElementById("valorTotal").innerHTML = "Valor Total: $" + new Intl.NumberFormat().format(total);
        document.getElementById("valorTotal2").innerHTML = "Valor Total: $" + new Intl.NumberFormat().format(total);

    });

    $('#btnReservar').click(function () {
        valorIda = $("#valorIda").val();
        valorRegreso = $("#valorRegreso").val();
        if (valorIda == "") { valorIda = 0; }
        if (valorRegreso == "") { valorRegreso = 0; }
        if (valorIda == 0 || valorRegreso == 0) {
            alert('Debe seleccionar opciones de viaje tanto para ida como para regreso.');
        }
        else {
            var adultos = $('#adultos1').val();
            var ninos = $('#ninos1').val(); //numero niños
            var impuesto = $('#valorTotImpuesto').val();
            var tarifaPlena = parseInt(valorIda) + parseInt(valorRegreso);
            var fechaSalidaIda = $('#fechaSalidaIda').val();
            var fechaLlegadaIda = $('#fechaLlegadaIda').val();
            var numVueloIda = $('#numVueloIda').val();
            var claseIda = $('#claseIda').val();
            var fechaSalidaRegreso = $('#fechaSalidaRegreso').val();
            var fechaLlegadaRegreso = $('#fechaLlegadaRegreso').val();
            var numVueloRegreso = $('#numVueloRegreso').val();
            var claseRegreso = $('#claseRegreso').val();
            var codAerolinea = $('#codAerolinea').val();
            var origen = $('#origen1').val();
            var origentext = $('#origen1 option:selected').text();
            var destino = $('#destino1').val();
            var destinotext = $('#destino1 option:selected').text();
            var cabinatext = $('#cabina1 option:selected').text();
            window.location.href = '/Reserva/ConfirmarReserva?tarifa=' + tarifaPlena + '&impuesto=' + impuesto + '&adt=' + adultos + '&chd=' + ninos + '&fsi=' + fechaSalidaIda + '&fli=' + fechaLlegadaIda + '&nvi=' + numVueloIda + '&ci=' + claseIda + '&fsr=' + fechaSalidaRegreso + '&flr=' + fechaLlegadaRegreso + '&nvr=' + numVueloRegreso + '&cr=' + claseRegreso + '&codAerolinea=' + codAerolinea + '&origen=' + origen + '&destino=' + destino + '&origentext=' + origentext + '&destinotext=' + destinotext + '&cabina=' + cabinatext;
        }
    });

    $('#btnReservarSencillo').click(function () {
        valorIda = $("#valorIda").val();
        if (valorIda == "") { valorIda = 0; }
        if (valorIda == 0) {
            alert('Debe seleccionar opciones de viaje tanto para ida como para regreso.');
        }
        else {
            var adultos = $('#adultos2').val();
            var ninos = $('#ninos2').val(); //numero niños
            var impuesto = $('#valorTotImpuesto').val();
            var tarifaPlena = parseInt(valorIda) + parseInt(valorRegreso);
            var fechaSalidaIda = $('#fechaSalidaIda').val();
            var fechaLlegadaIda = $('#fechaLlegadaIda').val();
            var numVueloIda = $('#numVueloIda').val();
            var claseIda = $('#claseIda').val();
            var fechaSalidaRegreso = $('#fechaSalidaRegreso').val();
            var fechaLlegadaRegreso = $('#fechaLlegadaRegreso').val();
            var numVueloRegreso = $('#numVueloRegreso').val();
            var claseRegreso = $('#claseRegreso').val();
            var codAerolinea = $('#codAerolinea').val();
            var origen = $('#origen2').val();
            var destino = $('#destino2').val();
            window.location.href = '/Reserva/ConfirmarReserva?tarifa=' + tarifaPlena + '&impuesto=' + impuesto + '&adt=' + adultos + '&chd=' + ninos + '&fsi=' + fechaSalidaIda + '&fli=' + fechaLlegadaIda + '&nvi=' + numVueloIda + '&ci=' + claseIda + '&fsr=' + fechaSalidaRegreso + '&flr=' + fechaLlegadaRegreso + '&nvr=' + numVueloRegreso + '&cr=' + claseRegreso + '&codAerolinea=' + codAerolinea + '&origen=' + origen + '&destino=' + destino;
        }
    });

    $('#btnConfirmarReserva').click(function () {
        $('#spinnerVuelos').show();
        var numAdt = parseInt(document.getElementById("numAdt").textContent);
        var numChd = parseInt(document.getElementById("numChd").textContent);
        var viajeros = "";
        for (var x = 1; x <= numAdt; x++) {
            var PrimerNombreAdt = (document.getElementById("txtPrimerNombreAdt" + x).value).toUpperCase();
            var SegundoNombreAdt = (document.getElementById("txtSegundoNombreAdt" + x).value).toUpperCase();
            var ApellidosAdt = (document.getElementById("txtApellidosAdt" + x).value).toUpperCase();
            var tituloAdt = (document.getElementById("tituloAdt" + x).value).toUpperCase();
            var TelefonoAdt = document.getElementById("txtTelefonoAdt" + x).value;
            var CorreoAdt = (document.getElementById("txtCorreoAdt" + x).value).toUpperCase();
            var DocumentoAdt = document.getElementById("txtDocumentoAdt" + x).value;
            viajeros += "ADT" + ',' + PrimerNombreAdt + ',' + SegundoNombreAdt + ',' + ApellidosAdt + ',' + tituloAdt + ',' + TelefonoAdt + ',' + CorreoAdt + ',' + DocumentoAdt + ',' + "ID" + ';';
        }
        for (var x = 1; x <= numChd; x++) {
            var PrimerNombreChd = (document.getElementById("txtPrimerNombreChd" + x).value).toUpperCase();
            var SegundoNombreChd = (document.getElementById("txtSegundoNombreChd" + x).value).toUpperCase();
            var ApellidosChd = (document.getElementById("txtApellidosChd" + x).value).toUpperCase();
            var tituloChd = (document.getElementById("tituloChd" + x).value).toUpperCase();
            var TelefonoChd = document.getElementById("txtTelefonoChd" + x).value;
            var CorreoChd = (document.getElementById("txtCorreoChd" + x).value).toUpperCase();
            var DocumentoChd = document.getElementById("txtDocumentoChd" + x).value;
            viajeros += "CHD" + ',' + PrimerNombreChd + ',' + SegundoNombreChd + ',' + ApellidosChd + ',' + tituloChd + ',' + TelefonoChd + ',' + CorreoChd + ',' + DocumentoChd + ',' + "ID" + ';';
        }
        viajeros = viajeros.slice(0, -1);

        var fsi = document.getElementById("fsi").textContent;
        var fli = document.getElementById("fli").textContent;
        var nvi = document.getElementById("nvi").textContent;
        var ci = document.getElementById("ci").textContent;
        var fsr = document.getElementById("fsr").textContent;
        var flr = document.getElementById("flr").textContent;
        var nvr = document.getElementById("nvr").textContent;
        var cr = document.getElementById("cr").textContent;
        var codAerolinea = document.getElementById("codAerolinea").textContent;
        var origen = document.getElementById("origen").textContent;
        var destino = document.getElementById("destino").textContent;
        var CodReserva = "";
        var tarifaPlena = document.getElementById("tarifaPlena").value;
        var impuesto = document.getElementById("impuesto").value;
        var tarifaTotal = document.getElementById("tarifaTotal").value;
        $.ajax({
            url: 'https://www.grupos.co/gruposPoint/point.php',
            type: 'post',
            data: {
                'metodo': "CotizarIdayVuelta",
                'fechaSalidaIda': fsi,
                'fechaLlegadaIda': fli,
                'numVueloIda': nvi,
                'codClaseIda': ci,
                'fechaSalidaRegreso': fsr,
                'fechaLlegadaRegreso': flr,
                'numVueloRegreso': nvr,
                'codClaseRegreso': cr,
                'origen': origen,
                'destino': destino,
                'codAerolinea': codAerolinea,
                'viajeros': viajeros,
            },
            success: function (response) {
                var xmlDocument = $.parseXML(response);
                var $xml = $(xmlDocument);
                $('KIU_AirBookRS', $xml).each(function () {
                    $(this).find("TravelerInfo").each(function () {
                        AirTraveler = $(TravelerInfo).find("AirTraveler");
                        pruebas = $(AirTraveler).attr("PassengerTypeCode");
                        PersonName = $("AirTraveler").find("PersonName");
                        GivenName = $(PersonName).find(GivenName).text;
                        MiddleName = $(PersonName).find(MiddleName).text;
                        Surname = $(PersonName).find(Surname).text;
                    });

                    CodReserva = $(this).find("BookingReferenceID").attr("ID");

                });
                if (CodReserva != undefined) {
                    window.location.href = "/Reserva/ReservaRealizada?CodReserva=" + CodReserva + "&tarifaPlena=" + tarifaPlena +
                        "&impuesto=" + impuesto + "&tarifaTotal=" + tarifaTotal + "&numAdt=" + numAdt + "&numChd=" + numChd
                }
                else {
                    $('KIU_AirBookRS', $xml).each(function () {

                        $(this).find("Error").each(function () {
                            ErrorMsg = $(this).find("ErrorMsg")[0].innerHTML;
                        });
                    });
                    alert("Error realizando la reserva, detalle: " + ErrorMsg);
                }
            },
            complete: function () {
                $('#spinnerVuelos').hide();
            }
        });
    });

    function ObtenerCiudadesporid(id) {
        $('#spinner').show();
        $.ajax({
            url: '/vuelosyOtros/ListadoCiudades',
            type: 'get',
            dataType: 'json',
            crossDomain: true,
            success: function (ciudades) {
                $('#spinner').hide();
                // VACIAMOS EL DropDownList
                $("#origen" + id).empty();

                $("#destino" + id).empty();

                // AÑADIMOS UN NUEVO label CON EL NOMBRE DEL ELEMENTO SELECCIONADO
                $("#origen" + id).append("<option value> Seleccionar </option>")

                $("#destino" + id).append("<option value> Seleccionar </option>")

                // CONSTRUIMOS EL DropDownList A PARTIR DEL RESULTADO Json (data)
                $.each(ciudades, function (index, row) {
                    $("#origen" + id).append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")

                    $("#destino" + id).append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")

                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Ocurrió un error cargando las ciudades.');
                $('#spinner').hide();
            }
        });
    }

    ObtenerUsuarios();

    function ConsultaryPintarPrecios(arrayVuelos, OriginLocation, DestinationLocation, adultos, ninos, ruta, totalViajeros) {
        var ClasesVueloGrupos = new Array();//array para almacenar las clases que se van encontrando en el vuelo
        var PuestosClaseGrupos = new Array();//array para almacenar las clases que se van encontrando en el vuelo
        var FamiliasVuelo = new Array();//array para almacenar las Familias que se van encontrando en el vuelo
        var parametros = "";
        var infantes = 0;
        var clases = new Array("C", "J", "Y", "W", "S", "H", "K", "L", "T", "V");
        for (indiceVuelo in arrayVuelos) {
            vuelo = arrayVuelos[indiceVuelo];
            //Filtrar solo clases de Grupos
            vuelo.each(function () {
                FDepartureDateTime = $(this).attr("DepartureDateTime");
                FArrivalDateTime = $(this).attr("ArrivalDateTime");
                FFlightNumber = $(this).attr("FlightNumber");
                FMarketingAirline = $(this).find("MarketingAirline").attr("CompanyShortName");
                document.getElementById("codAerolinea").value = FMarketingAirline;
                FDMarketingCabinType = $(this).find("MarketingCabin").attr("CabinType");
                BookingClassAvail = $(this).find("BookingClassAvail");
                BookingClassAvail.each(function () {
                    ResBookDesigCode = $(this).attr("ResBookDesigCode");
                    ResBookDesigQuantity = $(this).attr("ResBookDesigQuantity");
                    RPH = $(this).attr("RPH");
                    var IndiceClase = clases.indexOf(ResBookDesigCode);
                    if (IndiceClase != -1) {
                        var IndiceClaseVuelo = ClasesVueloGrupos.indexOf(ResBookDesigCode);
                        if (IndiceClaseVuelo == -1 || ClasesVuelo.length == 0) {
                            ClasesVueloGrupos.push(ResBookDesigCode);//Inserto la clase 
                            var familia1 = "";
                            switch (ResBookDesigCode) {
                                case "T":
                                    familia1 = "Mini";
                                    break;
                                case "V":
                                    familia1 = "Mini";
                                    break;
                                case "L":
                                    familia1 = "Maxi";
                                    break;
                                case "K":
                                    familia1 = "Maxi";
                                    break;
                                case "H":
                                    familia1 = "Maxi";
                                    break;
                                case "S":
                                    familia1 = "Super";
                                    break;
                                case "W":
                                    familia1 = "Super";
                                    break;
                                case "Y":
                                    familia1 = "Super";
                                    break;
                                case "J":
                                    familia1 = "Mega";
                                    break;
                                case "C":
                                    familia1 = "Mega";
                                    break;
                            }
                            PuestosClaseGrupos.push({ clase: ResBookDesigCode, familia: familia1, puestos: ResBookDesigQuantity });
                        }
                    }
                });
                for (indice in ClasesVueloGrupos) {
                    parametros += FDepartureDateTime + ',' + FArrivalDateTime + ',' + FFlightNumber + ',' + OriginLocation + ',' + DestinationLocation + ',' + FMarketingAirline + ',' + FDMarketingCabinType + ',' + ClasesVueloGrupos[indice] + ',' + adultos + ',' + ninos + ',' + infantes + ';'
                }
                parametros = parametros.slice(0, -1);
                $.ajax({
                    url: 'https://www.grupos.co/gruposPoint/point.php',
                    type: 'post',
                    data: {
                        'metodo': "ObtenerPrecio",
                        'parametros': parametros
                    },
                    success: function (rtaPrecio) {
                        var xmlDocument = $.parseXML(rtaPrecio);
                        var $xml = $(xmlDocument);
                        var id = ""; //RegresoMini, RegresoMaxi, RegresoMega, RegresoSuper//IdaMini, IdaMaxi, IdaMega, IdaSuper
                        var idPuestos = "";
                        var idImpuesto = "";
                        var comisionGrupos = 3000;
                        //aqui sacar las familias y los precios 
                        //Familias MINI = T, V , MAXI = L, K, H, SUPER = S, W, Y, MEGA= J, C
                        var indiceClase = 0;
                        $('KIU_AirPriceRS', $xml).each(function () {
                            var familia = "";
                            var totalImpuestos = 0;
                            PricedItineraries = $(this).find("PricedItineraries");
                            PricedItinerary = $(PricedItineraries).find("PricedItinerary");
                            AirItinerary = $(PricedItinerary).find("AirItinerary");
                            OriginDestinationOptions = $(AirItinerary).find("OriginDestinationOptions");
                            OriginDestinationOption = $(OriginDestinationOptions).find("OriginDestinationOption");
                            FlightSegment = $(OriginDestinationOption).find("FlightSegment");
                            FResBookDesigCode = $(FlightSegment).attr("ResBookDesigCode");
                            switch (FResBookDesigCode) {
                                case "T":
                                    familia = "Mini";
                                    break;
                                case "V":
                                    familia = "Mini";
                                    break;
                                case "L":
                                    familia = "Maxi";
                                    break;
                                case "K":
                                    familia = "Maxi";
                                    break;
                                case "H":
                                    familia = "Maxi";
                                    break;
                                case "S":
                                    familia = "Super";
                                    break;
                                case "W":
                                    familia = "Super";
                                    break;
                                case "Y":
                                    familia = "Super";
                                    break;
                                case "J":
                                    familia = "Mega";
                                    break;
                                case "C":
                                    familia = "Mega";
                                    break;
                            }
                            id = ruta + familia + indiceVuelo;
                            idOpc = ruta + familia + "Opc" + indiceVuelo;
                            idPuestos = ruta + familia + "Puestos" + indiceVuelo;
                            idImpuesto = ruta + familia + "Impuesto" + indiceVuelo;
                            idClase = ruta + familia + "Clase" + indiceVuelo;
                            AirItineraryPricingInfo = $(PricedItinerary).find("AirItineraryPricingInfo");
                            ItinTotalFare = $(AirItineraryPricingInfo).find("ItinTotalFare");
                            Taxes = $(ItinTotalFare).find("Taxes");
                            Tax = $(Taxes).find("Tax");
                            for (var y = 0; y < Tax.length; y++) {
                                ITax = $(Tax[y]).attr("Amount");
                                totalImpuestos = totalImpuestos + parseInt(ITax, 10);
                            }
                            TotalFare = $(ItinTotalFare).find("TotalFare").attr("Amount");
                            if (TotalFare != undefined) {
                                TotalFare = parseInt(comisionGrupos) + parseInt(TotalFare);
                                //aqui algoritmo de establecimiento de clase por demanda
                                //obtener púestos actuales
                                var puestos_actual = document.getElementById(idPuestos).value;
                                if (puestos_actual == undefined) { puestos_actual = 0; }
                                var objetoPuestos = PuestosClaseGrupos[indiceClase];
                                switch (FResBookDesigCode) {
                                    case "T":
                                        if (objetoPuestos["familia"] == "Mini") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "V":
                                        if (objetoPuestos["familia"] == "Mini") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "L":
                                        if (objetoPuestos["familia"] == "Maxi") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "K":
                                        if (objetoPuestos["familia"] == "Maxi") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "H":
                                        if (objetoPuestos["familia"] == "Maxi") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "S":
                                        if (objetoPuestos["familia"] == "Super") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "W":
                                        if (objetoPuestos["familia"] == "Super") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "Y":
                                        if (objetoPuestos["familia"] == "Super") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "J":
                                        if (objetoPuestos["familia"] == "Mega") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                    case "C":
                                        if (objetoPuestos["familia"] == "Mega") {
                                            puestos_actual = parseInt(objetoPuestos["puestos"], 10);
                                        }
                                        break;
                                }
                                if (puestos_actual >= totalViajeros) {
                                    document.getElementById(idPuestos).innerHTML = puestos_actual + " sillas";
                                    document.getElementById(idPuestos).value = puestos_actual;
                                    document.getElementById(id).innerHTML = "$" + TotalFare / totalViajeros;
                                    document.getElementById(id).value = TotalFare;
                                    document.getElementById(idOpc).value = TotalFare;
                                    document.getElementById(idImpuesto).value = totalImpuestos;
                                    document.getElementById(idClase).value = objetoPuestos["clase"];
                                }
                                else {
                                    document.getElementById(idPuestos).innerHTML = "no disponible";
                                    document.getElementById(idPuestos).value = 0;
                                    document.getElementById(id).innerHTML = "no disponible";
                                    document.getElementById(id).value = 0;
                                    document.getElementById(idOpc).value = 0;
                                    document.getElementById(idImpuesto).value = 0;
                                    document.getElementById(idClase).value = "";
                                }
                                //-------------------------------------
                            }
                            indiceClase++;
                        });
                    }
                });
            });
        }
    }

    function ObtenerCiudades() {
        $('#spinner').show();
        $.ajax({
            url: '/vuelosyOtros/ListadoCiudades',
            type: 'get',
            dataType: 'json',
            crossDomain: true,
            success: function (ciudades) {
                $('#spinner').hide();
                // VACIAMOS EL DropDownList
                $("#origen1").empty();
                $("#origen2").empty();
                $("#origen3").empty();
                $("#origen4").empty();

                $("#destino1").empty();
                $("#destino2").empty();
                $("#destino3").empty();
                $("#destino4").empty();

                // AÑADIMOS UN NUEVO label CON EL NOMBRE DEL ELEMENTO SELECCIONADO
                $("#origen1").append("<option value> Seleccionar </option>")
                $("#origen2").append("<option value> Seleccionar </option>")
                $("#origen3").append("<option value> Seleccionar </option>")
                $("#origen4").append("<option value> Seleccionar </option>")

                $("#destino1").append("<option value> Seleccionar </option>")
                $("#destino2").append("<option value> Seleccionar </option>")
                $("#destino3").append("<option value> Seleccionar </option>")
                $("#destino4").append("<option value> Seleccionar </option>")

                // CONSTRUIMOS EL DropDownList A PARTIR DEL RESULTADO Json (data)
                $.each(ciudades, function (index, row) {
                    $("#origen1").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#origen2").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#origen3").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#origen4").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")

                    $("#destino1").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#destino2").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#destino3").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")
                    $("#destino4").append("<option value='" + row.City_Code + "'>" + row.City_Name + "(" + row.City_Code + ")" + "</option>")

                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Ocurrió un error cargando las ciudades.');
                $('#spinner').hide();
            }
        });
    }

    function ObtenerUsuarios() {
        //$('#spinner').show();
        $("#divResultadosUsers #TableUsers thead").text('');
        $("#divResultadosUsers #TableUsers tbody").text('');
        $.ajax({
            url: '/Usuarios/ListadoUsuarios',
            type: 'get',
            dataType: 'json',
            crossDomain: true,
            success: function (usuarios) {
                var resultado = usuarios;
                $("#divResultadosUsers #TableUsers thead").append('<tr><th>Nombres</th><th>Tipo Documento</th><th>Tipo de Contacto</th><th>Ciudad</th><th>Email</th><th>Celular</th><th>User Name</th><th>Nombre Agencia</th><th>Fecha Creación</th><th>Estado</th><th>Usuario Administrador</th><th>Opciones</th>');
                for (var i = 0; i < resultado.length; i++) {
                    var Nombre = resultado[i].contactName;
                    var Tipo_Documento = resultado[i].documentType;
                    var Tipo_Contacto = resultado[i].contactType;
                    var Ciudad = resultado[i].cityName;
                    var email = resultado[i].emailAddress;
                    var celular = resultado[i].phoneNumber;
                    var userName = resultado[i].userName;
                    var nombreAgencia = resultado[i].agencyName;
                    var estado = false;
                    var estadoText = "";
                    estado = resultado[i].status;
                    if (estado) {
                        estadoText = "Activo";
                    } else {
                        estadoText = "Inactivo";
                    }
                    var fechaCreacion = resultado[i].dateCreate;
                    var administrador = false;
                    var administradorText = "";
                    administrador = resultado[i].administrator;
                    if (administrador) {
                        administradorText = "SI";
                    }
                    else {
                        administradorText = "NO";
                    }
                    $("#divResultadosUsers #TableUsers tbody").append('<tr><td>' + Nombre + '</td><td>' + Tipo_Documento + '</td><td>' + Tipo_Contacto + '</td><td>' + Ciudad
                        + '</td><td>' + email + '</td><td>' + celular + '</td><td>' + userName + '</td><td>' + nombreAgencia + '</td><td>' + fechaCreacion + '</td><td>'
                        + estadoText + '</td><td>' + administradorText + '</td><td><i class="activar fa fa-check-circle" data-val="' + email + '"></i> <i class="inactivar fa fa-times-circle" data-val="' + email + '"></i></td>');
                }

                $('#divResultadosUsers').css("display", "block");
            },
            error: function () {
                alert('Ocurrió un error cargando los usuarios.');
                $('#spinner').hide();
            }
        });
    }

    function limpiarRegistro() {
        $('#agencyNameError').css("display", "block");
        $('#agencyNameError').html('');
        $('#contactTypeError').css("display", "block");
        $('#contactTypeError').html('');
        $('#contactNameError').css("display", "block");
        $('#contactNameError').html('');
        $('#cityNameError').css("display", "block");
        $('#cityNameError').html('');
        $('#phoneNumberError').css("display", "block");
        $('#phoneNumberError').html('');
        $('#emailError').css("display", "block");
        $('#emailError').html('');
        $('#terminosError').css("display", "block");
        $('#terminosError').html('');
        $('#passwordError').css("display", "block");
        $('#passwordError').html('');
    }

    function limpiarRegistroInputs() {
        $('#agencyName').val('');
        $('#contactName').val('');
        $('#cityName').val('');
        $('#phoneNumber').val('');
        $('#emailAddress').val('');
        $('#passwordRegister').val('');
        $('#terminos').prop('checked', false);
    }

    function limpiarLoginInputs() {
        $('#userName').val('');
        $('#password').val('');
        $('#userNameError').val('');
        $('#passwordErrorLogin').val('');
        $('#userNameError').css("display", "block");
        $('#passwordErrorLogin').css("display", "block");
    };

    function Login() {
        $('#spinner').show();
        var formValid = false;
        var userName = $('#userName').val();
        var password = $('#password').val();
        if (userName == '') {
            $('#spinner').hide();
            $('#userNameError').html('Campo obligatorio');
            $('#userNameError').css("display", "block");
            formValid = false;
        }
        else {
            $('#userNameError').html('');
            $('#userNameError').css("display", "none");
            formValid = true;
        }
        if (password == '') {
            $('#spinner').hide();
            $('#passwordErrorLogin').html('Campo obligatorio');
            $('#passwordErrorLogin').css("display", "block");
            formValid = false;
        }
        else {
            $('#passwordErrorLogin').html('');
            $('#passwordErrorLogin').css("display", "none");
            formValid = true;
        }
        if (formValid) {
            $.ajax({
                url: '/Grupos/Login',
                type: 'post',
                dataType: 'json',
                crossDomain: true,
                data: {
                    userName: userName,
                    password: password
                },
                success: function (data) {
                    var token = data["jwt"];
                    if (token != null && token != undefined && token != '') {
                        window.location.href = data["Url"];
                    }
                    else {
                        alert("Usuario o contraseña incorrecto.")
                        $('#spinner').hide();
                    }
                    $('#spinner').hide();
                    limpiarLoginInputs();
                },
                error: function () {
                    alert('Usuario o contraseña incorrecto.');
                    $('#userName').val("");
                    $('#password').val("");
                    $('#spinner').hide();
                    limpiarLoginInputs();
                }
            });
        }
    };

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(emailAddress);
    }

    function AgregarSelectMenores(indice) {
        sele = document.createElement('select');
        sele.id = "ninoIdaVueltaEdad" + indice;
        sele.className = "ninoEdad col-lg-2 col-sm-2 form-control";
        for (i = 1; i <= 17; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            sele.appendChild(opt);
        }
        document.getElementById("grupoMenores").appendChild(sele);
    }

    function AgregarSelectMenoresSencillo(indice) {
        sele = document.createElement('select');
        sele.id = "ninoSencilloEdad" + indice;
        sele.className = "ninoEdad col-lg-2 col-sm-2 form-control";
        for (i = 1; i <= 17; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            sele.appendChild(opt);
        }
        document.getElementById("grupoMenoresSencillo").appendChild(sele);
    }

    function AgregarSelectMenoresMultidestino(indice) {
        sele = document.createElement('select');
        sele.id = "ninoMultiDestinoEdad" + indice;
        sele.className = "ninoEdad col-lg-2 col-sm-2 form-control";
        for (i = 1; i <= 17; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            sele.appendChild(opt);
        }
        document.getElementById("grupoMenoresMultiDestino").appendChild(sele);
    }

    function AgregarSelectMenoresMultidestino4(indice) {
        sele = document.createElement('select');
        sele.id = "ninoMultiDestinoEdad" + indice;
        sele.className = "ninoEdad col-lg-2 col-sm-2 form-control";
        for (i = 1; i <= 17; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            sele.appendChild(opt);
        }
        document.getElementById("grupoMenoresMultiDestino4").appendChild(sele);
    }

    function AgregarSelectMenoresDinamico(indice, idDiv) {
        sele = document.createElement('select');
        sele.id = "ninoIdaVueltaEdad" + indice;
        sele.className = "ninoEdad col-lg-2 col-sm-2 form-control";
        for (i = 1; i <= 17; i++) {
            opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            sele.appendChild(opt);
        }
        document.getElementById(idDiv).appendChild(sele);
        var IdDiv = document.getElementById("menoresMultiDestinoLb" + idninos);
        $(IdDiv).show();
    }

    function LimpiarFormularios() {
        //Limpiar Selects Edades niños
        var menores = document.getElementById("grupoMenores");
        while (menores.firstChild) {
            menores.removeChild(menores.firstChild);
        }
        var menores = document.getElementById("grupoMenoresSencillo");
        while (menores.firstChild) {
            menores.removeChild(menores.firstChild);
        }
        var menores = document.getElementById("grupoMenoresMultiDestino");
        while (menores.firstChild) {
            menores.removeChild(menores.firstChild);
        }
        var menores = document.getElementById("grupoMenoresMultiDestino4");
        while (menores.firstChild) {
            menores.removeChild(menores.firstChild);
        }
        //Limpiar tabla de resultados y ocultar div
        $('#TableIda > tbody').empty();
        $('#TableIda > thead').empty();

        $('#TableRegreso > tbody').empty();
        $('#TableRegreso > thead').empty();
        $('#divResultados').hide();
        $('#valorTotal').hide();

        //Seleccionar primero opcion de todos los select
        $('#origen1').select2('val', '0');
        $('#destino1').select2('val', '0');
        document.getElementById("cabina1").selectedIndex = "0";
        document.getElementById("adultos1").selectedIndex = "0";
        document.getElementById("ninos1").selectedIndex = "0";
        $('#fechaIda1').val(new Date());
        $('#fechaRegreso1').val(new Date());
        $('#menores').show();
        var menores = document.getElementById("grupoMenores");
        while (menores.firstChild) {
            menores.removeChild(menores.firstChild);
        }
        //Seleccionar primero opcion de todos los select
        $('#origen2').select2('val', '0');
        $('#destino2').select2('val', '0');
        //document.getElementById("cabina2").selectedIndex = "0";
        document.getElementById("adultos2").selectedIndex = "0";
        document.getElementById("ninos2").selectedIndex = "0";
        $('#fechaIda2').val(new Date());
        $('#menoresSencillo').show();
        var menoresSencillo = document.getElementById("grupoMenoresSencillo");
        while (menoresSencillo.firstChild) {
            menoresSencillo.removeChild(menoresSencillo.firstChild);
        }

        $('#origen3').select2('val', '0');
        $('#destino3').select2('val', '0');
        //document.getElementById("cabina2").selectedIndex = "0";
        document.getElementById("adultos3").selectedIndex = "0";
        document.getElementById("ninos3").selectedIndex = "0";
        $('#fechaIda3').val(new Date());
        $('#menoresMultiDestino').show();
        var menoresMultiDestino = document.getElementById("grupoMenoresMultiDestino");
        while (menoresMultiDestino.firstChild) {
            menoresMultiDestino.removeChild(menoresMultiDestino.firstChild);
        }

        $('#origen4').select2('val', '0');
        $('#destino4').select2('val', '0');
        //document.getElementById("cabina2").selectedIndex = "0";
        document.getElementById("adultos4").selectedIndex = "0";
        document.getElementById("ninos4").selectedIndex = "0";
        $('#fechaIda4').val(new Date());
        $('#menoresMultiDestino4').show();
        var menoresMultiDestino4 = document.getElementById("grupoMenoresMultiDestino4");
        while (menoresMultiDestino4.firstChild) {
            menoresMultiDestino4.removeChild(menoresMultiDestino4.firstChild);
        }
    }

    $('#IdayVuelta').change(function () {
        LimpiarFormularios();
        $('#btnReservar').show;
        $('#btnReservarSencillo').hide;
    });

    $('#Sencillo').change(function () {
        LimpiarFormularios();
        $('#btnReservar').hide;
        $('#btnReservarSencillo').show;
    });

    $('#Multidestino').change(function () {
        LimpiarFormularios();
    });

    $('#adultos1').change(function () {
        var adultos = $('#adultos1').val();
        var ninos = $('#ninos1').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos1").selectedIndex = "0";
            document.getElementById("ninos1").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenores");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menores').show();
        }
        else {
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });


    $('#adultos2').change(function () {
        var adultos = $('#adultos2').val();
        var ninos = $('#ninos2').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos2").selectedIndex = "0";
            document.getElementById("ninos2").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresSencillo");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresSencillo').show();
        }
        else {
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $('#adultos3').change(function () {
        var adultos = $('#adultos3').val();
        var ninos = $('#ninos3').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos3").selectedIndex = "0";
            document.getElementById("ninos3").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresMultiDestino");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresMultiDestinoLb').show();
            var menoresMultiDestino = document.getElementById("grupoMenoresMultiDestino");
            while (menoresMultiDestino.firstChild) {
                menoresMultiDestino.removeChild(menoresMultiDestino.firstChild);
            }
        }
        else {
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $('#adultos4').change(function () {
        var adultos = $('#adultos4').val();
        var ninos = $('#ninos4').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos4").selectedIndex = "0";
            document.getElementById("ninos4").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresMultiDestino4");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresMultiDestinoLb4').show();
            var menoresMultiDestino = document.getElementById("grupoMenoresMultiDestino4");
            while (menoresMultiDestino.firstChild) {
                menoresMultiDestino.removeChild(menoresMultiDestino.firstChild);
            }
        }
        else {
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $("#ninos1").change(function () {
        var adultos = $('#adultos1').val();
        var ninos = $('#ninos1').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos1").selectedIndex = "0";
            document.getElementById("ninos1").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenores");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menores').show();
        }
        else {
            var menores = document.getElementById("grupoMenores");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            var numeroNinos = $("#ninos1").val();
            if (numeroNinos > 0) {
                $("#grupoMenoresLb").show();
                $("#menores").show();
                for (j = 0; j < numeroNinos; j++) {
                    AgregarSelectMenores(j);
                }
            }
            else {
                $("#grupoMenoresLb").hide();
                $("#menores").show();
            }
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $("#ninos2").change(function () {
        var adultos = $('#adultos2').val();
        var ninos = $('#ninos2').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos2").selectedIndex = "0";
            document.getElementById("ninos2").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresSencillo");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresSencillo').show();
        }
        else {
            var menores = document.getElementById("grupoMenoresSencillo");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            var numeroNinos = $("#ninos2").val();
            if (numeroNinos > 0) {
                $("#menoresSencilloLb").show();
                $("#menoresSencillo").show();
                for (j = 0; j < numeroNinos; j++) {
                    AgregarSelectMenoresSencillo(j);
                }
            }
            else {
                $("#menoresSencilloLb").hide();
                $("#menoresSencillo").show();
            }
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $("#ninos3").change(function () {
        var adultos = $('#adultos3').val();
        var ninos = $('#ninos3').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos3").selectedIndex = "0";
            document.getElementById("ninos3").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresMultiDestino");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresMultiDestino').show();
        }
        else {
            var menores = document.getElementById("grupoMenoresMultiDestino");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            var numeroNinos = $("#ninos3").val();
            if (numeroNinos > 0) {
                $("#menoresMultiDestinoLb").show();
                $("#menoresMultiDestino").show();
                for (j = 0; j < numeroNinos; j++) {
                    AgregarSelectMenoresMultidestino(j);
                }
            }
            else {
                $("#menoresMultiDestinoLb").hide();
                $("#menoresMultiDestino").show();
            }
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });

    $("#ninos4").change(function () {
        var adultos = $('#adultos4').val();
        var ninos = $('#ninos4').val(); //numero niños       
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        if (totalViajeros > 9) {
            alert('Maximo de viajeros permitido es 9.');
            document.getElementById("adultos4").selectedIndex = "0";
            document.getElementById("ninos4").selectedIndex = "0";
            //Limpiar Selects Edades niños
            var menores = document.getElementById("grupoMenoresMultiDestino4");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            $('#menoresMultiDestino4').show();
        }
        else {
            var menores = document.getElementById("grupoMenoresMultiDestino4");
            while (menores.firstChild) {
                menores.removeChild(menores.firstChild);
            }
            var numeroNinos = $("#ninos4").val();
            if (numeroNinos > 0) {
                $("#menoresMultiDestinoLb4").show();
                $("#menoresMultiDestino4").show();
                for (j = 0; j < numeroNinos; j++) {
                    AgregarSelectMenoresMultidestino4(j);
                }
            }
            else {
                $("#menoresMultiDestinoLb4").hide();
                $("#menoresMultiDestino4").show();
            }
            document.getElementById("numViajerosADT").value = adultos;
            document.getElementById("numViajerosCHD").value = ninos;
        }
    });



    $("#txtFiltrarUsuarios").keyup(function () {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("txtFiltrarUsuarios");
        filter = input.value.toUpperCase();
        table = document.getElementById("TableUsers");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });

    $('.mi-selector').select2();

    //$('#origenes').autocomplete({
    //    source: arrayCiudades.values

    //});

    $('#fechaIda1').val(new Date());

    $('#fechaRegreso1').val(new Date());

    $('#btnIdayVuelta').click(function () {
        $('#spinnerVuelos').show();
        var metodo = 'IdaRegreso';
        var fechaIda = $('#fechaIda1').val();
        var fechaRegreso = $('#fechaRegreso1').val();
        var origen = $('#origen1').val();
        var destino = $('#destino1').val();
        var textOrigen = $('#origen1 option:selected').text();
        var textDestino = $('#destino1 option:selected').text();
        var cabina = $('#cabina1').val();
        var adultos = $('#adultos1').val();
        var ninos = $('#ninos1').val(); //numero niños
        var infantes = 0;
        var totalNinos = 0;
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        //detectar edades
        //ADT : Adulto
        //CNN ; Niño entre 2 y 11 años
        //INF: Infante menor de 2 años
        //11 a 17 es ya adulto
        for (var e = 0; e < ninos; e++) {
            var edad = $('#ninoIdaVueltaEdad' + e).val();
            if (edad > 11) {
                adultos = parseInt(adultos, 10) + 1;
            }
            if (edad < 2) {
                infantes = parseInt(infantes, 10) + 1;
            }
            if (edad >= 2 && edad <= 11) {
                totalNinos = parseInt(totalNinos, 10) + 1;
            }
        }

        if (fechaIda != "" && fechaRegreso != "" && origen != "" && destino != "") {
            $.ajax({
                url: 'https://www.grupos.co/gruposPoint/point.php',
                type: 'post',
                data: {
                    'metodo': metodo,
                    'fechaIda': fechaIda,
                    'fechaRegreso': fechaRegreso,
                    'origen': origen,
                    'destino': destino,
                    'cabina': cabina,
                    'adultos': adultos,
                    'ninos': totalNinos,
                    'infantes': infantes
                },
                success: function (respuesta) {
                    var xmlDocument = $.parseXML(respuesta);
                    var $xml = $(xmlDocument);

                    $('KIU_AirAvailRS', $xml).each(function () {

                        var FDepartureDateTime = "";
                        var FArrivalDateTime = "";
                        var FStopQuantity = "";
                        var FFlightNumber = "";

                        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
                        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

                        $('#TableIda > tbody').empty();
                        $('#TableIda > thead').empty();

                        $('#TableRegreso > tbody').empty();
                        $('#TableRegreso > thead').empty();
                        var index = 0;
                        $(this).find("OriginDestinationInformation").each(function () { //Se recorren los nodos de la etiqueta KIU_AirAvailRS
                            if (index == 0) {
                                DepartureDateTime = $(this).find("DepartureDateTime").text();
                                fechaRegreso = new Date(DepartureDateTime);
                                textoFechaIda = (diasSemana[fechaRegreso.getDay() + 1] + ", " + (fechaRegreso.getDate() + 1) + " de " + meses[fechaRegreso.getMonth()] + " de " + fechaRegreso.getFullYear());
                                OriginLocation = $(this).find("OriginLocation").text();
                                DestinationLocation = $(this).find("DestinationLocation").text();
                                $("#divResultados #TableIda thead").append(
                                    '<tr>' +
                                    '<th colspan="4"><strong>IDA:  ' + textoFechaIda + '</strong><br/>' + textOrigen + '  -  ' + textDestino + '</th>' +
                                    '<th class="text-center"><strong><span id="thMiniIda">MINI</span></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMaxiIda">MAXI</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thSuperIda">SUPER</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMegaIda">MEGA</p></strong></th>' +
                                    '</tr>');
                                OriginDestinationOptions = $(this).find("OriginDestinationOptions");
                                OriginDestinationOptions.each(function () {//acceder a opciones
                                    vuelos = OriginDestinationOptions.find("FlightSegment");
                                    var v = 0; //Indice de cada vuelo
                                    var arrayVuelos = new Array();
                                    vuelos.each(function () {//leear cada vuelo
                                        FDepartureDateTime = $(this).attr("DepartureDateTime");
                                        FArrivalDateTime = $(this).attr("ArrivalDateTime");
                                        FStopQuantity = $(this).attr("StopQuantity");
                                        FFlightNumber = $(this).attr("FlightNumber");
                                        FJourneyDuration = $(this).attr("JourneyDuration");

                                        FEquipment = $(this).find("Equipment").attr("AirEquipType");
                                        FMarketingAirline = $(this).find("MarketingAirline").attr("CompanyShortName");
                                        FMeal = $(this).find("Meal").attr("MealCode");
                                        ;
                                        FDMarketingCabinRPH = $(this).find("MarketingCabin").attr("RPH");


                                        BookingClassAvail = $(this).find("BookingClassAvail");
                                        arrayVuelos.push($(this));

                                        $("#divResultados #TableIda tbody").append(
                                            '<tr>' +
                                            '<td>' + FDepartureDateTime.substring(11, 19) + '<br/>' + FArrivalDateTime.substring(11, 19) + '</td>' +
                                            '<td>' + textOrigen + '<br/>' + textDestino + '</td>' +
                                            '<td><img src="../Images/gca_logo.png" /><br/>' + FStopQuantity + 'Paradas</td>' +
                                            '<td><a href="#" data-toggle="modal" data-target="#modalDetalleVuelo" data-fecha ="' + textoFechaIda + '" data-numvuelo="' + FFlightNumber + '" data-origen="' + textOrigen + '" data-destino="' + textDestino + '" data-hora-salida="' + FDepartureDateTime.substring(11, 19) + '" data-hora-llegada="' + FArrivalDateTime.substring(11, 19) + '" data-tiempo="' + FJourneyDuration + '">Ver detalle</a><input style="display:none" id="fechaSalidaIda' + v + '" value= "' + FDepartureDateTime + '"> <input style="display:none" id="fechaLlegadaIda' + v + '" value= "' + FArrivalDateTime + '"> <input style="display:none" id="numVueloIda' + v + '" value= "' + FFlightNumber + '"></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMiniOpc' + v + '" value="" /><p id="IdaMini' + v + '">no disponible</p><p id="IdaMiniPuestos' + v + '"> no disponible</p><p id="IdaMiniImpuesto' + v + '"></p><p id="IdaMiniClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMaxiOpc' + v + '" value="" /><p id="IdaMaxi' + v + '">no disponible</p><p id="IdaMaxiPuestos' + v + '"> no disponible</p><p id="IdaMaxiImpuesto' + v + '"></><p id="IdaMaxiClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaSuperOpc' + v + '" value="" /><p id="IdaSuper' + v + '">no disponible</p><p id="IdaSuperPuestos' + v + '"> no disponible</p><p id="IdaSuperImpuesto' + v + '"></p><p id="IdaSuperClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMegaOpc' + v + '" value="" /><p id="IdaMega' + v + '">no disponible</p><p id="IdaMegaPuestos' + v + '"> no disponible</p><p id="IdaMegaImpuesto' + v + '"></p><p id="IdaMegaClase' + v + '"></p></td>' +
                                            '</tr>');
                                        v++;
                                    });
                                    //sacar los precios de las clases y pintarlos en la tabla

                                    ConsultaryPintarPrecios(arrayVuelos, OriginLocation, DestinationLocation, adultos, ninos, "Ida", totalViajeros);
                                });
                            }
                            else {
                                DepartureDateTime = $(this).find("DepartureDateTime").text();
                                fechaRegreso = new Date(DepartureDateTime);
                                textoFechaRegreso = (diasSemana[fechaRegreso.getDay()] + ", " + (fechaRegreso.getDate() + 1) + " de " + meses[fechaRegreso.getMonth()] + " de " + fechaRegreso.getFullYear());
                                OriginLocation = $(this).find("OriginLocation").text();
                                DestinationLocation = $(this).find("DestinationLocation").text();
                                $("#divResultados #TableRegreso thead").append(
                                    '<tr>' +
                                    '<th colspan="4"><strong>REGRESO:  ' + textoFechaRegreso + '</strong><br/>' + textDestino + '  -  ' + textOrigen + '</th>' +
                                    '<th class="text-center"><strong><p id="thMiniRegreso">MINI</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMaxiRegreso">MAXI</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thSuperRegreso">SUPER</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMegaRegreso">MEGA</p></strong></th>' +
                                    '</tr>');
                                OriginDestinationOptions = $(this).find("OriginDestinationOptions");
                                OriginDestinationOptions.each(function () {//acceder a opciones
                                    vuelos = OriginDestinationOptions.find("FlightSegment");
                                    var v = 0; //Indice de cada vuelo
                                    var arrayVuelos = new Array();
                                    vuelos.each(function () {//leear cada vuelo
                                        FDepartureDateTime = $(this).attr("DepartureDateTime");
                                        FArrivalDateTime = $(this).attr("ArrivalDateTime");
                                        FStopQuantity = $(this).attr("StopQuantity");
                                        FFlightNumber = $(this).attr("FlightNumber");
                                        FJourneyDuration = $(this).attr("JourneyDuration");

                                        FEquipment = $(this).find("Equipment").attr("AirEquipType");
                                        FMarketingAirline = $(this).find("MarketingAirline").attr("CompanyShortName");
                                        FMeal = $(this).find("Meal").attr("MealCode");
                                        ;
                                        FDMarketingCabinRPH = $(this).find("MarketingCabin").attr("RPH");


                                        BookingClassAvail = $(this).find("BookingClassAvail");
                                        arrayVuelos.push($(this));

                                        $("#divResultados #TableRegreso tbody").append(
                                            '<tr>' +
                                            '<td>' + FDepartureDateTime.substring(11, 19) + '<br/>' + FArrivalDateTime.substring(11, 19) + '</td>' +
                                            '<td>' + textDestino + '<br/>' + textOrigen + '</td>' +
                                            '<td><img src="../Images/gca_logo.png" /><br/>' + FStopQuantity + 'Paradas</td>' +
                                            '<td><a href="#" data-toggle="modal" data-target="#modalDetalleVuelo" data-fecha ="' + textoFechaRegreso + '" data-numvuelo="' + FFlightNumber + '" data-origen="' + textDestino + '" data-destino="' + textOrigen + '" data-hora-salida="' + FDepartureDateTime.substring(11, 19) + '" data-hora-llegada="' + FArrivalDateTime.substring(11, 19) + '" data-tiempo="' + FJourneyDuration + '">Ver detalle</a> <input style="display:none" id="fechaSalidaRegreso' + v + '" value= "' + FDepartureDateTime + '"> <input style="display:none" id="fechaLlegadaRegreso' + v + '" value= "' + FArrivalDateTime + '"> <input style="display:none" id="numVueloRegreso' + v + '" value= "' + FFlightNumber + '"></td>' +
                                            '<td><input type="radio" class="check_classR" id="RegresoMiniOpc' + v + '" value="" /><p id="RegresoMini' + v + '">no disponible</p><p id="RegresoMiniPuestos' + v + '"> no disponible</p><p id="RegresoMiniImpuesto' + v + '"><p id="RegresoMiniClase' + v + '"></td>' +
                                            '<td><input class="check_classR" type="radio" id="RegresoMaxiOpc' + v + '" value="" /><p id="RegresoMaxi' + v + '">no disponible</p><p id="RegresoMaxiPuestos' + v + '"> no disponible</p><p id="RegresoMaxiImpuesto' + v + '"><p id="RegresoMaxiClase' + v + '"></td>' +
                                            '<td><input class="check_classR" type="radio" id="RegresoSuperOpc' + v + '" value="" /><p id="RegresoSuper' + v + '">no disponible</p><p id="RegresoSuperPuestos' + v + '">no disponible</p><p id="RegresoSuperImpuesto' + v + '"><p id="RegresoSuperClase' + v + '">' +
                                            '</td><td><input class="check_classR" type="radio" id="RegresoMegaOpc' + v + '" value="" /><p id="RegresoMega' + v + '">no disponible</p><p id="RegresoMegaPuestos' + v + '"> no disponible</p><p id="RegresoMegaImpuesto' + v + '"><p id="RegresoMegaClase' + v + '"></td>' +
                                            '</tr>');
                                        v++;
                                    });
                                    //sacar los precios de las clases y pintarlos en la tabla

                                    ConsultaryPintarPrecios(arrayVuelos, OriginLocation, DestinationLocation, adultos, ninos, "Regreso", totalViajeros);
                                });
                            }
                            index++;
                        });
                        $('#divResultados').css("display", "block");
                        $('#btnReservar').css("display", "block");
                        $('#btnReservarSencillo').css("display", "none");
                        $('#btnReservarMultidestino').css("display", "none");
                        $('#valorTotal').css("display", "block");
                    });
                },
                error: function () {
                    $('#spinnerVuelos').hide();
                },
                complete: function () {
                    $('#spinnerVuelos').hide();
                }
            });
        }
        else {
            $('#spinnerVuelos').hide();
            alert('Formulario de busqueda incompleto.');
        }
    });

    $('#btnSencillo').click(function () {
        $('#spinnerVuelos').show();
        var metodo = 'Sencillo';
        var fechaIda = $('#fechaIda2').val();
        var origen = $('#origen2').val();
        var destino = $('#destino2').val();
        var textOrigen = $('#origen2 option:selected').text();
        var textDestino = $('#destino2 option:selected').text();
        var cabina = $('#cabina2').val();
        var adultos = $('#adultos2').val();
        var ninos = $('#ninos2').val(); //numero niños
        var infantes = 0;
        var totalNinos = 0;
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        //detectar edades
        //ADT : Adulto
        //CNN ; Niño entre 2 y 11 años
        //INF: Infante menor de 2 años
        //11 a 17 es ya adulto
        for (var e = 0; e < ninos; e++) {
            var edad = $('#ninoSencilloEdad' + e).val();
            if (edad > 11) {
                adultos = parseInt(adultos, 10) + 1;
            }
            if (edad < 2) {
                infantes = parseInt(infantes, 10) + 1;
            }
            if (edad >= 2 && edad <= 11) {
                totalNinos = parseInt(totalNinos, 10) + 1;
            }
        }

        if (fechaIda != "" && origen != "" && destino != "") {
            $.ajax({
                url: 'https://www.grupos.co/gruposPoint/point.php',
                type: 'post',
                data: {
                    'metodo': metodo,
                    'fecha': fechaIda,
                    'origen': origen,
                    'destino': destino,
                    'cabina': cabina,
                    'adultos': adultos,
                    'ninos': totalNinos,
                    //'infantes': infantes
                },
                success: function (respuesta) {
                    var xmlDocument = $.parseXML(respuesta);
                    var $xml = $(xmlDocument);

                    $('KIU_AirAvailRS', $xml).each(function () {

                        var FDepartureDateTime = "";
                        var FArrivalDateTime = "";
                        var FStopQuantity = "";
                        var FFlightNumber = "";

                        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
                        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

                        $('#TableIda > tbody').empty();
                        $('#TableIda > thead').empty();

                        $('#TableRegreso > tbody').empty();
                        $('#TableRegreso > thead').empty();
                        var index = 0;
                        $(this).find("OriginDestinationInformation").each(function () { //Se recorren los nodos de la etiqueta KIU_AirAvailRS
                            if (index == 0) {
                                DepartureDateTime = $(this).find("DepartureDateTime").text();
                                fechaRegreso = new Date(DepartureDateTime);
                                textoFechaIda = (diasSemana[fechaRegreso.getDay() + 1] + ", " + (fechaRegreso.getDate() + 1) + " de " + meses[fechaRegreso.getMonth()] + " de " + fechaRegreso.getFullYear());
                                OriginLocation = $(this).find("OriginLocation").text();
                                DestinationLocation = $(this).find("DestinationLocation").text();
                                $("#divResultados #TableIda thead").append(
                                    '<tr>' +
                                    '<th colspan="4"><strong>IDA:  ' + textoFechaIda + '</strong><br/>' + textOrigen + '  -  ' + textDestino + '</th>' +
                                    '<th class="text-center"><strong><span id="thMiniIda">MINI</span></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMaxiIda">MAXI</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thSuperIda">SUPER</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMegaIda">MEGA</p></strong></th>' +
                                    '</tr>');
                                OriginDestinationOptions = $(this).find("OriginDestinationOptions");
                                OriginDestinationOptions.each(function () {//acceder a opciones
                                    vuelos = OriginDestinationOptions.find("FlightSegment");
                                    var v = 0; //Indice de cada vuelo
                                    var arrayVuelos = new Array();
                                    vuelos.each(function () {//leear cada vuelo
                                        FDepartureDateTime = $(this).attr("DepartureDateTime");
                                        FArrivalDateTime = $(this).attr("ArrivalDateTime");
                                        FStopQuantity = $(this).attr("StopQuantity");
                                        FFlightNumber = $(this).attr("FlightNumber");
                                        FJourneyDuration = $(this).attr("JourneyDuration");

                                        FEquipment = $(this).find("Equipment").attr("AirEquipType");
                                        FMarketingAirline = $(this).find("MarketingAirline").attr("CompanyShortName");
                                        FMeal = $(this).find("Meal").attr("MealCode");
                                        ;
                                        FDMarketingCabinRPH = $(this).find("MarketingCabin").attr("RPH");


                                        BookingClassAvail = $(this).find("BookingClassAvail");
                                        arrayVuelos.push($(this));

                                        $("#divResultados #TableIda tbody").append(
                                            '<tr>' +
                                            '<td>' + FDepartureDateTime.substring(11, 19) + '<br/>' + FArrivalDateTime.substring(11, 19) + '</td>' +
                                            '<td>' + textOrigen + '<br/>' + textDestino + '</td>' +
                                            '<td><img src="../Images/gca_logo.png" /><br/>' + FStopQuantity + 'Paradas</td>' +
                                            '<td><a href="#" data-toggle="modal" data-target="#modalDetalleVuelo" data-fecha ="' + textoFechaIda + '" data-numvuelo="' + FFlightNumber + '" data-origen="' + textOrigen + '" data-destino="' + textDestino + '" data-hora-salida="' + FDepartureDateTime.substring(11, 19) + '" data-hora-llegada="' + FArrivalDateTime.substring(11, 19) + '" data-tiempo="' + FJourneyDuration + '">Ver detalle</a><input style="display:none" id="fechaSalidaIda' + v + '" value= "' + FDepartureDateTime + '"> <input style="display:none" id="fechaLlegadaIda' + v + '" value= "' + FArrivalDateTime + '"> <input style="display:none" id="numVueloIda' + v + '" value= "' + FFlightNumber + '"></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMiniOpc' + v + '" value="" /><p id="IdaMini' + v + '">no disponible</p><p id="IdaMiniPuestos' + v + '"> no disponible</p><p id="IdaMiniImpuesto' + v + '"></p><p id="IdaMiniClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMaxiOpc' + v + '" value="" /><p id="IdaMaxi' + v + '">no disponible</p><p id="IdaMaxiPuestos' + v + '"> no disponible</p><p id="IdaMaxiImpuesto' + v + '"></><p id="IdaMaxiClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaSuperOpc' + v + '" value="" /><p id="IdaSuper' + v + '">no disponible</p><p id="IdaSuperPuestos' + v + '"> no disponible</p><p id="IdaSuperImpuesto' + v + '"></p><p id="IdaSuperClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMegaOpc' + v + '" value="" /><p id="IdaMega' + v + '">no disponible</p><p id="IdaMegaPuestos' + v + '"> no disponible</p><p id="IdaMegaImpuesto' + v + '"></p><p id="IdaMegaClase' + v + '"></p></td>' +
                                            '</tr>');
                                        v++;
                                    });
                                    //sacar los precios de las clases y pintarlos en la tabla

                                    ConsultaryPintarPrecios(arrayVuelos, OriginLocation, DestinationLocation, adultos, ninos, "Ida", totalViajeros);
                                });
                            }
                            index++;
                        });
                        $('#divResultados').css("display", "block");
                        $('#btnReservar').css("display", "none");
                        $('#btnReservarMultidestino').css("display", "none");
                        $('#btnReservarSencillo').css("display", "block");
                        $('#valorTotal').css("display", "block");
                    });
                },
                error: function () {
                    $('#spinnerVuelos').hide();
                },
                complete: function () {
                    $('#spinnerVuelos').hide();
                }
            });
        }
        else {
            $('#spinnerVuelos').hide();
            alert('Formulario de busqueda incompleto.');
        }
    });

    $('#btnReservarMultidestino').click(function () {
        $('#spinnerVuelos').show();
        var metodo = 'Sencillo';
        var fechaIda = $('#fechaIda2').val();
        var origen = $('#origen2').val();
        var destino = $('#destino2').val();
        var textOrigen = $('#origen2 option:selected').text();
        var textDestino = $('#destino2 option:selected').text();
        var cabina = $('#cabina2').val();
        var adultos = $('#adultos2').val();
        var ninos = $('#ninos2').val(); //numero niños
        var infantes = 0;
        var totalNinos = 0;
        var totalViajeros = parseInt(adultos) + parseInt(ninos);
        //detectar edades
        //ADT : Adulto
        //CNN ; Niño entre 2 y 11 años
        //INF: Infante menor de 2 años
        //11 a 17 es ya adulto
        for (var e = 0; e < ninos; e++) {
            var edad = $('#ninoSencilloEdad' + e).val();
            if (edad > 11) {
                adultos = parseInt(adultos, 10) + 1;
            }
            if (edad < 2) {
                infantes = parseInt(infantes, 10) + 1;
            }
            if (edad >= 2 && edad <= 11) {
                totalNinos = parseInt(totalNinos, 10) + 1;
            }
        }

        if (fechaIda != "" && origen != "" && destino != "") {
            $.ajax({
                url: 'https://www.grupos.co/gruposPoint/point.php',
                type: 'post',
                data: {
                    'metodo': metodo,
                    'fecha': fechaIda,
                    'origen': origen,
                    'destino': destino,
                    'cabina': cabina,
                    'adultos': adultos,
                    'ninos': totalNinos,
                    //'infantes': infantes
                },
                success: function (respuesta) {
                    var xmlDocument = $.parseXML(respuesta);
                    var $xml = $(xmlDocument);

                    $('KIU_AirAvailRS', $xml).each(function () {

                        var FDepartureDateTime = "";
                        var FArrivalDateTime = "";
                        var FStopQuantity = "";
                        var FFlightNumber = "";

                        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
                        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

                        $('#TableIda > tbody').empty();
                        $('#TableIda > thead').empty();

                        $('#TableRegreso > tbody').empty();
                        $('#TableRegreso > thead').empty();
                        var index = 0;
                        $(this).find("OriginDestinationInformation").each(function () { //Se recorren los nodos de la etiqueta KIU_AirAvailRS
                            if (index == 0) {
                                DepartureDateTime = $(this).find("DepartureDateTime").text();
                                fechaRegreso = new Date(DepartureDateTime);
                                textoFechaIda = (diasSemana[fechaRegreso.getDay() + 1] + ", " + (fechaRegreso.getDate() + 1) + " de " + meses[fechaRegreso.getMonth()] + " de " + fechaRegreso.getFullYear());
                                OriginLocation = $(this).find("OriginLocation").text();
                                DestinationLocation = $(this).find("DestinationLocation").text();
                                $("#divResultados #TableIda thead").append(
                                    '<tr>' +
                                    '<th colspan="4"><strong>IDA:  ' + textoFechaIda + '</strong><br/>' + textOrigen + '  -  ' + textDestino + '</th>' +
                                    '<th class="text-center"><strong><span id="thMiniIda">MINI</span></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMaxiIda">MAXI</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thSuperIda">SUPER</p></strong></th>' +
                                    '<th class="text-center"><strong><p id="thMegaIda">MEGA</p></strong></th>' +
                                    '</tr>');
                                OriginDestinationOptions = $(this).find("OriginDestinationOptions");
                                OriginDestinationOptions.each(function () {//acceder a opciones
                                    vuelos = OriginDestinationOptions.find("FlightSegment");
                                    var v = 0; //Indice de cada vuelo
                                    var arrayVuelos = new Array();
                                    vuelos.each(function () {//leear cada vuelo
                                        FDepartureDateTime = $(this).attr("DepartureDateTime");
                                        FArrivalDateTime = $(this).attr("ArrivalDateTime");
                                        FStopQuantity = $(this).attr("StopQuantity");
                                        FFlightNumber = $(this).attr("FlightNumber");
                                        FJourneyDuration = $(this).attr("JourneyDuration");

                                        FEquipment = $(this).find("Equipment").attr("AirEquipType");
                                        FMarketingAirline = $(this).find("MarketingAirline").attr("CompanyShortName");
                                        FMeal = $(this).find("Meal").attr("MealCode");
                                        ;
                                        FDMarketingCabinRPH = $(this).find("MarketingCabin").attr("RPH");


                                        BookingClassAvail = $(this).find("BookingClassAvail");
                                        arrayVuelos.push($(this));

                                        $("#divResultados #TableIda tbody").append(
                                            '<tr>' +
                                            '<td>' + FDepartureDateTime.substring(11, 19) + '<br/>' + FArrivalDateTime.substring(11, 19) + '</td>' +
                                            '<td>' + textOrigen + '<br/>' + textDestino + '</td>' +
                                            '<td><img src="../Images/gca_logo.png" /><br/>' + FStopQuantity + 'Paradas</td>' +
                                            '<td><a href="#" data-toggle="modal" data-target="#modalDetalleVuelo" data-fecha ="' + textoFechaIda + '" data-numvuelo="' + FFlightNumber + '" data-origen="' + textOrigen + '" data-destino="' + textDestino + '" data-hora-salida="' + FDepartureDateTime.substring(11, 19) + '" data-hora-llegada="' + FArrivalDateTime.substring(11, 19) + '" data-tiempo="' + FJourneyDuration + '">Ver detalle</a><input style="display:none" id="fechaSalidaIda' + v + '" value= "' + FDepartureDateTime + '"> <input style="display:none" id="fechaLlegadaIda' + v + '" value= "' + FArrivalDateTime + '"> <input style="display:none" id="numVueloIda' + v + '" value= "' + FFlightNumber + '"></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMiniOpc' + v + '" value="" /><p id="IdaMini' + v + '">no disponible</p><p id="IdaMiniPuestos' + v + '"> no disponible</p><p id="IdaMiniImpuesto' + v + '"></p><p id="IdaMiniClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMaxiOpc' + v + '" value="" /><p id="IdaMaxi' + v + '">no disponible</p><p id="IdaMaxiPuestos' + v + '"> no disponible</p><p id="IdaMaxiImpuesto' + v + '"></><p id="IdaMaxiClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaSuperOpc' + v + '" value="" /><p id="IdaSuper' + v + '">no disponible</p><p id="IdaSuperPuestos' + v + '"> no disponible</p><p id="IdaSuperImpuesto' + v + '"></p><p id="IdaSuperClase' + v + '"></p></td>' +
                                            '<td><input class="check_class" type="radio" id="IdaMegaOpc' + v + '" value="" /><p id="IdaMega' + v + '">no disponible</p><p id="IdaMegaPuestos' + v + '"> no disponible</p><p id="IdaMegaImpuesto' + v + '"></p><p id="IdaMegaClase' + v + '"></p></td>' +
                                            '</tr>');
                                        v++;
                                    });
                                    //sacar los precios de las clases y pintarlos en la tabla

                                    ConsultaryPintarPrecios(arrayVuelos, OriginLocation, DestinationLocation, adultos, ninos, "Ida", totalViajeros);
                                });
                            }
                            index++;
                        });
                        $('#divResultados').css("display", "block");
                        $('#btnReservar').css("display", "none");
                        $('#btnReservarMultidestino').css("display", "block");
                        $('#btnReservarSencillo').css("display", "none");
                        $('#valorTotal').css("display", "block");
                    });
                },
                error: function () {
                    $('#spinnerVuelos').hide();
                },
                complete: function () {
                    $('#spinnerVuelos').hide();
                }
            });
        }
        else {
            $('#spinnerVuelos').hide();
            alert('Formulario de busqueda incompleto.');
        }
    });

    $('#modalDetalleVuelo').on('show.bs.modal', function (e) {
        var numVuelo = $(e.relatedTarget).data('numvuelo');
        var origen = $(e.relatedTarget).data('origen');
        var destino = $(e.relatedTarget).data('destino');
        var horaSalida = $(e.relatedTarget).data('hora-salida');
        var horaLlegada = $(e.relatedTarget).data('hora-llegada');
        var tiempo = $(e.relatedTarget).data('tiempo');
        var horas = tiempo.substring(0, 2);
        var min = tiempo.substring(3, 5);
        var fecha = $(e.relatedTarget).data('fecha');
        $('#Numerovuelo').text("");
        $('#origen').text("");
        $('#destino').text("");
        $('#horaSalida').text("");
        $('#horaLlegada').text("");
        $('#tiempo').text("");
        $('#fecha').text("");
        $('#fecha1').text("");
        $('#Numerovuelo').append('Primer tramo - Vuelo ' + numVuelo);
        $('#origen').append('<strong>' + origen + '</strong>');
        $('#destino').append('<strong>' + destino + '</strong>');
        $('#horaSalida').append(horaSalida);
        $('#horaLlegada').append(horaLlegada);
        $('#fecha').append(fecha);
        $('#fecha1').append(fecha);
        $('#tiempo').append("Duración del vuelo de " + horas + " horas y " + min + " minutos.");
    });

    $(document).on('mouseover', '#thMiniIda', function () {
        $('#informativoMini').show();
    });

    $(document).on('mouseout', '#thMiniIda', function () {
        $('#informativoMini').hide();
    });

    $(document).on('mouseover', '#thMaxiIda', function () {
        $('#informativoMaxi').show();
    });

    $(document).on('mouseout', '#thMaxiIda', function () {
        $('#informativoMaxi').hide();
    });

    $(document).on('mouseover', '#thMegaIda', function () {
        $('#informativoMega').show();
    });

    $(document).on('mouseout', '#thMegaIda', function () {
        $('#informativoMega').hide();
    });

    $(document).on('mouseover', '#thSuperIda', function () {
        $('#informativoSuper').show();
    });

    $(document).on('mouseout', '#thSuperIda', function () {
        $('#informativoSuper').hide();
    });

    $(document).on('mouseover', '#thMiniRegreso', function () {
        $('#informativoMiniReg').show();
    });

    $(document).on('mouseout', '#thMiniRegreso', function () {
        $('#informativoMiniReg').hide();
    });

    $(document).on('mouseover', '#thMaxiRegreso', function () {
        $('#informativoMaxiReg').show();
    });
    $(document).on('mouseout', '#thMaxiRegreso', function () {
        $('#informativoMaxiReg').hide();
    });

    $(document).on('mouseover', '#thMegaRegreso', function () {
        $('#informativoMegaReg').show();
    });

    $(document).on('mouseout', '#thMegaRegreso', function () {
        $('#informativoMegaReg').hide();
    });

    $(document).on('mouseover', '#thSuperRegreso', function () {
        $('#informativoSuperReg').show();
    });

    $(document).on('mouseout', '#thSuperRegreso', function () {
        $('#informativoSuperReg').hide();
    });

    $('#btnRecuperarPassword').click(function () {
        window.location.href = "/RecuperarPassword/Index";
    });

    $('#btnRecuperar').click(function () {
        $('#spinnerEnviarEmail').show();
        var correo = $('#correo').val();
        if (correo != '') {
            $.ajax({
                url: '/RecuperarPassword/EnviarCorreoRecuperacion',
                type: 'post',
                data: {
                    'email': correo
                },
                success: function (respuesta) {
                    $('#spinnerEnviarEmail').hide();
                    if (respuesta == 2) {//Enviado Ok
                        $('#notificacionEmailNOk').text('')
                        $('#notificacionEmailOk').text('')
                        $('#notificacionEmailOk').append('Hemos enviado un código de validación al correo ingresado.');
                        $('#notificacionEmailOk').show();
                        $('#notificacionEmailNOk').hide();
                    }
                    else if (respuesta == 1) {//Error al enviar
                        $('#notificacionEmailNOk').text('')
                        $('#notificacionEmailOk').text('')
                        $('#notificacionEmailNOk').append('Ocurrió un problema al enviar correo, intenta de nuevo más tarde.');
                        $('#notificacionEmailNOk').show();
                        $('#notificacionEmailOk').hide();
                    }
                    else if (respuesta == 0) {//no existe
                        $('#notificacionEmailNOk').text('')
                        $('#notificacionEmailOk').text('')
                        $('#notificacionEmailNOk').append('El correo electrónico ingresado no es válido.');
                        $('#notificacionEmailNOk').show();
                        $('#notificacionEmailOk').hide();
                    }
                },
                error: function (data) {
                    $('#spinnerEnviarEmail').hide();
                    alert('error' + data);
                },
                failure: function (r) {
                    $('#spinnerEnviarEmail').hide();
                    alert('fallo' + r);
                }
            });
        }
        else {
            $('#spinnerEnviarEmail').hide();
            $('#notificacionEmailNOk').text('')
            $('#notificacionEmailOk').text('')
            $('#notificacionEmailNOk').append('Debe ingresar el correo electrónico registrado.');
            $('#notificacionEmailNOk').show();
            $('#notificacionEmailOk').hide();
        }
    });

    $('#btnCambiarPassword').click(function () {
        $('#spinnerCambiarPassword').show();
        var tokenNumber = $('#tokenNumber').val();
        var passwordChange = $('#passwordChange').val();
        var passwordChangeConfirm = $('#passwordChangeConfirm').val();
        if (tokenNumber != '' && passwordChange != '' && passwordChangeConfirm != '') {
            if (passwordChange == passwordChangeConfirm) {
                if (passwordChange.length >= 10 && passwordChangeConfirm.length >= 10) {
                    $.ajax({
                        url: '/RecuperarPassword/CambiarPassword',
                        type: 'post',
                        data: {
                            'tokenNumber': tokenNumber,
                            'passwordChange': passwordChange
                        },
                        success: function (respuesta) {
                            $('#spinnerCambiarPassword').hide();
                            if (respuesta == 3) {
                                $('#notificacionPasswordNOk').text('')
                                $('#notificacionPasswordOk').text('')
                                $('#notificacionPasswordOk').append('Contraseña cambiada correctamente.');
                                $('#notificacionPasswordOk').show();
                                $('#notificacionPasswordNOk').hide();
                            }
                            if (respuesta == 2) {
                                $('#notificacionPasswordNOk').text('')
                                $('#notificacionPasswordOk').text('')
                                $('#notificacionPasswordNOk').append('No es posible hacer el cambio en este momento, intente más tarde.');
                                $('#notificacionPasswordNOk').show();
                                $('#notificacionPasswordOk').hide();
                            }
                            if (respuesta == 1) {
                                $('#notificacionPasswordNOk').text('')
                                $('#notificacionPasswordOk').text('')
                                $('#notificacionPasswordNOk').append('El token ingresado es incorrecto o ya venció.');
                                $('#notificacionPasswordNOk').show();
                                $('#notificacionPasswordOk').hide();
                            }
                        },
                        error: function (data) {
                            $('#spinnerCambiarPassword').hide();
                            alert('error' + data);
                        },
                        failure: function (r) {
                            $('#spinnerCambiarPassword').hide();
                            alert('fallo' + r);
                        }
                    });
                }
                else {
                    $('#spinnerCambiarPassword').hide();
                    $('#notificacionPasswordNOk').text('')
                    $('#notificacionPasswordOk').text('')
                    $('#notificacionPasswordNOk').append('La contraseña debe contener minimo 10 caracteres.');
                    $('#notificacionPasswordNOk').show();
                    $('#notificacionPasswordOk').hide();
                }
            }
            else {
                $('#spinnerCambiarPassword').hide();
                $('#notificacionPasswordNOk').text('')
                $('#notificacionPasswordOk').text('')
                $('#notificacionPasswordNOk').append('Las contraseñas no coinciden.');
                $('#notificacionPasswordNOk').show();
                $('#notificacionPasswordOk').hide();
            }
        }
        else {
            $('#spinnerCambiarPassword').hide();
            $('#notificacionPasswordNOk').text('')
            $('#notificacionPasswordOk').text('')
            $('#notificacionPasswordNOk').append('Debe diligenciar todo el formulario.');
            $('#notificacionPasswordNOk').show();
            $('#notificacionPasswordOk').hide();
        }
    });

    $('#btnVuelos').click(function () {
        $('#principal').css("display", "none");
        $('#vuelos').css("display", "block");
        ObtenerCiudades();
    });

    $('#IdayVuelta').click(function () {
        $('#IdayVuelta').prop("checked", true);
        $('#Sencillo').prop("checked", false);
        $('#Multidestino').prop("checked", false);
        $('#FormIdayVuelta').css("display", "block");
        $('#FormSencillo').css("display", "none");
        $('#FormMultidestino').css("display", "none");
    });

    $('#Sencillo').click(function () {
        $('#IdayVuelta').prop("checked", false);
        $('#Sencillo').prop("checked", true);
        $('#Multidestino').prop("checked", false);
        $('#FormIdayVuelta').css("display", "none");
        $('#FormSencillo').css("display", "block");
        $('#FormMultidestino').css("display", "none");
    });

    $('#Multidestino').click(function () {
        $('#IdayVuelta').prop("checked", false);
        $('#Sencillo').prop("checked", false);
        $('#Multidestino').prop("checked", true);
        $('#FormIdayVuelta').css("display", "none");
        $('#FormSencillo').css("display", "none");
        $('#FormMultidestino').css("display", "block");
    });

    $('#btnAdministrarUsuarios').click(function () {
        window.location.href = "/Usuarios/Usuarios";
    });

    $('#btnAdministrarUsuariosVolver').click(function () {
        window.location.href = "/vuelosyOtros/vuelosyOtros";
    });

    $('#TableUsers').on('click', '.activar', function () {
        var currentRow = $(this).closest("tr");
        var email = currentRow.find("td:eq(4)").text();
        if (email != "") {
            $.ajax({
                url: '/Usuarios/ModificarStatusUsuario',
                type: 'post',
                data: {
                    'email': email,
                    'action': 1
                },
                success: function (data) {
                    //debugger;
                    if (data) {
                        alert("Usuario modificado Ok.");
                        ObtenerUsuarios();
                    }
                    else {
                        alert("Usuario NO modificado");
                    }

                }
            });
        }
        else {
            alert('No se puede modificar este registro');
        }
    });

    $('#TableUsers').on('click', '.inactivar', function () {
        var currentRow = $(this).closest("tr");
        var email = currentRow.find("td:eq(4)").text();
        if (email != "") {
            $.ajax({
                url: '/Usuarios/ModificarStatusUsuario',
                type: 'post',
                data: {
                    'email': email,
                    'action': 2
                },
                success: function (data) {
                    if (data) {
                        alert("Usuario modificado Ok.");
                        ObtenerUsuarios();
                    }
                    else {
                        alert("Usuario NO modificado");
                    }

                }
            });
        }
        else {
            alert('No se puede modificar este registro');
        }
    });

    $('#contactoBoton').mouseover(function () {
        document.getElementById("auricularInfo").style.display = 'block'
        document.getElementById("whatsappInfo").style.display = 'block'
    });

    $('#contactoBoton').mouseleave(function () {
        document.getElementById("auricularInfo").style.display = 'none'
        document.getElementById("whatsappInfo").style.display = 'none'
    });

    var stringHtml = '<script type="text/javascript" src="https://widgets.priceres.co/gruposco/jsonpBooker/startWidget?container=ptw-container&UseConfigs=true&CurrentSection=3&CurrentEngine=3&ShowProducts=false&EngineConfigs[0].Engine=3&EngineConfigs[1].Engine=8&SectionConfigs[0].SectionTab=3&SectionConfigs[0].DefaultEngine=3&IsHorizontal=true"></script>'; //Vuelos

    $('#ptw-container').append(stringHtml)

    if (navigator.appVersion.indexOf("Win") != -1) if (navigator.appVersion.indexOf("iPhone") != -1) if (navigator.appVersion.indexOf("X11") != -1) if (navigator.appVersion.indexOf("Linux") != -1) if (navigator.appVersion.indexOf("Android") != -1)
        $("#cerrar").click(function () {
            location.reload();
        })

    $('#source').change(function () {
        var input = $('#source');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="source"]').html('');
        }
        else {
            $('span[data-valmsg-for="source"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#destination').change(function () {

        var input = $('#destination');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="destination"]').html('');
        }
        else {
            $('span[data-valmsg-for="destination"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#groupType').change(function () {

        var input = $('#groupType');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="groupType"]').html('');
        }
        else {
            $('span[data-valmsg-for="groupType"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#adultsNumber').change(function () {

        var input = $('#adultsNumber');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="adultsNumber"]').html('');
        }
        else {
            $('span[data-valmsg-for="adultsNumber"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#fullName').change(function () {

        var input = $('#fullName');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="fullName"]').html('');
        }
        else {
            $('span[data-valmsg-for="fullName"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#Email').change(function () {
        var input = $('#Email');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="Email"]').html('');
            var emailValid = isValidEmailAddress(valor);
            if (emailValid) {
                $('span[data-valmsg-for="Email"]').html('');
            }
            else {
                $('span[data-valmsg-for="Email"]').html('Email no válido');
            }
        }
        else {
            $('span[data-valmsg-for="Email"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#phoneNumber').change(function () {

        var input = $('#phoneNumber');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="phoneNumber"]').html('');
        }
        else {
            $('span[data-valmsg-for="phoneNumber"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#isAgency').change(function () {
        var input = $('#isAgency');
        var valor = input.val();
        if (valor) {
            document.getElementById("agency").innerHTML = '';

            document.getElementById("isNoAgency").checked = false;
        }
    });

    $('#isNoAgency').change(function () {
        var input = $('#isAgency');
        var valor = input.val();
        if (valor) {
            document.getElementById("agency").innerHTML = '';
            document.getElementById("isAgency").checked = false;

        }
    });

    $('#isNoAgency').click(function () {
        document.getElementById("isAgency").checked = false;
    });

    $('#btnEnviarForm').click(function () {

        var formValid = true;
        var origen = $('#source').val();
        var destino = $('#destination').val();
        var fechaIda = $('#arrivedDate').val();
        var fechaRegreso = $('#returnDate').val();
        var jornadaIda = $('#arrivedDayTime').val();
        var jornadaRegreso = $('#returnDayTime').val();
        var grupo = $('#groupType').val();
        var adultos = $('#adultsNumber').val();
        var ninos = $('#childsNumber').val();
        var esagencia = $('#isAgency').prop('checked');
        var noesagencia = $('#isNoAgency').prop('checked');
        var observaciones = $('#Observations').val();
        var nombres = $('#fullName').val();
        var email = $('#Email').val();
        var telefono = $('#phoneNumber').val();
        var emailDestination = $('#emailDestination').val();

        if (origen == '') {
            $('span[data-valmsg-for="source"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (destino == '') {
            $('span[data-valmsg-for="destination"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (fechaIda == '') {
            $('span[data-valmsg-for="arrivedDate"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (fechaRegreso == '') {
            $('span[data-valmsg-for="returnDate"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (jornadaIda == '') {
            $('span[data-valmsg-for="arrivedDayTime"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (jornadaRegreso == '') {
            $('span[data-valmsg-for="returnDayTime"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (grupo == '') {
            $('span[data-valmsg-for="groupType"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (adultos == '') {
            $('span[data-valmsg-for="adultsNumber"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (nombres == '') {
            $('span[data-valmsg-for="fullName"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (email == '') {
            $('span[data-valmsg-for="Email"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (telefono == '') {
            $('span[data-valmsg-for="phoneNumber"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (esagencia == false && noesagencia == false) {
            document.getElementById("agency").innerHTML = 'Seleccione una opción';
            formValid = false;
        }

        if (formValid) {

            //debugger;
            $.ajax({
                url: '/Home/Index',
                type: 'post',
                data: {
                    'source': origen,
                    'destination': destino,
                    'arrivedDate': fechaIda,
                    'returnDate': fechaRegreso,
                    'arrivedDayTime': jornadaIda,
                    'returnDayTime': jornadaRegreso,
                    'childsNumber': ninos,
                    'adultsNumber': adultos,
                    'groupType': grupo,
                    'isAgency': esagencia,
                    'isNoAgency': noesagencia,
                    'fullName': nombres,
                    'Email': email,
                    'Observations': observaciones,
                    'phoneNumber': telefono,
                    'emailDestination': emailDestination
                },
                success: function (data) {
                    document.getElementById("consecutivo").innerHTML = data['Consecutivo'];
                    console.log(data['Consecutivo'])
                    $('#exampleModal').modal('show');
                }
            });
        }
    });

    $('#sourceCorp').change(function () {
        var input = $('#sourceCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="source"]').html('');
        }
        else {
            $('span[data-valmsg-for="source"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#arrivedDateCorp').change(function () {

        var input = $('#arrivedDateCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="arrivedDate"]').html('');
        }
        else {
            $('span[data-valmsg-for="arrivedDate"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#arrivedDayTimeCorp').change(function () {

        var input = $('#arrivedDayTimeCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="arrivedDayTime"]').html('');
        }
        else {
            $('span[data-valmsg-for="arrivedDayTime"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#destinationCorp').change(function () {
        var input = $('#destinationCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="destination"]').html('');
        }
        else {
            $('span[data-valmsg-for="destination"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#returnDateCorp').change(function () {
        var input = $('#returnDateCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="returnDate"]').html('');
        }
        else {
            $('span[data-valmsg-for="returnDate"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#returnDayTimeCorp').change(function () {
        var input = $('#returnDayTimeCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="returnDayTime"]').html('');
        }
        else {
            $('span[data-valmsg-for="returnDayTime"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#groupTypeCorp').change(function () {
        var input = $('#groupTypeCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="groupType"]').html('');
        }
        else {
            $('span[data-valmsg-for="groupType"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#adultsNumberCorp').change(function () {
        var input = $('#adultsNumberCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="adultsNumber"]').html('');
        }
        else {
            $('span[data-valmsg-for="adultsNumber"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#fullNameCorp').change(function () {
        var input = $('#fullNameCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="fullName"]').html('');
        }
        else {
            $('span[data-valmsg-for="fullName"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#EmailCorp').change(function () {
        var input = $('#EmailCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="Email"]').html('');
            var emailValid = isValidEmailAddress(valor);
            if (emailValid) {
                $('span[data-valmsg-for="Email"]').html('');
            }
            else {
                $('span[data-valmsg-for="Email"]').html('Email no válido');
            }
        }
        else {
            $('span[data-valmsg-for="Email"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#phoneNumberCorp').change(function () {
        var input = $('#phoneNumberCorp');
        var valor = input.val();
        if (valor) {
            $('span[data-valmsg-for="phoneNumber"]').html('');
        }
        else {
            $('span[data-valmsg-for="phoneNumber"]').html('Campo obligatorio');
            return false;
        }
    });

    $('#isAgencyCorp').change(function () {
        var input = $('#isAgencyCorp');
        var valor = input.val();
        if (valor) {
            document.getElementById("agencyCorp").innerHTML = '';
            document.getElementById("isNoAgencyCorp").checked = false;
        }
    });

    $('#isNoAgencyCorp').change(function () {
        var input = $('#isAgencyCorp');
        var valor = input.val();
        if (valor) {
            document.getElementById("agencyCorp").innerHTML = '';
            document.getElementById("isAgencyCorp").checked = false;
        }
    });

    $('#isNoAgencyCorp').click(function () {
        document.getElementById("isAgencyCorp").checked = false;
    });

    $('#btnEnviarFormCorp').click(function () {
        var formValid = true;
        var origen = $('#sourceCorp').val();
        var destino = $('#destinationCorp').val();
        var fechaIda = $('#arrivedDateCorp').val();
        var fechaRegreso = $('#returnDateCorp').val();
        var jornadaIda = $('#arrivedDayTimeCorp').val();
        var jornadaRegreso = $('#returnDayTimeCorp').val();
        var grupo = $('#groupTypeCorp').val();
        var adultos = $('#adultsNumberCorp').val();
        var ninos = $('#childsNumberCorp').val();
        var esagencia = $('#isAgencyCorp').prop('checked');
        var noesagencia = $('#isNoAgencyCorp').prop('checked');
        var observaciones = $('#ObservationsCorp').val();
        var nombres = $('#fullNameCorp').val();
        var email = $('#EmailCorp').val();
        var telefono = $('#phoneNumberCorp').val();
        var emailDestination = $('#emailDestinationCorp').val();

        if (origen == '') {
            $('span[data-valmsg-for="source"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (destino == '') {
            $('span[data-valmsg-for="destination"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (fechaIda == '') {
            $('span[data-valmsg-for="arrivedDate"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (fechaRegreso == '') {
            $('span[data-valmsg-for="returnDate"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (jornadaIda == '') {
            $('span[data-valmsg-for="arrivedDayTime"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (jornadaRegreso == '') {
            $('span[data-valmsg-for="returnDayTime"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (grupo == '') {
            $('span[data-valmsg-for="groupType"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (adultos == '') {
            $('span[data-valmsg-for="adultsNumber"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (nombres == '') {
            $('span[data-valmsg-for="fullName"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (email == '') {
            $('span[data-valmsg-for="Email"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (telefono == '') {
            $('span[data-valmsg-for="phoneNumber"]').html('Campo obligatorio');
            return false;
            formValid = false;
        }
        else if (esagencia == false && noesagencia == false) {
            document.getElementById("agency").innerHTML = 'Seleccione una opción';
            formValid = false;
        }

        if (formValid) {

            //debugger;
            $.ajax({
                url: '/Home/Index',
                type: 'post',
                data: {
                    'source': origen,
                    'destination': destino,
                    'arrivedDate': fechaIda,
                    'returnDate': fechaRegreso,
                    'arrivedDayTime': jornadaIda,
                    'returnDayTime': jornadaRegreso,
                    'childsNumber': ninos,
                    'adultsNumber': adultos,
                    'groupType': grupo,
                    'isAgency': esagencia,
                    'isNoAgency': noesagencia,
                    'fullName': nombres,
                    'Email': email,
                    'Observations': observaciones,
                    'phoneNumber': telefono,
                    'emailDestination': emailDestination
                },
                success: function (data) {
                    document.getElementById("consecutivo").innerHTML = data['Consecutivo'];
                    console.log(data['Consecutivo'])
                    $('#exampleModal').modal('show');
                }
            });
        }
    });

    $('#Correo').change(function () {
        var input = $('#Correo');
        var valor = input.val();
        if (valor) {
            $('#correo').html('');
            var emailValid = isValidEmailAddress(valor);
            if (emailValid) {
                $('#correo').html('');
            }
            else {
                $('#correo').html('Email no válido');
            }
        }
        else {
            $('#correo').html('Campo obligatorio');
            return false;
        }
    });

    $('#Nombres').change(function () {
        var input = $('#Nombres');
        var valor = input.val();
        if (valor) {
            $('#nombres').html('');
        }
        else {
            $('#nombres').html('Campo obligatorio');
            return false;
        }
    });

    $('#Terminos').change(function () {
        var input = $('#Terminos');
        var valor = input.val();
        if (valor) {
            $('#terminos').html('');
        }
        else {
            $('#terminos').html('Debe aceptar los términos y condiciones');
            return false;
        }
    });

    $('#btnRegistrate').click(function () {
        limpiarRegistro();
        limpiarRegistroInputs();
    });

    $('#password').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            Login();
        }
    });

    $('#BtnAceptarRegistro').click(function () {
        $('#spinnerRegis').show();
        var formValid = false;
        var documentType = $('#documentType').val();
        var agencyName = $('#agencyName').val();
        var contactType = $('#contactType').val();
        var contactName = $('#contactName').val();
        var cityName = $('#cityName').val();
        var phoneNumber = $('#phoneNumber').val();
        var emailAddress = $('#emailAddress').val();
        var password = $('#passwordRegister').val();
        var terminos = $('#terminos').prop('checked');

        if (documentType == '') {
            $('#spinnerRegis').hide();
            $('#documentTypeError').html('Campo obligatorio');
            $('#documentTypeError').css("display", "block");
            formValid = false;
        }
        else {
            $('#documentTypeError').html('');
            $('#documentTypeError').css("display", "none");
            formValid = true;
        }

        if (agencyName == '') {
            $('#spinnerRegis').hide();
            $('#agencyNameError').html('Campo obligatorio');
            $('#agencyNameError').css("display", "block");
            formValid = false;
        }
        else {
            $('#agencyNameError').html('');
            $('#agencyNameError').css("display", "none");
            formValid = true;
        }

        if (contactType == '') {
            $('#spinnerRegis').hide();
            $('#contactTypeError').html('Campo obligatorio');
            $('#contactTypeError').css("display", "block");
            formValid = false;
        }
        else {
            $('#contactTypeError').html('');
            $('#contactTypeError').css("display", "none");
            formValid = true;
        }

        if (contactName == '') {
            $('#spinnerRegis').hide();
            $('#contactNameError').html('Campo obligatorio');
            $('#contactNameError').css("display", "block");
            formValid = false;
        }
        else {
            $('#contactNameError').html('');
            $('#contactNameError').css("display", "none");
            formValid = true;
        }

        if (cityName == '') {
            $('#spinnerRegis').hide();
            $('#cityNameError').html('Campo obligatorio');
            $('#cityNameError').css("display", "block");
            formValid = false;
        }
        else {
            $('#cityNameError').html('');
            $('#cityNameError').css("display", "none");
            formValid = true;
        }

        if (phoneNumber == '') {
            $('#spinnerRegis').hide();
            $('#phoneNumberError').html('Campo obligatorio');
            $('#phoneNumberError').css("display", "block");
            formValid = false;
        }
        else {
            $('#phoneNumberError').html('');
            $('#phoneNumberError').css("display", "none");
            formValid = true;
        }

        if (emailAddress != '') {
            if (isValidEmailAddress(emailAddress)) {
                $('#emailError').html('');
                $('#emailError').css("display", "none");
                formValid = true;
            }
            else {
                $('#spinnerRegis').hide();
                $('#emailError').html('Email no válido');
                formValid = false;
            }
        }
        else {
            $('#spinnerRegis').hide();
            $('#emailError').html('Campo obligatorio');
            $('#emailError').css("display", "block");
            formValid = false;
        }

        if (password == '') {
            $('#spinnerRegis').hide();
            $('#passwordError').html('Campo obligatorio');
            $('#passwordError').css("display", "block");
            formValid = false;
        }
        else {
            $('#passwordError').html('');
            $('#passwordError').css("display", "none");
            formValid = true;
        }

        if (terminos) {
            $('#spinnerRegis').hide();
            $('#terminosError').html('');
            $('#terminosError').css("display", "none");
            formValid = true;
        }
        else {
            $('#spinnerRegis').hide();
            $('#terminosError').html('Debe aceptar los términos.');
            $('#terminosError').css("display", "block");
            formValid = false;
        }

        if (formValid) {
            $('#spinnerRegis').show();
            $.ajax({
                url: '/Grupos/Registrate',
                type: 'post',
                data: {
                    documentType: documentType,
                    agencyName: agencyName,
                    contactType: contactType,
                    contactName: contactName,
                    cityName: cityName,
                    phoneNumber: phoneNumber,
                    emailAddress: emailAddress,
                    password: password,
                    terminos: terminos
                },
                success: function () {
                    limpiarRegistro();
                    limpiarRegistroInputs();
                    alert('Gracias por su registro!!!.');
                    $('#spinnerRegis').hide();

                },
                error: function () {
                    alert('El correo que esta intentando registrar ya existe.');
                    $('#spinnerRegis').hide();
                }
            });
        }
    });

    $('#btnLogin').click(function () {
        Login();
    });
});

$(document).ready(main);
var contador = 1;

function main() {
    $('.menu_bar').click(function () {
        // $('nav').toggle();

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

};

