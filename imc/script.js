function calcular(){
    var Peso;
    Peso = document.imc.peso.value;
    var Altura;
    Altura = document.imc.altura.value;
    var resultado;
    resultado = Peso/(Altura*Altura);


    document.imc.res.value=resultado;
}