angular
	.module('app')
	.controller('Controller', function($scope, Produtos){
		$scope.nomes = Produtos.nomes;
		$scope.teste = function() {
			Produtos.teste();
		}
	})