//Questão 6
function idade(){
var pessoas = [];
var velhos_corocos=1;

var pergunta1 = prompt("Quer participar? se não quiser so digitar 'acabou'");
if (pergunta1.toLowerCase() === 'acabou') { 
    return; 
}

for (var i = 0; i < 5; i++) {
    var nomes = prompt("Nome das pessoas participantes");
    var idades = parseInt(prompt("idade de" + nomes + ";"));
    pessoas.push({nome: nomes, idade: idades});//ordena como vai ser passado pra o array as coisas e ambos vão pra la
}

console.log("Pessoas velhas corocas com mais de 18 anos na cara são os(as);");
for (var i = 0; i < pessoas.length; i++) {//le oq ta dentro da array e quando o numero que foi lido ali dentro dela for maior que 0 incrementa ali e po~e seu lugarzinho tipo 0,idade19. 1,idade17 e por aí vai
        if (pessoas[i].idade > 18) {//aqui faz com que a numeração dentro da lista ou melhor a posição do numero de idade, se dentro desta posição estiver um 18 pra cima ele guarda ali e dps responde quantos velhor corocos tem ali
            console.log(pessoas[i].nome+"-"+velhos_corocos);//aqui so printa o nome idade 
            velhos_corocos++;
        }
    }
}


