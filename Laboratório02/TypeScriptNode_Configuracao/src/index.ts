//Laboratórios 2

// 1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros
// não-negativos inicio e fim. Utilize versões com for e while.

    let inicio = 2;
    let fim = 8

    console.log("inicio: "+ inicio);
    console.log("fim: "+ fim);

    console.log("numeros pares com for")
    for(let i  = inicio; i <= fim; i++){

        if(i % 2 == 0) console.log(i);
    }

    console.log("numeros pares com while")
    while(inicio <= fim){

        if(inicio % 2 == 0) console.log(inicio);
        inicio ++;
    }

// 2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?
// let i: number = 0;
// while (i != 10) {
// i += 0.2;
// }


// 3. Escreva uma função min(x,y) que devolve o menor entre dois números. Não use funções auxiliares de Math. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
// 4. Escreva uma função pow(x,y) que calcula o valor de 𝑥𝑦, ou seja, x elevado a potência y. Assuma que os valores de x e y são números inteiros não negativos e que 𝑥0=1 para qualquer valor de x. Apresente uma versão iterativa e uma versão recursiva para a função. Não utilize o operador **. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
// 5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
// 6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
// 7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em um determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.