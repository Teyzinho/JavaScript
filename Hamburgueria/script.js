function start(){
    var po;
    po = 17*document.comidas.po.value;

    var hamburguer;
    hamburguer=20*document.comidas.Hamburguer.value;

    var misto;
    misto=10*document.comidas.Misto.value;

    var xbacon;
    xbacon=22*document.comidas.XBacon.value;

    var xsalada;
    xsalada=23*document.comidas.XSalada.value;

    var xgalinha;
    xgalinha=29*document.comidas.XGalinha.value;

    var americano;
    americano=18*document.comidas.Americano.value;

    var xburguer;
    xburguer=21*document.comidas.XBurguer.value;

    var cocacola;
    cocacola=12*document.comidas.CocaCola.value;

    var fanta;
    fanta=10*document.comidas.Fanta.value;

    var taxa; 
    taxa=document.comidas.taxa.value;
    
    
    
    var desconto;
    desconto=document.comidas.desconto.value;

    if(po==""){
        po=0;
    }
    if(hamburguer==""){
        phamburguero=0;
    }
    if(misto==""){
        misto=0;
    }
    if( xbacon==""){
        xbacon=0;
    }
    if(xsalada==""){
        xsalada=0;
    }
    if(xgalinha==""){
        xgalinha=0;
    }
    if(americano==""){
        americano=0;
    }
    if(xburguer==""){
        xburguer=0;
    }
    if(cocacola==""){
        cocacola=0;
    }
    if(fanta==""){
        fanta=0;
    }
    if(taxa==""){
        taxa=0;
    }
    if(desconto==""){
        desconto=0;
    }


    var valorFinal;
    valorFinal=parseFloat(po)+parseFloat(hamburguer)+parseFloat(misto)+parseFloat (xbacon)+parseFloat (xsalada)+parseFloat (xgalinha)+
    parseFloat (americano)+parseFloat (xburguer)+parseFloat (cocacola)+parseFloat (fanta)+parseFloat (taxa)-parseFloat (desconto);

    document.comidas.valor.value=valorFinal;
}