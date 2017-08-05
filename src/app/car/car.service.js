export class CarService {
  constructor ($http, $q) {
	'ngInject';
	
		this._$http = $http;
		this.carCollection = [{
			"combustivel" : "Flex",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Gol",
			"placa" : "FFF-5498",
			"valor" : "20000"
			},
			{
			"combustivel" : "Gasolina",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Fox",
			"placa" : "FOX-4125",
			"valor" : "20000"
			},
			{
			"combustivel" : "Alcool",
			"imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
			"marca" : "Volkswagen",
			"modelo" : "Fusca",
			"placa" : "PAI-4121",
			"valor" : "20000"
			}];
		this._$q = $q;
	}


	getCars() {
		// o certo seria consultar uma http.get(API/car)
		return this.carCollection;
	}

	save(data){

		return this._$q.resolve(this.carCollection.push(data));

		// o certo seria isso
		// return this._$http.post('API/car', data).then(res => {
		// 	return res;
		// });
	}
}