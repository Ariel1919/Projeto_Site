//Questão 2
function sera_que_e() {
    var pergunta = prompt("Qual a palavra? Se desejar sair e ir pra outra e so digitar 'acabou'");
    if (pergunta.toLowerCase() === 'acabou') { 
        return; 
    }
    var letras = pergunta.length;
    var meio = Math.floor(letras / 2);//fiz isso pra separar letras pela metade pq se a primeira metade for igual a segunda então ela e o tal palindromo e o math pra arredondar pq tava dando umas quebradas em umas exeções que eu pesquisei como arara, nem eu sabia que palindromos podiam ser impares 

    for (var i = 0; i < meio; i++)//i começa no zero aí percorre as letras, se i for maior que o meio adiciona 1 no i e fecha o loop  e vai no alerta dizendo que e
     { if (pergunta[i].toLocaleLowerCase !== pergunta[letras - 1 - i].toLocaleLowerCase){
            alert("Não e palindromo");
            return;
        }
    }
    alert(pergunta+"E um palindromo");
}


