# JavaScript: Arrays

  - Estudos feito no curso de JavaScript: Arrays no Alura.
    Esse curso de JavaScript Arrays sera focado no uso para back-end.
    Necessário a utilização do NodeJS;

  # Introdução de Arrays;


  # Desafios
  1 - O primeiro desafio será calcular a média das notas de um estudante.

  ```js
    const notas = [10, 8, 7.5, 6.5];
    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    console.log(media);

  // rodar aplicação no NodeJS;
  ```
  
  2 -  Adicionar nota.
  ```js
    const notas = [10, 6, 8];

    notas.push(7);
    console.log(notas);

    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    console.log(media);
  ```

  3 - Remover nota.
  ```js
    const notas = [10, 6, 8, 5.5, 10];

    notas.pop(4);
    console.log(notas);

    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    console.log(`A média é ${media}`);
  ```

  4 - Dividindo alunos.
  ```js
    const alunos = [
      'João',
      'Juliana',
      'Ana',
      'Caio',
      'Lara',
      'Marjorie',
      'Guilherme',
      'Aline',
      'Fabiana',
      'Andre',
      'Carlos',
      'Paulo',
      'Bia',
      'Vivian',
      'Isabela',
      'Vinícius',
      'Renan',
      'Renata',
      'Daisy',
      'Camilo'
    ];

    const sala1 = alunos.slice(0, alunos.length / 2);
    const sala2 = alunos.slice(alunos.length / 2);

    console.log(sala1);
    console.log(sala2);
  ```

  5 - Removendo aluno no meio da lista.
  ```js
    const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

    nomes.splice(1, 2, "Rodrigo");
    console.log(nomes);

    // Utilizando metodo splice será removido Ana no array [1] e Caio como segundo parametro e irá adicionar Rodrigo no lugar;
  ```

  6 - Jutando as salas
  ```js
    const salaJS = ["Evaldo", "Camis", "Mari"];
    const salaPython = ["Ju", "Leo", "Raquel"];

    const salasUnificadas = salaJS.concat(salaPython);
    console.log(salasUnificadas);
  ```

  7 - Lista com 2 dimensões
  ```js
    const alunos = ["João", "Juliana", "Ana", "Caio"];
    const medias = [10, 8, 7.5, 9];

    const listaDeAlunosMedias = [alunos, medias];

    console.log(`
      A aluna da posição 1 da lista de alunos é: ${listaDeAlunosMedias[0][1]}.
      A nota dessa aluna é ${listaDeAlunosMedias[1][1]}
    `);
  ```

  8 - Procurando aluno na lista e verificando média;
  ```js
    const alunos = ["João", "Juliana", "Ana", "Caio"];
    const medias = [10, 8, 7.5, 9];

    const listaDeAlunosEMedias = [alunos, medias];

    function exibeNomeENota(aluno) {
      if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediadoAluno = medias[indice];
        
        console.log(`${aluno} tem a média ${mediadoAluno}`);
      }else {
        console.log("Aluno não encontrado");
      }
    }

    exibeNomeENota("Caio");
  ```

  9 - Imprima o índice e a lista .
  ```js
    const numeros = [100, 200, 300, 400, 500, 600];

    // Primeira expressão: é executada apenas uma única vez
    // Segunda expressão: condição de execução
    // Terceira expressão: é executada sempre ao final do bloco
    for (let indice = 0; indice < numeros.length; indice++) {
      console.log(numeros[indice]);
    };
  ```

  10 - Calcular a média utilizando for:
  ```js
    const notas = [10, 6.5, 8, 7.5];
    let somasDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
      somasDasNotas += notas[i];
    }

    const media = somasDasNotas / notas.length;
    console.log(`A média das notas é ${media}` );
  ```

  11 - Calcular a média utilizando for-of 
  ```js
    const notas = [10, 6.5, 8, 7.5];

    let somasDasNotas = 0;

    for (let elemento of notas){
      somasDasNotas += elemento
    };

    const media = somasDasNotas / notas.length;
    console.log(`A média das notas é ${media}` );
  ```

  12 - Média com forEach
  ```js
    const notas = [10, 6.5, 8, 7.5];

    let somaDasNotas = 0;

    notas.forEach(function (nota){
      somaDasNotas += nota;
    });

    const media = somaDasNotas / notas.length;
    console.log(`A média das notas é ${media}` );
  ```

  13 - Modos de como utilizar funções callbacks:
  ```js
    const nomes = ["Alexandre", "John", "Joycy"]

    nomes.forEach(function(nome){
      console.log(nome);
    });

    // ----------------------------------------------------------------

    nomes.forEach((nome) => {
      console.log(nome);
    });

    // ----------------------------------------------------------------

    function imprimeNome(nome){
      console.log(nome);
    };

    nomes.forEach(imprimeNome);
  ```

  14 - adicionar um ponto extra nas notas
  ```js
    const notas = [10, 9.5, 8, 7, 6];

    const notasAtualizas = notas.map((nota) => {
      return nota + 1 >= 10 ? 10 : nota + 1;
    });

    console.log(notasAtualizas);
  ```

  15 - padronizar os nomes 
  ```js
    const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

    const nomesParonizados = nomes.map((nome) => {
      return nome.toUpperCase();
    });

    console.log(nomesParonizados);
  ```

  16 - Filtrando aluno reprovado
  ```js
    const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
    const medias = [7, 4.5, 8, 7.5];

    const reprovados = alunos.filter((_, indice) => {
      return medias[indice] < 7;
    });

    console.log(`O aluno ${reprovados} foi reprovado.`);
  ```

  17 - Calcular a médias geral de cada sala:
  ```js
    const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
    const salaJava = [6, 5, 8, 9, 5, 6];
    const salaPython = [7, 3.5, 8, 9.5];

    function calculaMedia(notasDaSala) {
      const somaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;
      }, 0)

      const media = somaDasNotas / notasDaSala.length;

      return media;
    };

    console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)} `);
    console.log(`A média da sala de Java é ${calculaMedia(salaJava)} `);
    console.log(`A média da sala de Python é ${calculaMedia(salaPython)} `);
  ```

  18 - Crie um novo array sem alterar o array original:
  ```js
    const notas = [7, 7, 8, 9];
    const novasNotas = [5, ...notas, 10];

    console.log(`As notas originais são: ${notas}`);
    console.log(`As novas notas são: ${novasNotas}`);
  ```

  19 - Removendo duplicada de uma lista:
  ```js
    const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

    const meuSet = new Set(nomes);
    const nomesAtualizados = [...meuSet];

    // OU 
    const nomesAtualizados = [...new Set(nomes)];

    console.log(nomesAtualizados);
  ```

  # Propriedades de Arrays;   
    - length: Largura ou tamanho.

    - push(): Empurrando ou inserindo em uma lista const.
      O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

    - pop(): removendo.

    - slice(): dividir.
      O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

    - splice(): removendo e adicionando.
      o método splice() é usado para adicionar e remover elementos de uma lista.

    -concat(): juntando.
       o concat(), que vem da palavra "concatenar". Em programação, isso significa "juntar"

    Separar um array em partes com slice() (utilizamos para obter dois novos arrays a partir de um).

    Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.

    Concatenar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.

    Trabalhar com arrays de duas dimensões. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].

    for(){}: percorrer arrays e executar blocos de código para cada elemento.
      O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

      IMPORTANTE: O loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa no terminal pressionando “Ctrl + C”.

    Utilizar os métodos includes() e indexOf():
      O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.

    Desestruturar um array:
      Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.

    Utilizar a estrutura for e entender seu funcionamento:
      O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
      
    Utilizar a estrutura for of e entender a diferença em relação ao for:
      O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

    Como utilizar o forEach:
      Aprendemos mais uma forma de iterar sobre arrays, dessa vez com um método próprio deles. O forEach recebe uma função callback que será executada para cada item do array.

    Diferentes formas de utilizar funções callback:
      Podemos utilizar funções anônimas (como arrow functions) diretamente como funções callback, ou então criar funções de forma externa e utilizá-las no parâmetro.

    Como utilizar o map:
      O map também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, sem modificar o array original. Um novo array é criado com os valores reescritos.

    Como utilizar o filter e o reduce:
      Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular valores de um array em um só.
    
    Como clonar arrays com o spread operator ...:
      Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
    
    Como utilizar a estrutura Set:
      Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em um lista.
