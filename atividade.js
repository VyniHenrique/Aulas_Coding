const nome = 'vynicius';
const idade = 19;
console.log('Olá meu nome é ' + nome + ' e tenho ' + idade + ' anos');

const nome2 = 'joao';
const cidade = 'recife';
console.log(`${nome2} eh de ${cidade}`);

const num1 = 1;
const num2 = 2;
console.log('A soma eh: ' + (num1 + num2));
console.log('A subtaçao eh: ' + (num2 - num1));
console.log('A multiplicação eh: ' + (num1 * num2));
console.log('A divisão eh: ' + (num2 / num1));

const base = 2;
const altura = 10;
console.log('A area do triangulo eh de ' + (base * altura / 2));


const nota1 = 10;
const nota2 = 9;
const nota3 = 8;
console.log('A media do aluno eh de: ' + (nota1 + nota2 + nota3) / 3);

const desconto = 15;
const valorFinal = 75;
const valorSemDesc = 100;
console.log(`O valor do desconto foi de ${desconto} %, o valor sem desconto eh de R$ ${valorSemDesc} e o valor final eh de ${valorFinal}`);

const salarioBruto = 3000;
console.log('O salario liquido da pessoa eh de: ' + (salarioBruto * 0.75 - 158.40));

const valorDolar = 100;
console.log('O valor convertido de dolar para real eh de: ' + (100 * 5.43));

const tempCelsius = 30;
console.log('A temperatura ' + tempCelsius + '(graus Celsius) eh equivalente a ' + ((9 / 5) * tempCelsius + 32) + ' graus na escala Fahremheit');

const KG = 70;
const Altura = 1.70;
console.log('O IMC da pessoa eh de: ' + (KG / (altura * altura)));
