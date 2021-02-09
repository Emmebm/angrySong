
//Valores del juego
const password = "*";

//UI Elements
const joc = document.querySelector('#joc'),
      enunciatPrevi = document.querySelector(".enunciatPrevi"),
      enunciatJoc = document.querySelector(".enunciatJoc"),
      enunciatResposta = document.querySelector(".enunciatResposta"),
      input = document.querySelector("input"),
      form = document.querySelector("form").addEventListener('submit', resposta),
      respostaCorrecta = document.querySelector(".respostaCorrecta");



respostaCorrecta.addEventListener('click', function(){
    window.location.reload();
});

function resposta(e){
  e.preventDefault();

  let resposta =input.value;

  if(resposta.toUpperCase() === password.toUpperCase()){ //winning
    joc.style.display = 'none';
    respostaCorrecta.style.display = 'block';

  } else {  //not winning
    enunciatPrevi.style.display = 'none';
    enunciatResposta.textContent = resposta;
    enunciatJoc.style.display = 'block';
    input.value = '';
  }

}
