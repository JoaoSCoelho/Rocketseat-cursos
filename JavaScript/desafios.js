// Desafio 1

const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function returnEndereco(enderecoObj) {
  return `O usuario mora em ${enderecoObj.cidade} / ${enderecoObj.uf}, no bairro ${enderecoObj.bairro}, n° ${enderecoObj.numero}.`
}

// console.log(returnEndereco(endereco))

// Desafio 2

function pares(x, y) {
  const intervalo = y-x >= 0 ? y-x : x-y
  const menor = x <= y ? x : y
  const maior = x >= y ? x : y
  const pares = []
  for(let i = menor; i <= maior; i++) {
    if(i%2 === 0) pares.push(i)
  }
  return pares.join(', ')
}

// console.log(pares(31, 232))

// Desafio 3

function temHabilidades(skills) {
  return skills.indexOf("Javascript") !== -1 ? true : false
  // return skills.includes("Javascript")
}

const skills = ["Javascript", "ReactJS", "React Native"];

// console.log(temHabilidades(skills))

// Desafio 4

function exp(anos) {
  if(anos <= 1) {
    return "Iniciante"
  } else if(anos > 1 && anos <= 3) {
    return "Intermediário"
  } else if(anos > 3 && anos <= 6) {
    return "Avançado"
  } else if(anos > 6) {
    return "Jedi Master"
  }
}

const anosEstudo = 7;
// console.log(exp(anosEstudo));

// Desafio 5

const usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
]

function returnHabilidades(usuarios) {
  let resposta = '';
  for(let usuario of usuarios) {
    resposta += `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}\n`
  }
  return resposta
}

// console.log(returnHabilidades(usuarios))
