// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordovaOauth', 'ngStorage', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: "profileCtrl"
      }
    },
  })

  .state('app.wall', {
    url: "/wall",
    views: {
      'menuContent': {
        templateUrl: "templates/wall.html",
        controller: 'WallCtrl'
      }
    },
  })

  .state('app.gid', {
    url: "/gid",
    views: {
      'menuContent': {
        templateUrl: "templates/gid.html"
      }
    }
  })
    .state('app.instafeed', {
      url: "/instafeed",
      views: {
        'menuContent': {
          templateUrl: "templates/instafeed.html",
          controller: 'InstaCtrl'
        }
      }
    })
    .state('app.afisha', {
      url: "/afisha",
      views: {
        'menuContent': {
          templateUrl: "templates/afisha.html",
          controller: 'AfishaCtrl'
        }
      }
    })
    .state('app.vacancy', {
      url: "/vacancy",
      views: {
        'menuContent': {
          templateUrl: "templates/vacancy.html",
          controller: 'VacCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/wall');
});
