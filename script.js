/*console.log("Pratica Guiada I");

let numero = Number(prompt("Digite um número para somar ou 0 para sair"))
let soma=0
while(numero!==0){
soma=soma+numero
console.log(soma);
console.log(numero);
numero = Number(prompt("Digite um número para somar ou 0 para sair"))
}
console.log("SOMA=",soma);


console.log("Prática Guiada III");

const listaDeNumero =[2,4,6,8,10,12,14]

for(let i=0;i<listaDeNumero.length;i++){

console.log(`O número do indice ${i} é ${listaDeNumero[i]}`);
}
console.log("FIM");
// console.log("Pratica Guiada II");
// const numero = +prompt("Digite um numero")

// for(let i=0;i<=numero;i++){
//  console.log(i);
//  }*/

let administrador = prompt('Qual o seu usuario?').toUpperCase()

while(administrador !== 'A') {
    console.log('Acesso negado');
    administrador =prompt('Qual o seu usuario?').toUpperCase()
}
console.log('Boas vindas admin');
