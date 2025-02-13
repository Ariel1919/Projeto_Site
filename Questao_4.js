//Questão 4
function alunoss(){
var alunos = {
    nomes: [],
    notas: [],
    media: function() {
        var medias = 0;//contador que começa do zero e fora pra n dar b.o na soma e somar infinitamente ou dar errinho
        for (var i = 0; i < 3; i++) {//esse aqui ta falando que o quando i  for maior que 3 coloca 1 e fecha o ciclo
            medias += this.notas[i]/3;//aqui invoca as notas que tiver e obv de 3 em 3 pra somar e dps dividir 
        }
        return medias;
    }
};


var nome = String(prompt("Deseja se cadastrar?qual seu nome, aluno(a)? se não deseja, só digitar 'acabou'"));
if (nome.toLowerCase() === 'acabou' ){ 
    return; 
}
alunos.nomes.push(nome)//por o nome da variavel aluno antes da variavel nome ja linka os 2 e o nome vai pra la

// um loop pra pergunta e guarda as resposta no array int ali em cima
for (var i = 0; i < 3; i++) {
    var nota = parseFloat(prompt("Qual são suas notas?"+(i+1)));
    alunos.notas.push(nota);
}



alert("Aluno(a); " + alunos.nomes[0]+ " | "+ "Média; " + alunos.media() +" | "+ "Notas; " + alunos.notas[0] + "-" + alunos.notas[1] + "-" + alunos.notas[2]);
}