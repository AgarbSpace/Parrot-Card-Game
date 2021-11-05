let cartasJogo = ['<img src="assets/bobrossparrot.gif" alt="">','<img src="assets/explodyparrot.gif" alt="">','<img src="assets/fiestaparrot.gif" alt="">','<img src="assets/metalparrot.gif" alt="">','<img src="assets/revertitparrot.gif" alt="">','<img src="assets/tripletsparrot.gif" alt="">','<img src="assets/unicornparrot.gif" alt="">'];

function iniciarJogo(){
   
    let numeroCartas = parseInt(prompt("Qual o número de cartas desejado?"));
   
    
    if((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14){
        do{
            numeroCartas = parseInt(prompt("Número inválido!! Escolha um número par entre 4 e 14:"));
        }while((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14);
    }

    if (numeroCartas === 4 || numeroCartas === 6 || numeroCartas === 8 || numeroCartas === 10 || numeroCartas === 12 || numeroCartas === 14) {
        const cartas = document.querySelector(".jogoIniciado");
        
        for(let i = 0; i < numeroCartas; i++){
            cartas.innerHTML += ` 
            <div class="card">
                <div class="front-face face">
                    <img src="assets/front.png" alt="">
                </div>
                <div class="back-face face">
                    ${cartasJogo[i]}
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