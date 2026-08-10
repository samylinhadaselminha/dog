let imagem = document.getElementById("imagem");
let buscar = document.getElementById("buscar");

async function buscarCachorro() {
    const resposta = await fetch("https://dog.ceo/api/breeds/image/random");
    const dados = await resposta.json();

    imagem.src = dados.message;
}

buscar.addEventListener("click", buscarCachorro);

buscarCachorro();