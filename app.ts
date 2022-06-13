function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(number: number):number{
    return number+2 / number
}

console.log(somarValoresNumericosETratar(1,3, aoQuadrado));
console.log(somarValoresNumericosETratar(1,3, dividirPorEleMesmo));

