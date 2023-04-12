
function startAtividade1(){
    
    var x1;
    var x2;
    var y1;
    var y2;
    var resultado1;
    var resultado2;
    var distancia;

    x1 = document.atividade1.x1.value;
    x2 = document.atividade1.x2.value;
    y1 = document.atividade1.y1.value;
    y2 = document.atividade1.y2.value;
    
    resultado1=parseFloat(x2)-parseFloat(x1);

    resultado2=parseFloat(y2)-parseFloat(y1);

    distancia = Math.sqrt(parseFloat(Math.pow(resultado1,2)) +parseFloat(Math.pow(resultado2,2))) ;
    
    document.atividade1.resultado.value=distancia;
}

function startAtividade2(){
    var a, b, c, r, s, resultado;

    a = document.atividade2.a.value;
    b = document.atividade2.b.value;
    c = document.atividade2.c.value;

    r = Math.pow(parseFloat(a)+parseFloat(b),2);
    s = Math.pow(parseFloat(b)+parseFloat(c),2);

    resultado= (parseFloat(r)+parseFloat(s))/2;

    document.atividade2.resultado.value=resultado;
}

function startAtividade3(){

    var data;
    data = document.atividade3.data.value;

    var hoje = new Date;
    hoje= '2022-09-22';


    var resultado;
    resultado = new Date(hoje) - new Date(data); 

    var quantidade;
    quantidade = resultado /(1000*60*60*24);

    document.atividade3.resultado.value = quantidade;

   // data = 1000*60*60*24
}

function startAtividade4(){
    var dias,anos,meses;

    dias = document.atividade4.dias.value;

    anos = dias/365;
    meses = dias/30;

    document.atividade4.anos.value=anos;
    document.atividade4.meses.value=meses;

}

function startAtividade5(){
    var nota1,nota2,nota3,media;

    nota1=document.atividade5.nota1.value;
    nota2=document.atividade5.nota2.value;
    nota3=document.atividade5.nota3.value;

    media = (parseFloat((nota1*2))+ parseFloat((nota2*3))+ parseFloat((nota3*5)))/(parseFloat(2)+parseFloat(3)+parseFloat(5));

    document.atividade5.resultado.value=media;

}

function startAtividade6(){
    var segundos,minutos,horas;

    segundos=document.atividade6.segundos.value;
    minutos=segundos/60;
    horas=minutos/60;

    document.atividade6.minutos.value=minutos;
    document.atividade6.horas.value=horas;

}

function startAtividade7(){
    var nota1,nota2,nota3,media;

    nota1=document.atividade7.nota1.value;
    nota2=document.atividade7.nota2.value;
    nota3=document.atividade7.nota3.value;

    media = (parseFloat(nota1)+ parseFloat(nota2) + parseFloat(nota3))/3;

    document.atividade7.resultado.value=media;
    if(media>=6){
        document.getElementById("estadoAluno").textContent="Aprovado";
    }else{
        document.getElementById("estadoAluno").textContent="Reprovado";
    }

    
}

function startAtividade8(){
    var num1,num2,num3;

    num1=document.atividade8.num1.value;
    num2=document.atividade8.num2.value;
    num3=document.atividade8.num3.value;

    if(num1>num2&&num1>num3){
        document.atividade8.resultado.value=num1;
    }else if(num2>num1&&num2>num3){
        document.atividade8.resultado.value=num2;
    }else if(num3>num1&&num3>num2){
        document.atividade8.resultado.value=num3;
    }
}

function startAtividade9(){
    var nota1,nota2,nota3,media;

    nota1=document.atividade9.nota1.value;
    nota2=document.atividade9.nota2.value;
    nota3=document.atividade9.nota3.value;

    if(Math.max(nota1,nota2,nota3)==nota1){
        nota1= nota1*4;
        nota2= nota2*3;
        nota3= nota3*3;        
    }else if(Math.max(nota1,nota2,nota3)==nota2){
        nota1= nota1*3;
        nota2= nota2*4;
        nota3= nota3*3;
    }else{
        nota1= nota1*3;
        nota2= nota2*3;
        nota3= nota3*4;
    }
    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/10;

    document.atividade9.resultado.value=media;

    if(media>=6){
        document.getElementById("estadoAluno9").textContent="Aprovado";
    }else{
        document.getElementById("estadoAluno9").textContent="Reprovado";
    }
}

function startAtividade10(){
    var num;
    num = document.atividade10.num.value;

    if(num%2==0){
        document.getElementById("parOuImpar").textContent="Par e";
    }else{
        document.getElementById("parOuImpar").textContent="Impar e";
    }

    if(num>=0){
        document.getElementById("negativoOuPositivo").textContent="Positivo"
    }else{
        document.getElementById("negativoOuPositivo").textContent="Negativo"
    }
}

function startAtividade11(){
    var inicio,termino,resultado,hora;

    inicio = document.atividade11.inicio.value;
    termino = document.atividade11.termino.value;
    
    if(parseFloat(inicio)<termino){
        hora=parseFloat(termino)-parseFloat(inicio);
        document.atividade11.resultado.value=hora;
        console.log("If")
    }else{
        console.log(""+inicio);
        console.log(""+termino);
        resultado= parseFloat (24) -  parseFloat(inicio) +  parseFloat(termino) ; 
        document.atividade11.resultado.value=resultado;
    }

    
    
}

function startAtividade12(){
    var num,cem,cinquenta,dez,cinco,um;

    num=document.atividade12.num.value;

    
 
    if(num/100>=1){
         cem=Math.floor(num/100);
         console.log("cem="+cem);

        if(num%100>=50){
            cinquenta=Math.floor(num%100/50);
        }
        if(num%100%50>=10){
            dez=Math.floor(num%100%50/10) ;
        }if(num%100%50%10>=5){
            cinco=Math.floor(num%100%50%10/5) ;
         }if(num%100%50%10%5>=1){
            um=Math.floor(num%100%50%10%5);
         }

    }else if(num/50>=1){
        cinquenta=Math.floor(num/50);
        if(num%50>=10){
            dez=Math.floor(num%50/10) ;
        }if(num%50%10>=5){
            cinco=Math.floor(num%50%10/5) ;
         }if(num%50%10%5>=1){
            um=Math.floor(num%50%10%5);
         }

    }else if(num/10>=1){
        dez=Math.floor(num/10);
        console.log("dez="+dez);
        if(num%50%10>=5){
            cinco=Math.floor(num%10/5) ;
         }if(num%50%10%5>=1){
            um=Math.floor(num%10%5);
         }
    }else if(num/5>=1){
        cinco=Math.floor(num/5);
        console.log("cinco="+cinco);
        if(num%50%10%5>=1){
            um=Math.floor(num%5);
         }
    }else if(num>=1){
        um=num;
    }

    if(cem==null){
        cem=0;
    }
    if(cinquenta==null){
        cinquenta=0
    }
    if(dez==null){
        dez=0;
    }
    if(cinco==null){
        cinco=0;
    }
    if(um==null){
        um=0;
    }


    document.atividade12.cem.value=cem;
    document.atividade12.cinquenta.value=cinquenta;
    document.atividade12.dez.value=dez;
    document.atividade12.cinco.value=cinco;
    document.atividade12.um.value=um;

    }
