const person = {
    nome: 'Felipe',
    idade: 25,
    sexo: 'Masculino'
}


console.log(person);                            //              ------->                nome:  Felipe, idade:  25, sexo:  Masculino, Nao existe undefined 

console.log('nome: ', person.nome);             //              ------->                nome:  Felipe 
                                                //                                      console.log('nome: ', person['nome']) funciona igual


console.log('idade: ', person.idade);           //              ------->                idade:  25
                                                //                                      console.log('idade: ', person['idade']) funciona igual


console.log('sexo: ', person.sexo);             //              ------->                sexo:  Masculino
                                                //                                      console.log('sexo: ', person['sexo']) funciona igual


                                                
// -------------------------------- ACESSANDO PROPRIEDADE QUE NAO EXISTE -------------------------------- //

// console.log('Nao existe', person.naoExiste);    //              ------->                Nao existe undefined



// -------------------------------- ADICIONANDO NOVA PROPRIEDADE -------------------------------- //

// person.id = 0001;

// console.log(person);             //              ------->                { nome: 'Felipe', idade: 25, sexo: 'Masculino', id: 1 }



// -------------------------------- VERIFICAR AS CHAVES DO OBJETO -------------------------------- //

// console.log(Object.keys(person));                    //              ------->                [ 'nome', 'idade', 'sexo' ]



// -------------------------------- VERIFICAR SOMENTE OS VALORES DAS CHAVES -------------------------------- //

// console.log(Object.values(person));                    //              ------->                [ 'Felipe', 25, 'Masculino' ]



// -------------------------------- JUNTAR DOIS OBJETOS -------------------------------- //

// const heightOfPerson = {
//     height: 1.80
// }

// const novoObjeto = Object.assign(person, heightOfPerson);
// console.log(novoObjeto);                            //              ------->                { nome: 'Felipe', idade: 25, sexo: 'Masculino', height: 1.8 }



// -------------------------------- REMOVENDO UMA CHAVE DE UM OBJETO -------------------------------- //

// delete person.nome;
// console.log(person);                            //              ------->                { idade: 25, sexo: 'Masculino' }