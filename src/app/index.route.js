(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'user'
      })
      .state('registrate', {
        url: '/registrate',
        templateUrl: 'app/components/registrate/registrate.html',
        controller: 'RegistrateController',
        controllerAs: 'reg'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html'
      })
      .state('projects', {
        url: '/',
        views: { 
          "": { templateUrl: 'app/components/projects/projects.html' },
          "projectList@projects": { templateUrl: 'app/components/projects/projectlist.html' },
          "userData@projects": { templateUrl: 'app/components/projects/userdata.html' }
        }
      })
      .state('projectsItem', {
        url: "/project/:projectId",
        templateUrl: 'app/components/projects/project_item.html'
      })
      .state('projectsItem.inner', {
        url: "/more",
        template: '<p>Tasks place</p>'
      })
      .state('directives', {
        url: "/dirs",
        templateUrl: 'app/components/directives/directives.html'
      })
      .state('slider', {
        url: "/slider",
        templateUrl: 'app/components/slider/slider.html'
      })
      .state("otherwise", {
        url: "*path",
        templateUrl: "app/main/error.html"
      });

    //$urlRouterProvider.otherwise('/login');
  }

})();
