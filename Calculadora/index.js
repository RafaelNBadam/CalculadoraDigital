function calcular(num) {
  document.getElementById("inputCalculo").value += num;
}

function limpar() {
  var equacao = document.getElementById("equacao");
  document.getElementById("inputCalculo").value = "";
  equacao.innerText = "";
}

function delUltimo() {
  document.getElementById("inputCalculo").value = document
    .getElementById("inputCalculo")
    .value.slice(0, -1);
}
function resultado(eq) {
  var equacao = document.getElementById("equacao");
  let resultado = document.getElementById("inputCalculo").value;
  equacao.innerHTML = resultado;
  document.getElementById("inputCalculo").value = eval(resultado);
}
