const programador = {
    nome: "Beatriz",
    idade: 24,
    tecnologias: [
        {
            nome: 'C#',
            especialidade: 'Desktop'
        },
        {
            nome: 'nodeJS',
            especialidade: 'Web'
        },
    ]
}

console.log(`A Usuária ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
