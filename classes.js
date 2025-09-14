// Classe genérica de herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    // Estrutura de decisão com base no tipo do herói
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "fez um ataque desconhecido";
    }

    // Exibe a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const herois = [
  new Heroi("Homem-aranha", 87, "guerreiro"),
  new Heroi("Batman", 2019, "mago"),
  new Heroi("Hulk", 35, "monge"),
  new Heroi("Flash", 28, "ninja"),
];

// Laço de repetição para atacar com todos os heróis
for (let heroi of herois) {
  heroi.atacar();
}
