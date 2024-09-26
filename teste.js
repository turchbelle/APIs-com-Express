const fs = require('fs');

function callback(erro) {
    if (erro) {
        //Informar ao usuário que a gravação falhou
    } else{
        console.log("Parabéns você conseguiu!");
    }
}

class Pessoa{
    constructor(nome, cargo) {
        this.nome = nome; //propriedade nome
        this.cargo = cargo; //propriedade cargo
    }

    arquivar() { //método
        const informação = this.nome + ", " + this.cargo;
        fs.appendFile('usuário.txt', informação, 'utf8', callback);
    }
}

let humano = new Pessoa("Marco", "Motorista");
humano.arquivar();