angular
	.module('app')
	.factory('Produtos', function(){
		var Produtos = {
			nomes : ["Jonas", "Maria", "Joana"],
			idade : 14,
			teste : teste
		}
		return Produtos;

		function teste(){
			console.log("teste");
		}
	})