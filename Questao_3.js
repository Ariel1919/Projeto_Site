//Questão 3
function listaDeTarefas() {
    var tarefas = []; //lista vazia que tera os arrays string
    tarefinhas=0


    while (true) {//peferi um while pq poderia ter mais de 5 tarefas 
        var tarefa = prompt("Quais as tarefas de hoje se não tiver mais tarefas ou ja tiver terminado digite'acabou' ");
        if (tarefa.toLowerCase() === 'acabou') break;//aqui fala que se oq vc escrever foi acabou ele quebra o while e simbora pra a proxima
        tarefas.push(tarefa);//guarda as tarefinhas no array la de cima e vira um array string aeee
        tarefinhas++;//fiz contador pra ver quantas tarefinhas tem pra puxar la em baixo

        alert("Vamos revisar as tarefas de hoje?" + tarefas +"São ao total"+ tarefinhas +" "+"Tarefinhas");

        var index = prompt("Ja fez alguma? Se sim coloca o número da tarefa e vamos concluila " + tarefas.length + ")");
            tarefas.splice(index - 1, 1);//splice altera a lista de array deletando ou incrementando oq quisermos e delimitarmos


        alert("Tarefas atualizadas" + tarefas+"Agora são"+tarefinhas+" "+"tarefinhas");
    }

   
}


