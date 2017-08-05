export class CarController {
  constructor (CarService, $state, toastr) {
    'ngInject';

    this._CarService = CarService;
    this._$state = $state
    this.form = {};
    this.toastr = toastr;
  }

  save() {
    this._CarService.save(this.form).then(() => {
      this.toastr.success('Carro cadastrado com sucesso');
      this._$state.go('home');
    });
  }
}
