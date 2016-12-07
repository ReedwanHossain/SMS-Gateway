// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
     

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
})
.controller('MainController', function($scope, $http, $interval, $cordovaSms, SocketService
  ) {
   
      var msg = {
         'text': "Connected"
      };

      $scope.setIP = function() {
          
            SocketService.connet_to_socket($scope.ip).on('news', function (data) {
         console.log('Hello');
    console.log(data.first)

      $cordovaSms
            .send(data.number, data.first, options)
              .then(function() {
                console.log('Success');
              }, function(error) {
                console.log(error);
              });
    SocketService.connet_to_socket($scope.ip).emit('my other event', msg);
     });
    
      };
      
      // SocketService.emit('send:message', msg);
      // console.log(msg);
        var options = {
        replaceLineBreaks: false,
        android: {
            intent: ''
        }
    }

    //    SocketService.connet_to_socket($scope.ip).on('news', function (data) {
    //      console.log('Hello');
    // console.log(data.first)

    //   $cordovaSms
    //         .send(data.number, data.first, options)
    //           .then(function() {
    //             console.log('Success');
    //           }, function(error) {
    //             console.log(error);
    //           });
    // SocketService.connet_to_socket.emit('my other event', msg);
    //  });
    
    
     function callAtInterval(){
      $http.get(basepath)
        .success(function(data) {
          $cordovaSms
            .send(data.number, data.first, options)
              .then(function() {
                console.log('Success');
              }, function(error) {
                console.log(error);
              });

            })
            .error(function(err) {
                console.log('Not working');
            });
    }
});