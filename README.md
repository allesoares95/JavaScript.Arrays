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

    11 - 

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




