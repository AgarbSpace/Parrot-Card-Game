function iniciarJogo(){
   
    let numeroCartas = parseInt(prompt("Qual o número de cartas desejado?"));
   
    
    if((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14){
        do{
            numeroCartas = parseInt(prompt("Número inválido!! Escolha um número par entre 4 e 14:"));
        }while((numeroCartas%2) === 1 || numeroCartas < 4 || numeroCartas > 14);
    }
}