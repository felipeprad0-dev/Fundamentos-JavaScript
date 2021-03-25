// -------------------------------- NUMBERS -------------------------------- //

console.log('----- Numbers -----\n');

let meuSalario = 3000;
let salarioAmigo = "2500.14";

console.log(meuSalario + salarioAmigo);  // ---->  retorna 30002500

console.log(typeof(meuSalario), meuSalario);      // -----> number 3000
console.log(typeof(salarioAmigo), salarioAmigo);  // ----> string 2500.14


console.log(isNaN(salarioAmigo)); // ----> false

salarioAmigo = "2500.14aasjnfjnfis"

console.log(isNaN(salarioAmigo)); // ----> retorna true, pois tem string junto


let salarioAmigoCorrigido = Number("2500.14");

console.log(typeof(salarioAmigoCorrigido), salarioAmigoCorrigido);   //  -----> number 2500.14


console.log(meuSalario + salarioAmigoCorrigido); // -----> 5500.14



// -------------------------------- STRINGS -------------------------------- //


console.log('\n----- Strings -----\n'); 


let minhaString = "Ola mundo";
let outraString = "Ola mundo 2";
let minhaStringComVariaveis = `${minhaString} - ${outraString} > Ae!`

console.log(minhaStringComVariaveis);