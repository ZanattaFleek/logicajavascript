const VALORETANOL = 4.65
const VALORGASOLINA = 5.55

const KMETANOL = 4.5
const KMGASOLINA = 5.5

const RENDIMENTOETANOL = VALORETANOL / KMETANOL
const RENDIMENTOGASOLINA = VALORGASOLINA / KMGASOLINA

if (RENDIMENTOETANOL > RENDIMENTOGASOLINA) {
    console.log('Abasteça com Etanol')
} else if (RENDIMENTOETANOL < RENDIMENTOGASOLINA){
    console.log('Abasteça com Gasolina')
} else {
    console.log('Os rendimentos são iguais. Abasteça com qq um....')
}

