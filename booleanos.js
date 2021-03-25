let podeDirigir = true;

if(podeDirigir) {
    console.log('Ela pode dirigir');            //       ------>       Ela pode dirigir
}       


podeDirigir = false;

if(podeDirigir) {
    console.log('Ela pode dirigir');            //       ------>       Nao retorna nada, pois e false
}       



// -------------------------------- EXEMPLO COM NEGACAO (!) INVERTENDO O RESULTADO -------------------------------- //

let saldoEmConta = 0;          //       ------>       retornaria false, porque é 0  

if (!saldoEmConta) {
    console.log('nao tem saldo');           //        ------>       retornara true, pois inverte o valor que retornaria na variavel
}



saldoEmConta = 1;           //       ------>       retornaria true, porque é 1  

if (!saldoEmConta) {
    console.log('nao tem saldo');           //        ------>       retornara false, pois inverte o valor que retornaria na variavel
}



// -------------------------------- EXEMPLO UTILIZANDO (!!) QUE FORÇA O VALOR PARA TRUE OU FALSE, DE ACORDO COM A TABELA -------------------------------- //

let boolComString = '';

console.log('boolComString', !!boolComString);           //      ------>      retorna true, pois é uma string com conteúdo



// -------------------------------- EXEMPLO UTILIZANDO NEGAÇÃO (!) QUE INVERTE O VALOR PARA TRUE OU FALSE -------------------------------- //

console.log('negação', !boolComString);           //      ------>      retorna false, pois é true sendo uma string com conteúdo, entao ele inverte



// -------------------------------- EXEMPLO UTILIZANDO NEGAÇÃO (!) E (!!) QUE FORÇA O VALOR PARA TRUE OU FALSE, DE ACORDO COM A TABELA -------------------------------- //

console.log(
    ! ('negação + forçar bool', !!boolComString)                  //      ----->  !!boolComString retorna true por conta do valor original ser true, e o `!` por fora inverte o valor para false.
                                                                  //                Caso a variável boolComString passe a ter um valor que originalmente retorne false, o operador de negação o transformará em true
);

