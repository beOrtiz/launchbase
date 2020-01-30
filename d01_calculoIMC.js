const nome = 'Beatriz'
const peso = 58
const altura = 1.64

const imc = (peso/(altura*altura));

if(imc >=30){
    console.log(`${nome} voce está acima do peso`);
}
if(imc < 29.9){
    console.log(`${nome} voce não está acima do peso`);
}   