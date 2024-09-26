const fs = require('fs');

function callback() {
    if (erro) {
        //Informar ao usuário que a gravação falhou
    } else{
        //Informar ao usuário que a gravação deu certo 
    }
}

class Pessoa{
    constructor(nome, cargo, idade) {
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