function enviar(){

    var estado = document.getElementById('estado');
    var capital = estado.options[estado.selectedIndex].value;


    document.write("A capital do seu estado é "+capital);
}
    