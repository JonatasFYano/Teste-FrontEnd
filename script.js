'use strict';

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http, $sce) {
	//http é assincrono. Deve colocar no then pq ele vai colocar assim que pegar o dado

	
	$scope.car = [
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		},
		{
			"name" : "FIAT",
			"detail" : "Palio G5 SP.1.6 Flex",
			"year" : "2016"
		}
	];

	$scope.openDetail = function(){
		$scope.clickCar = true;
		$scope.detailText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("columChange").classList.remove('col-sm-12');
		document.getElementById("columChange").classList.add('col-sm-6');
	}



		$http({
    	method : "GET",
        url : "https://consulta-veiculos.nimble.com.br/v1/veiculos/?filters=veiculo@onix",
    }).then(function mySuccess(response) {
    	alert(response.data);
    });



});