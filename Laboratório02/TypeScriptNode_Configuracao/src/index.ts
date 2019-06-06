import { stringify } from "querystring";

//Laboratórios 2

// 1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros
// não-negativos inicio e fim. Utilize versões com for e while.

    // let inicio = 2;
    // let fim = 8

    // console.log("inicio: "+ inicio);
    // console.log("fim: "+ fim);

    // console.log("numeros pares com for")
    // for(let i  = inicio; i <= fim; i++){

    //     if(i % 2 == 0) console.log(i);
    // }

    // console.log("numeros pares com while")
    // while(inicio <= fim){

    //     if(inicio % 2 == 0) console.log(inicio);
    //     inicio ++;
    // }

// 2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?

// let i: number = 0;
// while (i != 10) {
// i += 0.2;

// console.log(i);
// if(i > 10)break;

// }

// //Ocorre um looping infinito devido ao numero não se tornar o numero 10, pelo fato dos de um tipo"number"
// //não conseguir representar todas casas decimais e fazer um arredondamento na ultima casa decimal.

// 3. Escreva uma função min(x,y) que devolve o menor entre dois números. Não use funções auxiliares de Math.
// Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

// function min(x: number, y: number): number{
//     if(x < y ) return x+1;
//     else return y+1;
// }

// console.log(min(33,5));

// 4. Escreva uma função pow(x,y) que calcula o valor de 𝑥𝑦, ou seja, x elevado a potência y.
// Assuma que os valores de x e y são números inteiros não negativos e que 𝑥0=1 para qualquer valor de x.
// Apresente uma versão iterativa e uma versão recursiva para a função. Não utilize o operador **.
// Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

// function pow(x: number, y: number): number{

//     if( !(Number.isInteger(x)) || !(Number.isInteger(y))) return 0;
//     if( x <= 0 || y <= 0) return 0;
//     if( y == 0 ) return 1;

//     let resultado : number = x;

// // //versão iterativa
// // for(let i = y - 1; i > 0; i--){
// // resultado = resultado * x;
// // }
// // return resultado;

// //versão recursiva
// function powRecursivo(x: number, y: number): number{

//     if(y == 1) return x;
//     return x * powRecursivo(x, y - 1);
// }
// return powRecursivo(x,y)
// }

// console.log(pow(3,3))

// 5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia)
// e retorna a mesma string com a primeira letra em maiúscula.
// Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

// function toMaiusculaPrimeira(s: string): string{

//     if(s == "")return "vazia";

//     //v1
//     return s.charAt(0).toLocaleUpperCase() + s.substring(1,s.length);
//     //v2
//     //return s.replace(s.charAt(0), s.charAt(0).toLocaleUpperCase());
// }

// console.log(toMaiusculaPrimeira("marcia"));

// 6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento
// encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos
// disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros 
//e no resultado da função.

// function getMax(arr: number[]): number {

//     let max : number = arr[0];

//     for(let valor of arr){
//         if( max < valor) max = valor;
//     }
//     return max;
// }

// console.log(getMax([2,10,8,20,25]));

// 7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente
// em um determinado array contendo números inteiros. Utilize corretamente a declaração de tipos
// nos parâmetros e no resultado da função.

// function freq(arr: number[]): Map<number,number>{

//    let mapFreq = new Map<number,number>();

//     for(let valor of arr){

//         if(mapFreq.has(valor)){

////dica professor
//// mapfreq.get(valor)! + 1 - remove o null e o undefined do tipo
//// (mapfreq.get(valor)||0)+1 - se retornar um null ou undefined escolhe o 0
            
//             let cont =  mapFreq.get(valor);
//             if(cont != null){
//             cont = cont + 1;
//             }
//             else cont = 1;

//             mapFreq.set(valor, cont);
//         }
//         else{
//             mapFreq.set(valor,1);
//         }
//     }
//    return mapFreq;
// }

// console.log(freq([1,1,1,5,6,6,8,8]));


console.log(undefined||0)