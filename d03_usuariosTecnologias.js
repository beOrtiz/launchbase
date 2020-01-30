const usuarios = [
    {nome: 'Beatriz' , tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS']},
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js']}
];

// console.log(usuarios.)
for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`)
}