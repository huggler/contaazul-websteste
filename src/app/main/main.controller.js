export class MainController {
  constructor (toastr, CarService) {
    'ngInject';

    this._CarService = CarService;
    this.itemsByPage = 5;
    this.rowCollection = []; 
    this.toastr = toastr;

    this.getCars();
  }

  getCars(){
    this.rowCollection = this._CarService.getCars();
  }

  checkAll(collection, checked) {
    collection.forEach(item => {
      item.selected = checked;
    });
  }

}
