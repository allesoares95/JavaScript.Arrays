const notas = [10, 9.5, 8, 7, 6];

const notasAtualizas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizas);