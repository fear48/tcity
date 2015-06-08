angular.module('starter.controllers', [])
        
.controller('AppCtrl', function($scope, $ionicModal, $cordovaOauth, $location, $localStorage) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
 
  // Open the login modal
  $scope.login = function() {
     $cordovaOauth.vkontakte('4946013', ['offline', 'wall', 'status', 'messages']).then(function(res){
      console.log("Response obj > " + JSON.stringify(res));
      $localStorage.token = res.access_token;
      $location.path('/profile');
    }, function(error){
      console.log("Error > " + error);
    });
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('WallCtrl', ['$scope', '$http', function($scope, $http){
  $scope.hello = "HELLO_EPTA";
  var its;
  $scope.call = function(){
    $http.get('https://api.vk.com/method/wall.get?owner_id=-34882023&count=10&v=5.28')
      .success(function(data){
        its = data.response.items;
        $scope.items = its;
        console.log($scope.items);
      })
      .error(function(e){
        console.log(e);
      });
  };
  $scope.call();
}])

.controller('profileCtrl', ['$scope', function($scope, $http, $localStorage, $location){
  if($localStorage.hasOwnProperty('token') == true){
    $http.get('https://api.vk.com/method/messages.get?count=5&v=5.34&access_token='+ $localStorage.token).success(function(res){
      $scope.messages = res.response;
    }).error(function(e){
      console.log(e);
    });
  } else{
    alert("isn't auth");
    $location.path('/wall');
  }
}])

.controller('AfishaCtrl', ['$scope', function(){

}])
.controller('InstaCtrl', ['$scope', function(){

}])
.controller('VacCtrl', ['$scope', function(){

}])