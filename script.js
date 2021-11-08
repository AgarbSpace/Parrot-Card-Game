let cartasJogo = ['<img src="assets/bobrossparrot.gif" alt="">','<img src="assets/explodyparrot.gif" alt="">','<img src="assets/fiestaparrot.gif" alt="">','<img src="assets/metalparrot.gif" alt="">','<img src="assets/revertitparrot.gif" alt="">','<img src="assets/tripletsparrot.gif" alt="">','<img src="assets/unicornparrot.gif" alt="">'];
let cartasJogoRepetidas = [];
let k = 0;
let primeiraCartaSelecionada;
let segundaCartaSelecionada;
let verifica = 0;
let jogadas = 0;
let fim = 0;
let numeroCartas = 0;

function iniciarJogo(){
   
    numeroCartas = parseInt(prompt("Qual o número de cartas desejado?"));
    
    if((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14){
        do{
            numeroCartas = parseInt(prompt("Número inválido!! Escolha um número par entre 4 e 14:"));
        }while((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14);
    }

    if (numeroCartas >= 4 && numeroCartas <= 14) {
        const cartas = document.querySelector(".jogoIniciado");
        
        for(let i = 0; i < numeroCartas; i++){
            if(i%2===0 && i !== 0){
                k++;
            }
            cartasJogoRepetidas[i] = cartasJogo[k];
        }

        cartasJogoRepetidas.sort(embaralhar);

        for(let j = 0; j < numeroCartas; j++){
            cartas.innerHTML += ` 
            <div class="card" onclick = "virar(this)">
                <div class="front-face face">
                    <img src="assets/front.png" alt="">
                </div>
                <div class="back-face face">
                    ${cartasJogoRepetidas[j]}
                </div>
            </div>
        `
        }
    }
}


function none(){
    const tiraPrimeiraTela = document.querySelector(".conteudo");
    tiraPrimeiraTela.classList.add("none");
    const telaJogoAparece = document.querySelector(".jogoInicia");
    telaJogoAparece.classList.remove("none");
    telaJogoAparece.classList.add("jogo");
}

function virar(carta){
    carta.classList.add("virar");

    if(verifica === 0){
        verifica = 1;
        primeiraCartaSelecionada = carta;
        return;
    }

    segundaCartaSelecionada = carta;
    verifica = 0;

    pares();

    setTimeout(win, 300);
}


function embaralhar(){
    return Math.random() - 0.5;
}

function pares(){
    jogadas++;

    if(primeiraCartaSelecionada.lastElementChild.innerHTML === segundaCartaSelecionada.lastElementChild.innerHTML){
        primeiraCartaSelecionada.classList.remove("virar");
        primeiraCartaSelecionada.classList.add("virada");
        segundaCartaSelecionada.classList.remove("virar");
        segundaCartaSelecionada.classList.add("virada");
        fim++;
        console.log(numeroCartas);
        console.log(fim);
   
        let teste = "ta entrando"
        console.log(teste);
        return;
    }else{
        desvira();
        let teste2 = "ta entrando no desvira"
        console.log(teste2);
    }

}


function desvira(){
    setTimeout(() => {
        primeiraCartaSelecionada.classList.remove('virar');
        segundaCartaSelecionada.classList.remove('virar');
      }, 1000);
}

function win(){
    if((fim) === (numeroCartas/2)){
        alert("Parabéns!! Você finalizou o jogo em "+ jogadas + " jogadas ^~^");
    }
}
