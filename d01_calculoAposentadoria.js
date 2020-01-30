const nome = 'Beatriz'
const sexo = 'F'
const idade = 56
const contribuicao = 40
const calculoAposentadoria = idade + contribuicao

if ((sexo === 'F' && calculoAposentadoria >= 85) || (sexo === 'M' && calculoAposentadoria >= 95)) {
    console.log(`${nome} , voce pode se aposentar!`);
} else {
    console.log(`${nome} , voce ainda não pode se aposentar!`);
}