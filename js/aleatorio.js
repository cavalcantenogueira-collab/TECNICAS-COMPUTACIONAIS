const nomes = ["João", "Camila", "Maria joaquina", "Sofia", "Enzo", "Cirilo", "Jacob"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)