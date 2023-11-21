const readlineSync = require('readline-sync');

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';

    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Entrada de dados pelo usuário
const nomeHeroi = readlineSync.question('Digite o nome do herói: ');
const idadeHeroi = readlineSync.questionInt('Digite a idade do herói: ');
const tipoHeroi = readlineSync.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ');

// Criando instância do herói com os dados fornecidos pelo usuário
const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

// Chamando o método atacar
heroi.atacar();
