function start(){
    var num = document.getElementById('num');
    var numValue = num.options[num.selectedIndex].value;
    var numTexto = num.options[num.selectedIndex].text;

    hora=document.querySelector("input[name='hora']:checked").value;

    document.write("Radio Selecionado "+hora+"<br>Número Value Selecionado "+numValue+"<br>Número Texto Selecionado "+numTexto);
}
    