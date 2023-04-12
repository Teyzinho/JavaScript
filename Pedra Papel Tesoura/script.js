var animacao;
animacao=0;

function start(){

  //Troca o background com animação para uma imagem
  var element = document.getElementById("imgBot");
  element.classList.add("aparecer");
  var element = document.getElementById("botEscolha");
  element.classList.remove("botBackground");
  //
  //Remove animação
  var element = document.getElementById("suaEscolha");
  element.classList.remove("animacao");

   comecar=1;
   
    var escolha;
    var escolhaBot;


    //Troca imagem de sua escolha
    if(document.querySelector('#pedra').checked){
      document.getElementById('img').src="Imagens/mao.png" //Pedra
        escolha=0;
    }else if(document.querySelector('#papel').checked){
        document.getElementById('img').src="Imagens/mao-aberta.png" //Papel
        escolha=1;
    }else if(document.querySelector('#tesoura').checked){
        document.getElementById('img').src="Imagens/paz.png" //Tesoura
        escolha=2;
    }
    
    escolhaBot=Math.floor(Math.random() * 3); //Escolha do Bot


    //Troca a imagem de escolha do Bot
    if(escolhaBot==0){
       document.getElementById('imgBot').src="Imagens/mao.png" 
    }else if(escolhaBot==1){
       document.getElementById('imgBot').src="Imagens/mao-aberta.png"
    }else{
        document.getElementById('imgBot').src="Imagens/paz.png" 
    }

    var element = document.getElementById("resultado"); //Cria váriavel pelo id
    element.classList.remove("colorWhite"); //Reseta as cores
    element.classList.remove("colorRed");
    element.classList.remove("colorGreen");


    if(escolha==escolhaBot){  //Imprime o resultado
      document.getElementById("resultado").textContent="Empate";
      element.classList.add("colorWhite");

    }else if(escolha==0&&escolhaBot==1){
      document.getElementById("resultado").textContent="Perdeu";
      element.classList.add("colorRed");//Adiciona cor vermelha

    }else if(escolha==0&&escolhaBot==2){
      document.getElementById("resultado").textContent="Ganhou";
      element.classList.add("colorGreen");//Adiciona cor verde

    }else if(escolha==1&&escolhaBot==0){
      document.getElementById("resultado").textContent="Ganhou";
      element.classList.add("colorGreen");

    }else if(escolha==1&&escolhaBot==2){
      document.getElementById("resultado").textContent="Perdeu";
      element.classList.add("colorRed");

    }else if(escolha==2&&escolhaBot==0){
      document.getElementById("resultado").textContent="Perdeu";
      element.classList.add("colorRed");

    }else if(escolha==2&&escolhaBot==1){
      document.getElementById("resultado").textContent="Ganhou";
      element.classList.add("colorGreen");

    }

}