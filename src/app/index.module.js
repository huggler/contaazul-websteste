import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('contaazul', [
	'ui.router',
	'ui.bootstrap',
	'toastr',
	'smart-table',
	'ui.utils.masks'
	])
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController)
  .controller('CarController', CarController)
  .service('CarService', CarService)
  .directive('navbar', NavbarDirective);
