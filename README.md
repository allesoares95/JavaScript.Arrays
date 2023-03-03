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

  7 - 

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




