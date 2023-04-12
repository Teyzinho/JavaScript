
var data = new Date();

document.write("<center>");

if(data.getHours()<12){
    document.write("<h1>Bom dia!</h1>");
}else if(data.getHours()>=12&&data.getHours<19){
    document.write("<h1>Boa tarde!</h1>");
}else{
    document.write("<h1>Boa Noite!</h1>");
}

document.write("<h2>Hoje é:</h2>");

switch(data.getDay()){
    case 0:
        document.write("Domingo, ");
        break;
    case 1: 
        document.write("Segunda-Feira, ");
        break;
    case 2:
        document.write("Terça-Feira, ");
        break;
    case 3:
        document.write("Quarta-Feira, ");
        break;
    case 4:
        document.write("Quinta-Feira, ");
        break;
    case 5:
        document.write("Sexta-Feira, ");
        break;
    case 6:
        document.write("Sábado, ");
        break;
}

document.write(""+data.getDate()+" de ");

switch(data.getMonth()){
    case 0:
        document.write("Janeiro ");
        break;
    case 1: 
        document.write("Fevereiro ");
        break;
    case 2:
        document.write("Março ");
        break;
    case 3:
        document.write("Abril ");
        break;
    case 4:
        document.write("Maio ");
        break;
    case 5:
        document.write("Junho ");
        break; 
    case 6:
        document.write("Julho ");
        break;
    case 7:
        document.write("Agosto ");
        break;
    case 8:
        document.write("Setembro ");
        break;
    case 9:
        document.write("Outubro ");
        break;
    case 10:
        document.write("Novembro ");
        break;
    case 11:
        document.write("Dezembro ");
        break;
}

document.write(" de "+data.getFullYear());
document.write("<br><br> às <br>")

document.write("<h2>"+data.getHours()+":"+data.getMinutes()+"</h2>");

document.write("</center>");


