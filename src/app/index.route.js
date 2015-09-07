function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('saves', {
      url: '/saves',
      templateUrl: 'app/saves/saves.html',
      controller: 'SavesController',
      controllerAs: 'saves'
    })
    .state('ancients', {
      url: '/ancients',
      templateUrl: 'app/ancients/ancients.html',
      controller: 'ancientsController',
      controllerAs: 'ancients'
    })
    .state('gilding', {
      url: '/gilding',
      templateUrl: 'app/gilding/gilding.html',
      controller: 'gildingController',
      controllerAs: 'gilding'
    });

  $urlRouterProvider.otherwise('/saves');
}

export default routerConfig;
