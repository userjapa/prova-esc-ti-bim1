angular
       .module('app')
       .factory ('Produtos', function(){
       	var Produtos ={
       		nomes: ["jonas", "joana", "tereza"],
       		idade: 14
       	}

       	return Produtos;

       	Function teste(){
       		console.log("teste")
       	}

       })