const enderecousuario = {
    
rua: document.querySelector('#rua'),
bairro : document.querySelector('#bairro'),
cidade : document.querySelector('#cidade'),
estado : document.querySelector('#estado'),
cep :"06520080"
}

async function consultaCEP(cep){

const url = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

const resposta = await url.json();

const cepUsuario = {

rua: resposta.logradouro,
bairro: resposta.bairro,
cidade: resposta.localidade,
estado: resposta.estado,


}

inserirdados(cepUsuario)

}

function inserirdados(cepUsuario){

enderecousuario .rua.innerText= cepUsuario.rua
enderecousuario .bairro.innerText= cepUsuario.bairro
enderecousuario .cidade.innerText= cepUsuario.cidade
enderecousuario .innerText= cepUsuario.estado

}

consultaCEP(enderecousuario .cep)