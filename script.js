// let numero = 0;

// function teste(){
//     console.log('xxxxx' + numero)
// }

// function casa(){
//     let luminaria = 'vermelha';

//     function quarto (){
//         let cama = 'mola';

//         console.log(luminaria);
//     }
// }

// let numero1 = 10;
// let numero2 = 30;

// function escolherMaior( numero1, numero2){
//     // let maior = numero1 > numero2 ? numero1 : numero2;

//     if(numero1 > numero2){
//     return numero1;
//     }
//     return numero2
// }

/////////////////////////////////////////////

let palavras = ['carro', 'batata','feijão'];
let palvraBuscada = 'batata';

function buscarPalavra (palavras,palavraBuscada){
for(let palavra of palavras){
    if (palavra === palavraProcurada){
        return true;
    }
}
return false;
}