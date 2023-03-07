const nomes = ["Alexandre", "John", "Joycy"]

nomes.forEach(function(nome){
  console.log(nome);
});

//  OU

nomes.forEach((nome) => {
  console.log(nome);
});

// ------------------------------------

function imprimeNome(nome){
  console.log(nome);
};

nomes.forEach(imprimeNome);