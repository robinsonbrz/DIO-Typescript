let buttonTeste = document.getElementById('button');

// ? optional chaining 
// se nao for vazio roda o código senão não roda
buttonTeste?.addEventListener('click', () => {
    console.log('funcionou')
})
console.log("pasta dist");