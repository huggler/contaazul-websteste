export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('newcar', {
      url: '/newcar',
      templateUrl: 'app/car/car.html',
      controller: 'CarController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  }).hashPrefix('!');
}
