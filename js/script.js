

const texto = document.getElementById("texto");


function calcular () {

const nome = document.getElementById("nome").value;

const senha = document.getElementById("senha").value;

const resultado  = document.getElementById("resultado");


if (nome !== '' && senha !== '') {


alert("Todos os valores foram preenchidos com sucesso");

} 
else {


	alert("Por favor,digite todos os valores");
}
}





botao.addEventListener('click', calcular)
