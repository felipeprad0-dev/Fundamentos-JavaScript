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

  A grande diferenca entre `undefined` e `null`, é que nós podemos assinar uma variável como undefined, mas não devemos. Por boa prática, assinamos sempre com `null` para 
  falar que o valor é vazio, que aquela variável não tem um valor no momento mas que poderá ter um valor no futuro!

  `Undefined` é um valor e tipo de valor usado no Javascript para informar que o dado não existe ou não foi definido, enquanto o valor de `null` é usado para informar que uma variável nasceu sem valor.




# Booleanos 

  Sempre será `false` quando tivermos: false
                                     0
                                     []
                                     ""
                                     ''
                                     null
                                     undefined
                                     NaN


  Sempre será `true` quando tivermos: true
                                      1
                                      -1
                                      0.5
                                      "0"


  Se utilizarmos o operador `!`, ele negará o valor e o inverterá. Se for true, será false. 
                                                                   Se for false, será true.

  Se utilizarmos o operador `!!`, ele converterá o valor de acordo com os critérios da tabela acima.

  Se utilizarmos `!(!!)` e a variável for originalmente true , ele retornará false. E se a variável for originalmente false, ele retornará true.




# Arrays 

  Um array sempre começa pelo índice 0, ou seja, se tivermos 4 itens, o último será o índice 3.

  Se tentar ver um índice em que não está nenhum item, retornará `undefined`.

  array[]         --->    verifica o item do índice informado

  array.length    --->    verifica a quantidade de itens de um array

  array.unshift   --->    adiciona um item no início de um array

  array.push()    --->    adiciona um item ao final de um array

  array.shift()   --->    remove o primeiro item de um array e guarda o valor, podendo ver o que foi removido através do console.log

  array.pop()     --->    remove o último item do array e guarda o valor, podendo ver o que foi removido através do console.log

  array.splice()  --->    remove um item específico do array. Recebe como parâmetro o numero do índice que será o ponto de partida para remoção de itens, 
                          a quantidade de item a ser removido a partir do ponto de partida, e elementos à serem adicionados no lugar do removido

  Array.isArray(nomedoarray)   --->   verifica se é um array corretamente, retornando true ou false

  array.sort()    --->    ordena um array. Recebe também uma função como parâmetro para ordenar da forma que precisa. Ex: uma lista de objetos e quer ordenar 
                          pelo nome das pessoas ou idade 

  array.concat()  --->    junta dois arrays em um unico array. Devemos passar os itens a juntar como parâmetro

  array.join()    --->    junta arrays em uma string. Recebe como parâmetro o separador. Ex: (',')

  array.indexOf() --->    verifica o índice de um item específico. Recebe como parâmetro o item




# Objects

  Por padrão e boas práticas, devemos tentar evitar alterar de um objeto que já foi criado. Então, devemos sempre tentar criar um novo objeto
  usando o `Object.assign()` ou através de outras formas.

  Para construir um objeto, declara uma váriavel seguida de chaves '{}'. Ex: `const objeto = {}`

  O objeto contém chaves e valores, que são suas propriedades. Ex: `const objeto = { chave: valor }`

  Para acessar alguma informação dentro de um objeto, utiliza-se o nome do objeto seguido da chave desejada. Ex: `objeto.chave`     ou      `objeto['chave']`

  Para criar uma nova chave em um objeto, devemos utilizar o nome do objeto, o nome da chave a ser criada e o valor dela. Ex: `objeto.chave2 = valor`

  Quando declaramos uma constante como um objeto, podemos PASSAR ou ALTERAR a instância do objeto em questão com novas chaves. Diferente de alterar o valor da constante.