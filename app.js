const monsters = [
    {
        id: 1,
        Nome: 'Osvaldo',
        Altura: 2,
        Habilidade: 'Cura',
        Foto: 'https://robohash.org/osvaldo'
    },
    {
        id: 2,
        Nome: 'Roberto',
        Altura: 3,
        Habilidade: 'Metamorfose',
        Foto: 'https://robohash.org/roberto'
    },
    {
        id: 3,
        Nome: 'Rogério',
        Altura: 5,
        Habilidade: 'Imortal',
        Foto: 'https://robohash.org/rogerio'
    },
    {
        id: 4,
        Nome: 'Robson',
        Altura: 8,
        Habilidade: 'Voador',
        Foto: 'https://robohash.org/robson'
    },
]

const section = document.querySelector('.monsters')
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
} )

const allMonsters = monsters.map(monsters => {
    return `<div>
        <p>Nome: ${monsters.Nome}</p>
        <p>Altura: ${monsters.Altura}</p>
        <p class="habilidade">Habilidade: ${monsters.Habilidade}</p>
        <img src=" ${monsters.Foto}"> 
    </div>`
})

section.innerHTML = allMonsters