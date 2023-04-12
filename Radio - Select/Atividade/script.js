function enviar(){

    var sexo = document.querySelector("input[name='sexo']:checked").id;

    if(sexo=="fe"){
        document.write("Seja bem vinda");
    }else{
        document.write("Seja bem vindo");
    }
}