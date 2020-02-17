const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
.createServer((req, res) => {
    // quando faço requisiçao no navegador

    // if (req.url == "/pets"){
    //     return res.end("aqui eu estou listando todos os pets.");
    // } 
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query; // parametros
    let rota = urlCompleta.pathname; // pets/add

    //console.log(queryString);

    switch (rota) {
        case "/pets":
            let conteudo = petshop.listarPets();
            if (conteudo.length > 0){
                res.write(conteudo);
            } else {
                res.write("\nNenhum pet cadastrado");
            }
            res.write("\nlista de pets");
            break;
        case "/pets/add":
            let novoPet = queryString;
            if (petshop.adicionarPet(novoPet)){    
                res.write(`${novoPet.nome} foi adicionado à lista com sucesso!`);
            } else {
                res.write("Ops, algo deu errado!");
            }
            break;
        case "/pets/buscar":
            let pet = queryString;
            let petsEncontrados = petshop.buscarPet(pet);
            if (petsEncontrados.length >0)
            {
                res.write(`Encontramos ${petsEncontrados.length} pets com o nome \n ${pet.nome}.`);
            } else {
                res.write(`Pet não encontrado!`);
            }
            res.write("\nbuscando pets");
            break;
        default:
            res.write("\ntô perdido");
    }

    res.end("\nOlá Mundo!\n\n de novo");
})
.listen(3000, "localhost", () => {
    // quando ligo servidor
    console.log("Servidor rodando na porta 3000");
});