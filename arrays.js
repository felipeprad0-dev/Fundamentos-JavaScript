const minhasTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

console.log(minhasTarefas);               // console.log(minhasTarefas);          //       ------>       mandar email, colocar comida para o dog, limpar o quarto



// -------------------------------- VERIFICAR O ITEM DE UM INDICE DO ARRAY -------------------------------- //

// console.log(minhasTarefas[0]);          //     ------>       mandar email
// console.log(minhasTarefas[1]);          //     ------>       colocar comida para o dog
// console.log(minhasTarefas[4]);          //     ------>       undefined



// -------------------------------- VERIFICAR A QUANTIDADE DE ITENS DO ARRAY -------------------------------- //

// console.log(minhasTarefas.length);        //     ------>       3



// -------------------------------- ADICIONAR UM ITEM NO INICIO DO ARRAY -------------------------------- //

// const adicionarInicio = minhasTarefas.unshift('lavar a louça');
// console.log(minhasTarefas);                       //     ------>       lavar a louça, mandar email, colocar comida para o dog, limpar o quarto, formatar computador



// -------------------------------- ADICIONAR UM ITEM AO FINAL DO ARRAY -------------------------------- //

// const adicionarFinal = minhasTarefas.push('formatar computador');
// console.log(minhasTarefas);                       //     ------>       mandar email, colocar comida para o dog, limpar o quarto, formatar computador



// -------------------------------- REMOVER O PRIMEIRO ITEM DO ARRAY -------------------------------- //

// const removerPrimeiro = minhasTarefas.shift();
// console.log(removerPrimeiro);                          //     ------>       mandar email
// console.log(minhasTarefas);                    //      ------>       colocar comida para o dog, limpar o quarto



// -------------------------------- REMOVER O ULTIMO O ITEM DO ARRAY -------------------------------- //

// const removerUltimo = minhasTarefas.pop();
// console.log(removerUltimo);                  //      ------>       formatar computador
// console.log(minhasTarefas);                  //      ------>       mandar email, colocar comida para o dog



// -------------------------------- REMOVER UM ITEM ESPECIFICO A PARTIR DE UM INDICE -------------------------------- //

// console.log(minhasTarefas[1]);                  //      ------>       colocar comida para o dog

// const removerItemEspecifico = minhasTarefas.splice(1, 1);
// console.log(minhasTarefas);                     //      ------>       mandar email, limpar o quarto 



// -------------------------------- VERIFICAR O TIPO DE UM ARRAY -------------------------------- //

// console.log(typeof(minhasTarefas));                     //      ------>       object



// -------------------------------- VERIFICAR O TIPO DE UM ARRAY DA FORMA CORRETA -------------------------------- //

// console.log(Array.isArray(minhasTarefas));                     //      ------>       true              



// -------------------------------- ORDENAR UM ARRAY -------------------------------- //

// const numeros = [3, 1, 0, 2, 6, 4, 5];
// const letras = ['a', 'c', 'f', 'e', 'd', 'b'];
// console.log(numeros.sort());                     //      ------>       0, 1, 2, 3, 4, 5, 6
// console.log(letras.sort());



// -------------------------------- JUNTAR DOIS ARRAYS -------------------------------- //

// const novoArray = minhasTarefas.concat([1, 2, 3])
// console.log(novoArray);                             //      ------>       mandar email, colocar comida para o dog, limpar o quarto, 1, 2, 3



// -------------------------------- JUNTAR ARRAYS EM UMA SÓ STRING -------------------------------- //

// console.log(minhasTarefas.join(','));             //      ------>             mandar email,colocar comida para o dog,limpar o quarto



// -------------------------------- VERIFICAR O INDICE DE UM ITEM -------------------------------- //

// const index = minhasTarefas.indexOf('colocar comida para o dog');
// console.log(index);                                   //      ------>             1

// const indexFalso = minhasTarefas.indexOf('chaves');
// console.log(indexFalso);                              //      ------>             -1