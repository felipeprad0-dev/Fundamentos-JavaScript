# Instalando o Node.js : 
                       - Acessar o site https://nodejs.org/en/
                       - Baixar a versao recomendada para a maioria dos usuarios
                       - Verificar a versao no CMD digitando ` node -v` e `npm -v` 
                       - Adicionar o node.js ao PATH geral do Windows digitando na barra de pesquisa: `edit the system environment variables` > environment variables > Selecionar `PATH` na aba `User variables for Felipe` > 
                         edit... > new > colar o diretorio do node.js no program files > clicar `ok` em tudo. 
                       - Executar no terminal do VScode: `node ./nome-do-projeto.js`, se funcionar, tudo OK.     



                       
                       
# var , let e const: 

  Nao deve-se mais usar var, apenas let e const. Let tem a permissao para ser alterada e o const nao pode ser alterado. Essa e a diferenca.




# Tipos de dados

  String - textos criados com ``, '', ""

  Number - numeros

  isNaN (variavel) retornara true ou false. Caso a string nao for um numero valido, retornara true, e caso for um numero valido, retornara false.

  typeof(variavel) retornara o tipo da variavel, sendo string, number, boolean...

  Se trabalharmos a soma de uma variavel numerica e uma variavel de texto, iremos ter os valores concatenados.




# Operadores Aritmeticos 

  +   ---->   Adicao 
  -   ---->   Subtracao
  *   ---->   Multiplicacao
  /   ---->   Divisao
  %   ---->   Resto da divisao
  **  ---->   Exponenciacao




# Operadores de Comparacao 

  <   ---->  Menor que
  >   ---->  Maior que
  <=   ---->  Menor ou igual que
  >=   ---->  Maior ou igual que
  ===  ---->  Igual a  (compara o tipo e o valor. Por boa pratica, sempre usar esse e nao (==))
  !==  ---->  Diferente de (tambem compara o tipo e o valor)
  ||   ----> Ou 
  &&  ----> E



No JavaScript, podemos colocar `\n` apos a string para pular linha ---> console.log("Meu nome\n")




# Comentarios

  // serve para comentar apenas uma unica linha 

  /** serve para comentar diversas linhas 

  Atalho para comentar: CTRL + / (Lembrando de selecionar o que deseja comentar)




# Null e Undefined 

  Em JavaScript, uma variavel criada sem nenhuma inicializacao, ela sera do tipo `undefined`.

  A grande diferenca entre `undefined` e `null`, ?? que n??s podemos assinar uma vari??vel como undefined, mas n??o devemos. Por boa pr??tica, assinamos sempre com `null` para 
  falar que o valor ?? vazio, que aquela vari??vel n??o tem um valor no momento mas que poder?? ter um valor no futuro!

  `Undefined` ?? um valor e tipo de valor usado no Javascript para informar que o dado n??o existe ou n??o foi definido, enquanto o valor de `null` ?? usado para informar que uma vari??vel nasceu sem valor.




# Booleanos 

  Sempre ser?? `false` quando tivermos: false
                                     0
                                     []
                                     ""
                                     ''
                                     null
                                     undefined
                                     NaN


  Sempre ser?? `true` quando tivermos: true
                                      1
                                      -1
                                      0.5
                                      "0"


  Se utilizarmos o operador `!`, ele negar?? o valor e o inverter??. Se for true, ser?? false. 
                                                                   Se for false, ser?? true.

  Se utilizarmos o operador `!!`, ele converter?? o valor de acordo com os crit??rios da tabela acima.

  Se utilizarmos `!(!!)` e a vari??vel for originalmente true , ele retornar?? false. E se a vari??vel for originalmente false, ele retornar?? true.




# Arrays 

  Um array sempre come??a pelo ??ndice 0, ou seja, se tivermos 4 itens, o ??ltimo ser?? o ??ndice 3.

  Se tentar ver um ??ndice em que n??o est?? nenhum item, retornar?? `undefined`.

  array[]         --->    verifica o item do ??ndice informado

  array.length    --->    verifica a quantidade de itens de um array

  array.unshift   --->    adiciona um item no in??cio de um array

  array.push()    --->    adiciona um item ao final de um array

  array.shift()   --->    remove o primeiro item de um array e guarda o valor, podendo ver o que foi removido atrav??s do console.log

  array.pop()     --->    remove o ??ltimo item do array e guarda o valor, podendo ver o que foi removido atrav??s do console.log

  array.splice()  --->    remove um item espec??fico do array. Recebe como par??metro o numero do ??ndice que ser?? o ponto de partida para remo????o de itens, 
                          a quantidade de item a ser removido a partir do ponto de partida, e elementos ?? serem adicionados no lugar do removido

  Array.isArray(nomedoarray)   --->   verifica se ?? um array corretamente, retornando true ou false

  array.sort()    --->    ordena um array. Recebe tamb??m uma fun????o como par??metro para ordenar da forma que precisa. Ex: uma lista de objetos e quer ordenar 
                          pelo nome das pessoas ou idade 

  array.concat()  --->    junta dois arrays em um unico array. Devemos passar os itens a juntar como par??metro

  array.join()    --->    junta arrays em uma string. Recebe como par??metro o separador. Ex: (',')

  array.indexOf() --->    verifica o ??ndice de um item espec??fico. Recebe como par??metro o item




# Objects

  Por padr??o e boas pr??ticas, devemos tentar evitar alterar de um objeto que j?? foi criado. Ent??o, devemos sempre tentar criar um novo objeto
  usando o `Object.assign()` ou atrav??s de outras formas.

  Para construir um objeto, declara uma v??riavel seguida de chaves '{}'. Ex: `const objeto = {}`

  O objeto cont??m chaves e valores, que s??o suas propriedades. Ex: `const objeto = { chave: valor }`

  Para acessar alguma informa????o dentro de um objeto, utiliza-se o nome do objeto seguido da chave desejada. Ex: `objeto.chave`     ou      `objeto['chave']`

  Para criar uma nova chave em um objeto, devemos utilizar o nome do objeto, o nome da chave a ser criada e o valor dela. Ex: `objeto.chave2 = valor`

  Quando declaramos uma constante como um objeto, podemos PASSAR ou ALTERAR a inst??ncia do objeto em quest??o com novas chaves. Diferente de alterar o valor da constante.