//Questão 5
function tabelaMultiplicadora(numeros) {

    var pergunta1 = prompt("Deseja saber o que da tabela multiplicadora? se não quiser nada so digite acabou mas se quiser saber e so apertar ok e por o numero");
    if (pergunta1.toLowerCase() === 'acabou') { 
        return; 
    }
        var pergunta = parseFloat(prompt("Qual numero ?"));
    
        if (pergunta <= 0) {
            console.log("Ja viu multiplicar algo negativo? não podeeeee");
            return;
        }
    
        console.log("A tabela de " + pergunta + " "+" é ;");
        for (var i = 1; i <= 10; i++) {
            console.log(pergunta+ " x " + i + " = " + (pergunta * i));
        }
    }

    
    
    