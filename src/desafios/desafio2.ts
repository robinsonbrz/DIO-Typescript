// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Desempregado,
    Professora,
    Atriz,
    Desenvolvedora,
    Padeiro,
}


class Pessoa {
    nome: string;
    idade: number;
    profissao: Profissao;

    constructor(nome = '', idade = 0, profissao = Profissao.Desempregado){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

let pessoa1 = new Pessoa('Maria', 29, Profissao.Atriz);
let pessoa2 = new Pessoa('roberto', 19, Profissao.Padeiro);
let pessoa3 = new Pessoa('laura', 32, Profissao.Atriz);
let pessoa4 = new Pessoa('carlos', 19, Profissao.Padeiro);

console.log( pessoa1 );
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.profissao)
console.log();

console.log( pessoa2 );
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.profissao)
console.log();

console.log( pessoa3 );
console.log(pessoa3.nome);
console.log(pessoa3.idade);
console.log(pessoa3.profissao)
console.log();

console.log( pessoa4 );
console.log(pessoa4.nome);
console.log(pessoa4.idade);
console.log(pessoa4.profissao)
console.log();






/*
****************
Desafio original
****************

let pessoa1: {
    nome: string,
    idade: number,
    profissao: string
}

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/