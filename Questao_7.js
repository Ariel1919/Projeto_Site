//Questão 7
function cadastro_produtinhos() {
    let produtinhos = [
        {nomes: "Coelho de pelucia",valor: 10, estoque: 9},
        {nomes: "Esperança",valor: 0.99, estoque: 0},
        {nomes: "Livros",valor: 900, estoque: 990}

    ];
        function total(produtinhos){
            let totals=0;//contadores e return fora dos loops , aprendi na força do trauma
            for (let i=0;i<produtinhos.lenght;i++){
                totals+=produtinhos[i].valor*produtinhos[i].estoque//pontinho e pra acessar propriedades, neste caso ta acessando propriedades do array produtinhos o estoque e preço
            }
            return totals;

        }
}
