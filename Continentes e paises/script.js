function addPais(retorno){
    var option = new Option(retorno);
    var paises = document.getElementById("paises");
    paises.add(option);
}

function gerar(){
    var op = document.querySelector("input[name='continente']:checked").value;
    var pais = document.getElementById("paises");
    pais.options.length=0;

    if(op == "america"){
        document.getElementById('imagem').src="img/Americas_(orthographic_projection).svg.png";

        var paises = ['Antígua e Barbuda','Argentina','Bahamas','Barbados','Belize','Bolívia','Brasil',
        'Canadá','Chile','Colômbia','Costa Rica','Cuba','Dominica','El savador','Equador','Estados Unidos',
        'Granada','Guatemala','Guiana','Haiti','Honduras','Jamaica','México','Nicarágua','Panamá','peru','República Dominicana',
        'Santa Lúcia','São cristóvão e Neves','São Vicente e Granadinas','Suriname','Trinidad e Tobago',
        'Uruguai','Venezuela'];
        paises.forEach(function(elem){
            addPais(elem);
        });
    }
    else if(op == "africa"){
        document.getElementById('imagem').src="img/Africa_(orthographic_projection).svg";

        var paises = ['Africa do Sul','Angola','Argélia','Benin','Botsuana','Burkia Faso','Burnudi',
        'Camarões','Chade','Costa do Marfim','Djibouti','Egito','Eritreia','Etiópia','Gabão','Gâmbia',
        'Gana','Guiné'];

        paises.forEach(function(elem){
            addPais(elem);
        });
    }
    else if(op == "europa"){
        document.getElementById('imagem').src="img/Europe_(orthographic_projection).svg.png";

        var paises = ['Albânia','Alemanha','Andorra','Armênia','Áustria','Azerbaijão','Belarus','Bélgica',
        'Bósnia e Herzegovina','Bulgária','Cazaquistão','Chipre','Chéquia','Croácia','Dinamarca','Eslováquia',
        'Eslovênia','Espanha','Estônia','Finlândia','França','Grécia','Geórgia','Hungria','Islândia',
        'Itália','Letônia','Liechtenstein','Lituânia','Luxemburgo','Malta','Moldávia','Montenegro',
        'Noruega','Países Baixos','Polônia','Portugual','Reino Unido','Republica da irlanda','Macedônia do norte',
        'Romênia','Russia','San Marino','Servia','Suécia','Suíça','Turquia','Ucrânia','Valticano'];

        paises.forEach(function(elem){
            addPais(elem);
        });
    }
    else if(op == "asia"){
        document.getElementById('imagem').src="img/Asia_(orthographic_projection).svg.png";

        var paises = ['Afeganistão','Arábia Saudita','Armênia','Azerbaijão','Bahrein','Bangladesh',
        'Brunei','Butão','Camboja','Cazaquistão','Catar','China','Cingaputa','Coreia do Norte','Coreia do Sul',
        'Egito','Emirados Árabes','Filipinas','Geórgia','Lâmen','índia','Irã','Iraque','Israel','Japão',
        'Jordânia','Kuwait','Laos','Líbano','Malásia','Maldivas','Mianmar','Mongólia','Nepal','Omã','Paquistão',
        'Quirguistão','Tailândia','Timor-Leste','Turcomenistão','Turquia','Uzbequistão','Vietinã',];

        paises.forEach(function(elem){
            addPais(elem);
        });
    }
    else if(op == "oceania"){
        document.getElementById('imagem').src="img/Oceania_(orthographic_projection).svg.png";

        var paises = ['Austrália','Estados Federativos da Micronésia','Fiji','Ilhas Marshall',
        'Ilhas Salomão','Kiribati','Nauru','Nova Zenlândia','Palau','Papua-Nova','Samoa','Tonga',
        'Tuvalu','Canuatu',];

        paises.forEach(function(elem){
            addPais(elem);
        });
    }
    else if(op == "antartida"){
        document.getElementById('imagem').src="img/Antarctica_(orthographic_projection).svg";

        var paises = ['mentira tu num mora ai não'];

        paises.forEach(function(elem){
            addPais(elem);
        });
    }
}