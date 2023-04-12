function adicionarTimes(retorno) {
    // Seleciona o elemento no DOM
    var $showTimes = document.querySelector('.showTimes'),
    
    // Cria uma string de texto
    texto = document.createTextNode(retorno),

    // Cria um "fragmento de documento" oO
    fragment = new DocumentFragment();

    // Insere no fragmento o novo texto
    fragment.appendChild(texto);

    // Insere no documento o br
    fragment.appendChild(document.createElement('br'));

    // Insere o fragmento antes do conteúdo atual do elemento
    $showTimes.insertBefore(fragment, $showTimes.firstChild);
}

function gerarClube() {

    var op = document.getElementById("estados").value;
    
    var $showTimes = document.querySelector('.showTimes');
    $showTimes.textContent = "";

    if (op == "mg") {
        var times = ['Atlético', 'Athletic', 'Villa Nova', 'Pouso Alegre',
            'América', 'Caldense', 'Patrocinense', 'Demochata-SL', 'Cruzeiro',
            'Democrata-GV', 'Tombense', 'Ipatinga'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });

    }
    else if (op == "ac") {
        var times = ['Andirá (Rio Branco)', 'Atlético (Rio Branco)', 'Galvez (Rio Branco)',
         'Humaitá (Porto Acre)', 'Náuas (Cruzeiro do Sul)'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "al") {
        var times = ['Cruzeiro-Al', 'CSA','ASA','Murici','CRB','CSE'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ap") {
        var times = ['Trem', 'Independente', 'Santos-AP', 'Santana'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "am") {
        var times = ['Princesa do Solimões', 'Nacional-AM', 'Manaus', 'Fast', 'Amazonas'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ba") {
        var times = ['Jacuipense', 'Atlético-BA', 'Bahia de Feira', 'Barcelona de Ilhéus', 
        'Vitória', 'Bahia', 'Juazeirense', 'Doce Mel'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ce") {
        var times = ['Caucaia', 'Ferroviário', 'Pacajus', 'Iguatu', 'Maracanã', 'Icasa', 'Atlético-CE',
         'Crato'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "df") {
        var times = ['Ceilândia', 'Capital', 'Brasiliense', 'Gama', 'Santa Maria',
        'Paranoá', 'Brasília', 'Taguatinga', 'Unaí', 'Luziânia'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "es") {
        var times = ['Nova Venécia', 'Serra', 'Real Noroeste', 'Estrela do Norte',
         'Vitória-ES', 'Rio Branco-ES', 'Vilavelhense', 'Desportiva Ferroviária', 'Rio Branco VN',
        'CTE Colatina'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "go") {
        var times = ['Goiás', 'Anápolis', 'Morrinhos', 'Goianésia', 'Grêmio Anápolis', 'Jataiense'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ma") {
        var times = ['Sampaio Corrêa', 'Pinheiro-MA', 'IAPE', 'Juventude Samas', 'Moto Club',
         'São José-MA', 'Tuntum', 'Cordino'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ms") {
         var times = ['Costa Rica-MS', 'Serc', 'Operário-MS', 'Comercial-MS', 'União ABC',
         'São José-MA', 'Tuntum', 'Cordino'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "mt") {
        var times = ['Cuiabá', 'Luverdense', 'Sport Sinop', 'Academia', 'Dom Bosco', 'União Rondonópolis',
         'Nova Mutum', 'Operário VG', 'Sorriso', 'Ação-MT'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "pa") {
        var times = ['Paysandu', 'Águia de Marabá', 'Paragominas', 'Amazônia Independente', 'Tuna Luso',
         'Bragantino-PA', 'Tapajós', 'Itupiranga', 'Remo', 'Castanhal', 'Caeté', '	Independente-PA'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "pb") {
        var times = ['Botafogo-PB', 'Sousa', 'São Paulo Crystal', 'Auto Esporte-PB', 'Atlético-PB'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "pr") {
        var times = ['Operário-PR', 'Coritiba', 'Athletico-PR', 'Maringá', 'FC Cascavel',
         'Londrina', 'Cianorte', 'São Joseense', 'Rio Branco-PR', 'Azuriz', 'União-PR', 'Paraná'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "pe") {
        var times = ['Retrô', 'Náutico', 'Santa Cruz', 'Sport', 'Salgueiro', 'Caruaru City',
         'Afogados', 'Vera Cruz', 'Íbis', 'Sete de Setembro-PE'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "pi") {
        var times = ['Fluminense-PI', 'Altos', 'Parnahyba', '4 de Julho', 'River-PI', 
        'Corisabbá', 'Oeirense', 'Flamengo-PI'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "rj") {
        var times = ['Fluminense', 'Flamengo', 'Vasco', 'Botafogo', 'Nova Iguaçu', 'Portuguesa-RJ',
         'Resende', 'Audax-RJ', 'Madureira', 'Boavista', 'Bangu', 'Volta Redonda'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "rn") {
        var times = ['ABC', 'América-RN', 'Força e Luz', 'Potyguar CN', 'Potiguar de Mossoró',
         'Santa Cruz de Natal', 'Globo FC', 'Assu'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "rs") {
        var times = ['Ypiranga', 'Grêmio', 'Internacional', 'Brasil de Pelotas', 'Caxias', 'São José-RS',
         'Novo Hamburgo', 'Aimoré', 'São Luiz', 'Juventude', 'União Frederiquense', 'Guarany de Bagé'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "ro") {
        var times = ['Real Ariquemes', 'União Cacoalense', 'Genus', 'Porto Velho',
         'Rondoniense', 'Pimentense'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "rr") {
        var times = ['São Raimundo-RR', 'Baré', 'Náutico-RR', 'Real-RR', 'Atlético Roraima',
         'Rio Negro-RR'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "sc") {
        var times = ['Brusque', 'Hercílio Luz', 'Camboriú', 'Concórdia', 'Chapecoense',
         'Marcílio Dias', 'Figueirense', 'Avaí', 'Joinville', 'Barra-SC', 'Próspera', 'Juventus-SC'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "sp") {
        var times = ['Corinthians', 'Guarani', 'Inter de Limeira', 'Água Santa', 'São Paulo',
         'São Bernardo', 'Ferroviária', 'Novorizontino', 'Palmeiras', 'Ituano', 'Botafogo-SP', 'Mirassol'
        ,'Bragantino','Santo André','Santos','Ponte Preta'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "se") {
        var times = ['Itabaiana', 'Sergipe', 'Atlético Gloriense', 'Freipaulistano',
         'América de Propriá', 'Falcon', 'Confiança', 'Lagarto', 'Boca Júnior', 'Maruinense',];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
    else if (op == "to") {
        var times = ['Tocantinópolis', 'Capital-to', 'Interporto', 'União Araguainense',
         'Bela Vista-TO', 'Palmas', 'NC/Paraíso', 'Araguacema', 'Gurupi', 'Tocantins EC'];

        times.forEach(function (elemento) {
            adicionarTimes(elemento);
        });
    }
}