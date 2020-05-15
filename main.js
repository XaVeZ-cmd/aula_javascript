function clicou(){
  document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar<b>";
}
function redirecionar(){
  window.open("http://www.google.com.br");
  window.location.href = "http://www.google.com.br";
}
function trocar(){
  //alert("trocar texto");
  document.getElementById("mousemover").innerHTML="Obrigado por passar o mouse";
}
function voltar(){
 document.getElementById("mousemover").innerHTML="Passe o mouse aqui";
}

//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);

/*var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta.nome);*/

/*var nome = "Thiago Amorim";
var idade = 36;
//alert("Bem vindo "+nome+" "+"de "+idade+" anos");
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "));*/
