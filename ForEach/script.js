function adicionarClube(valor){
    var option = new Option(valor);
    var clube = document.getElementById("clubes");
    clube.add(option);
}

function gerar(){
    var op = document.querySelector("input[name='estados']:checked").value;
    var clube = document.getElementById("clubes"); 
    clube.options.lenght=0;
    if(op == "Sp"){
        var clubes = ['sao paulo', 'Santos' , 'Palmeiras', 'Bragantino','Ituano','Ferroviaria'];
        clubes.forEach(function(elemento){
            adicionarClube(elemento);
        });
    }
    else if(op == "Mg"){
        var clubes = ['atletico','America','Cruzeiro','Caldense','Tombense'];
        clubes.forEach(function(elemento){
            adicionarClube(elemento);
        });
    }
}