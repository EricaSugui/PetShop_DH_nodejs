let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo += `
        ---------------
        Nome: ${pet.nome}
        ---------------`;
    }

    return conteudo;
};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
}

const buscarPet = pet => {
    let petsEncontrados = pets.filter(pet => pets.nome);
    return petsEncontrados;
}

module.exports = { 
    listarPets,
    adicionarPet,
    buscarPet };