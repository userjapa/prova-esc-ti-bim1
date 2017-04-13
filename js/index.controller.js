angular
	.module('app')
	.controller('Controller', function ($scope, Produtos) {

		$scope.nomes = Produtos.nomes;
		$scope.teste = function() {
			Produtos.teste();
		}

		$scope.teste2 = function() {
			Produtos.teste();
		}

		$scope.edit = {};

		$scope.edita = function(produto) {
			$scope.edit = produto;
		}

		$scope.editar = function(produto, x) {
			Produtos.editar(produto, x);
		}

	})