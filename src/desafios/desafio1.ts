let employee: { code: number, name: string } = {
    code: 10,
    name: "John"
}


// Acessando os atributos já corrigidos
console.log(employee.code);
console.log(employee.name);



// Implementando por meio de classes
/*
class Empregado {
    codigo!: number;
    nome!: string;
}
*/
class Empregado {
    codigo: number;
    nome: string;
    // parametros default caso não sejam inicializados
    constructor(codigo: number = 0, nome: string = ''){
        this.nome = nome;
        this.codigo = codigo;
    }
}

// inicializado pelo construtor
const empregado = new Empregado(77, 'Joana');

// modificado com atribuição direta sem getter and setter
empregado.codigo = 54;
empregado.nome = 'John';
console.log(empregado.codigo);
console.log(empregado.nome);