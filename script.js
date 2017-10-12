'use strict';

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http, $sce) {


	$scope.openDetail = function(x){
		$scope.clickCar = true;
		document.getElementById("columChange").classList.remove('col-sm-12');
		document.getElementById("columChange").classList.add('col-sm-6');

		try{
				$scope.detailText = x.descricao;
		}catch(err) {
			$scope.detailText = "sem descrição =(";
		}
		try{
			$scope.marcaDescricao = x.marca;
			$scope.veiculoDescricao = x.veiculo;
			$scope.anoDescricao = x.ano;
		}catch(err){}
	}



		$http({
    	method : "GET",
        url : $sce.trustAsResourceUrl("http://consulta-veiculos.nimble.com.br/v1/veiculos/"),
    }).then(function(response) {
    	$scope.veiculos = [];
    	var i;
    	for(i=0; i<40; i++){
    			$scope.veiculos[i] = response.data[i];
    		}
    });


	$scope.busca = function(buscaVeiculo){

		$http({
	    	method : "GET",
	        url : $sce.trustAsResourceUrl("https://consulta-veiculos.nimble.com.br/v1/veiculos/?filters=veiculo@" + buscaVeiculo),
	    }).then(function(response) {
	    	$scope.veiculos = [];
	    	var i;
	    	for(i=0; i<response.data.length; i++){
	    			$scope.veiculos[i] = response.data[i];
	    		}
	    });
    }

	$scope.adicionaNovoVeiculo = function(){
		alert("Olar");
	}


$scope.adicionaVeiculo = function(){

var html

	html =  '<div class="modal" id="modalconfirma">';
	html +=	'	<div class="sombraopacity"></div>';
	html += '<div class="card-modal">';
	html += '	<h1 class="title-modal">Novo Veiculo</h1>';
	html += '	<div class="content-modal">';
	html += '		<div style="display: block;">';
	html += '			<div class="group float-left">';	
	html += '			    <input type="text" id="veiculo" required="required" ng-model="modalVeiculo"/>';
	html += '			    <label>Veículo</label>';
	html += '			    <div class="bar"></div> ';  
	html += '			</div>';
  	html += '			<div class="group float-right">';	
	html += '			    <input type="text" id="marca" required="required" ng-model="modalMarca"/>';
	html += '			    <label>Marca</label>';
	html += '			    <div class="bar"></div>';
	html += '		    </div>';
	html += '		</div>';
	html += '		<div style="display: block;">';
	html += '			<div class="group">	';
	html += '			    <input type="text" id="ano" required="required" ng-model="modalAno"/>';
	html += '			    <label>Ano</label>';
	html += '			    <div class="bar"></div>';   
	html += '			</div>';
	html += '			<div class="checkbox-style">';
	html += '			<label class="switch float-right">';
	html += '			  <input type="checkbox" ng-model="modalVendido">';
	html += '			  <span class="slider round"></span>';
	html += '			</label>';
	html += '		</div>';
	html += '				<div class="group descricao-modal">	';
	html += '				    <input type="text" id="descricaoModal" required="required" class="input-descricao" ng-model="modalDescricao"/>';
	html += '				    <label>Descrição</label>';
	html += '				    <div class="bar"></div>';   
	html += '				</div>';
	html += '		<div class="button-section">';
	html += '			<div class="btn" id="add">ADD</div>';
	html += '			<div class="btn" id="fechar">FECHAR</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';

	$('html').append(html);
	
	var size=$('body').height();  
	$("#modalconfirma").css('height',size);
	$(".sombraopacity").css('height',size+100);
	$("#modalconfirma").show();

	var topHeight = (screen.height - $(".card-modal").last().height()) / 2;
	var leftHeight = (screen.width - $(".body").last().width()) / 2;

	$(".card-modal").css("top", "100px");
	$(".card-modal").css("left", leftHeight);



	$('#add').click(function(){
		$http(
{			url: $sce.trustAsResourceUrl("http://consulta-veiculos.nimble.com.br/v1/veiculos/"),
	        method: "POST",
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	        data: {     "veiculo": $scope.modalVeiculo,
					    "marca": $scope.modalMarca,
					    "ano": $scope.modalAno,
					    "descricao": $scope.modalDescricao,
					    "vendido": false }

	}).then(function(response){
		alert("veículo cadastrado com Sucesso");
	});
	});

	$("#add, #fechar, .sombraopacity").click(function() {
	$("#modalconfirma").hide();

});


}




});