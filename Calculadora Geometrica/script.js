
function mostrarQuad() {
    var element = document.getElementById("quadContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharQuad() {
    var element = document.getElementById("quadContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcQuad() {
    var lado;
    var result;

    lado = document.formQuad.ladoQuad.value;
    result = lado * lado;

    document.formQuad.result.value = result;
}


function mostrarTrap() {
    var element = document.getElementById("trapContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharTrap() {
    var element = document.getElementById("trapContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcTrap() {
    var maior;
    var menor;
    var alt;
    var result;

    maior = document.formTrap.baseMaior.value;
    menor = document.formTrap.baseMenor.value;
    alt = document.formTrap.alturaTrap.value;

    result = ((parseFloat(maior) + parseFloat(menor)) * alt) / 2;

    document.formTrap.result.value = result;
}

function mostrarReta() {
    var element = document.getElementById("retaContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharReta() {
    var element = document.getElementById("retaContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcReta() {
    var base;
    var alt;
    var result;

    base = document.formReta.base.value;
    alt = document.formReta.altura.value;

    result = base * alt;

    document.formReta.result.value = result;
}

function mostrarTria() {
    var element = document.getElementById("triaContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharTria() {
    var element = document.getElementById("triaContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcTria() {
    var base;
    var alt;
    var result;

    base = document.formTria.base.value;
    alt = document.formTria.altura.value;

    result = (base * alt) / 2 ;

    document.formTria.result.value = result;
}

function mostrarPara() {
    var element = document.getElementById("paraContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharPara() {
    var element = document.getElementById("paraContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcPara() {
    var base;
    var alt;
    var result;

    base = document.formPara.base.value;
    alt = document.formPara.altura.value;

    result = base * alt;

    document.formPara.result.value = result;
}

function mostrarLosa() {
    var element = document.getElementById("losaContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharLosa() {
    var element = document.getElementById("losaContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcLosa() {
    var maior;
    var menor;
    var result;

    maior = document.formLosa.maior.value;
    menor = document.formLosa.menor.value;

    result = maior * menor / 2;

    document.formLosa.result.value = result;
}

function mostrarCirc() {
    var element = document.getElementById("circContent");
    element.classList.add("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.add("blur");
}

function fecharCirc() {
    var element = document.getElementById("circContent");
    element.classList.remove("mostrar");

    var element = document.getElementById("desfocar");
    element.classList.remove("blur");
}

function calcCirc(){
    var raio;
    var result;

    raio = document.formCirc.raio.value;

    result = 3.14 * (raio*raio);

    document.formCirc.result.value=result;

}