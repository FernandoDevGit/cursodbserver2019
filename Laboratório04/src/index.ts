import {Cofrinho,Moeda} from "./entidades";
import {salvarCofrinho,lerCofrinho} from "./persistencia";


//biblioteca de serialização

async function main() {
    const cofre = new Cofrinho();
    cofre.adicionar(new Moeda("1 centavo", 1));
    cofre.adicionar(new Moeda("5 centavos", 5));
    cofre.adicionar(new Moeda("10 centavos", 10));
    cofre.adicionar(new Moeda("25 centavos", 25));
    cofre.adicionar(new Moeda("50 centavos", 50));
    cofre.adicionar(new Moeda("1 real",100));
 
    try {
        await salvarCofrinho(cofre, 'cofrinhoSerializado');

    } catch (erro) {
        console.log('Erro no nome do arquivo');
        console.log(erro);
    }


    try {
        const cofre = await lerCofrinho('cofrinhoSerializado');
        console.log(cofre.frequenciaMoedas());
      } catch (erro) {
        console.log('Erro de leitura do arquivo:');
        console.log(erro);
      }

}

main();
