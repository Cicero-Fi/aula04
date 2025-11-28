const endereço = {
rua: document.querySelector('#rua'),
bairro : document.querySelector('#bairro'),
cidade : document.querySelector('#cidade'),
estado : document.querySelector('#estado')

}
const  cep ="06520080";

async function consultaCEP(cep){

const url = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

const resposta = await url.json();

const cepUsuario = {

rua: resposta.logradouro,
bairro: resposta.bairro,
cidade: resposta.localidade,
estado: resposta.uf

}

rua.innerText= cepUsuario.rua
bairro.innerText= cepUsuario.bairro
cidade.innerText= cepUsuario.cidade
estado.innerText= cepUsuario.estado

console.log(cepUsuario)

}


