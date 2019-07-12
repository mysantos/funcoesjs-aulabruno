// // let estaChovendo = false;
// // let numeros = [
// //     [1,2],
// //     [3,4]
// // ]

// // let pessoa = {
// //     nome: 'José',
// //     idade: 10,
// //     cpf: '310.524.123-12'\
// // }

// let nome = prompt ('Digite se nome');
// let idade = promt ('Digite sua idade');

// if( idade >= 30){
//     alert ('Seu velho');
// } else if (idade >=25){
//     alert ('Tá chegando lá');
// } else {
//     alert ('Novinho');
// }

// let frase = idade >=30 ? "Seu velho' : 'Novinho';

// let contador = 1;

// while (contador <= 1000){
//     console.log (contador);
//     contador++;
// }

////////USO DO 'DO' ///////////

// let contador = 1;

// do {
//     console.log(contador);
//     contador++;
// } while (contador <= 1000);

// let escolha = 0;

// while(escolha === '0'){
//     escolha = prompt('Digite 0 para sair ou outro numero para continuar');
// }

///////USO DO FOR (LAÇOS)/////////

// for(let i =0; i < 100; i++){
//     console.log(i);
// }

// for(let i = 99; i > 0; i--){
//     console.log (i);
// }
// console.log ('Olá mamãe')

// ----------------------------

for(let i = 2; i <= 100; i++){
    console.log (i)
 i++
}

let nomes = ['Rafael', 'Leonardor', 'Caroline', 'Ana', 'Gabriela', 'Você'];

// for(let i=0; i<6; i++){
//     console.log(nome[i]);
// }

for(let nome of nomes){
    console.log(nome);
}

for(let indice in nomes){
    console.log(indice);
}
