angular
	.module('app')
	.factory('Produtos', function() {
		var Produtos = {
			nomes: ["jonas","joana","tereza"],
			idade: [14,12,33],
			teste: teste,
			lista: [],
			edit: {}
		}
		return Produtos;

		function teste() {
			console.log("teste");
		}

		function cadastrar(produto) {
			Produtos.lista.push(produto);
		}

		function editar(produto, x) {
			Produtos.lista[x] = produto;
		}

		function remover(x) {
			Produtos.lista.splice(x,1);
		}

	})