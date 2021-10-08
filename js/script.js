

const texto = document.getElementById("texto");

function calcular () {

const nome = document.getElementById("nome").value;

const senha = document.getElementById("senha").value;

const resultado = document.getElementById("resultado")



if (nome !== '' && senha !== '') {



resultado.textContent = `Seu nome é ${nome} e sua senha  atual é ${senha}`;




} 
else {


	resultado.textContent = "Por favor,preencha todos os dados";
}



}


botao.addEventListener('click', calcular)
