const usuarios = [
    { nome: 'Beatriz', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
];

function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === 'CSS') {
            return true;
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    if(usuarioTrabalhaComCSS) {
        console.log(`O Usuario ${usuarios[i].nome} trabalha com CSS`);
    }
}