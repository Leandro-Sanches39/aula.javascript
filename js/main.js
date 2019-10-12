function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log (document.getElementById("agradecimento"));
	//alert ("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://globallabs.ventures");
}

function trocar(){
	document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value)
}
/*
function soma (n1, n2){
	return n1 + n2;
}

alert(soma(5, 12));
*/

/*
var d = new Date();
alert (d);
alert (d.getDay()); 
alert (d.getHours()); 
alert (d.getMinutes()); 
*/

/*
var count;
for (count=0; count<=5; count++){
	alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
	console.log (count);
	count = count + 1
};
*/

/*
var idade = prompt ("Qual a sua idade?");
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"abacaxi", cor:"amarelo"}]
console.log (frutas);
*/

/*
var fruta = {nome:"maçã", cor: "vermelha"}
console.log (fruta.cor)
*/



//var lista = ["maçã", "pera", "abacaxi"];
//lista.push("uva");
//lista.pop();
//console.log (lista);
//console.log (lista.toString());
//console.log (lista.join(" - "));

//var nome = "Leandro Sanches";
//var idade = 39;
//var idade2 = 11;
//var frase = "Japão é o melhor time do mundo"
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log (nome);
//console.log (idade + idade2);
//console.log (frase.toLowerCase());
//console.log (frase.toUpperCase());
//alert (frase.replace("Japão", "Brasil"));