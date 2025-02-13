//Questão 1
function calculadora() {


    for (let i = 0; i < 4; i++) {
        var operacao = prompt("Qual operação deseja seguir? [Soma] [Subtracao] [Multiplicacao] [Divisao]|(Se desejar sair e só digitar 'acabou')");
        if (operacao.toLocaleLowerCase() === 'acabou') { 
            return; 
        }
        console.log(operacao);
        let primeiro = parseFloat(prompt("Qual o primeiro número?"));
        let segundo = parseFloat(prompt("Qual o segundo número?"));
        let terceiro = parseFloat(prompt("Qual o terceiro número?"));

        let resultados;//esse ta bem sujestivo n teve nada mirabolante que fiz pra concluir ou algo que precise muito de anotações futuras

        if (operacao.toLowerCase() === 'soma') {
            resultados = primeiro + segundo + terceiro;
        } else if (operacao.toLowerCase() === 'subtracao') {
            resultados = primeiro - segundo - terceiro;
        } else if (operacao.toLowerCase() === 'multiplicacao') {
            resultados = primeiro * segundo * terceiro;
        } else if (operacao.toLowerCase() === 'divisao') {
            resultados = primeiro / segundo / terceiro;
        } else {
            alert('Operação inválida. Por favor, escolha novamente.');
            return;  
        }


        alert(' a operação de'+operacao+'deu'+resultados)
        
    }

}
