/// AIzaSyC6Z8JHPteLzsIdfOtC6pKhA7U3PhPGMOI google maps key

var petSitting = angular.module('petSitting', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

petSitting.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'CarouselCtrl'
  }).
    when('/animals-list', {
      templateUrl: 'partials/animal-list.html',
      controller: 'animalscntrl'
    }).when('/animals-map', {
      templateUrl: 'partials/maps.html',
      controller: 'mapcntrl'
    }).
  otherwise({
    redirectTo: '/home'
  });
}]);
petSitting.run(function ($rootScope) {
  $rootScope.animalList = [
    {
      name: 'Myrzik',
      photo: 'http://www.dogcat.com.ua/files/pic/c43075d98375f68.jpg',
      lat: 50.68,
      lng: 30.33,
      dateAdd: '01.06.2016',
      imgGallery: ['http://www.dogcat.com.ua/files/pic/5ee24533e070a1c.jpg', 'http://www.dogcat.com.ua/files/pic/1d3c763a41bcbe9.jpg'],
      age: '05.2016',
      comments: [
        {
          name: 'name1',
          email: '',
          message: 'Some comments Some comments Some comments',
          date: '10.09.2016'
        }, {
          name: 'lusi',
          email: '',
          message: 'Some comments Some comments Some comments',
          date: '10.09.2016'
        }, {
          name: 'lusi',
          email: '',
          message: 'Some comments Some comments Some comments',
          date: '10.09.2016'
        }]
    },
     {
       name: 'Vaska',
       photo: 'http://www.dogcat.com.ua/files/pic/74382c829559ed4.jpg',
       lat: 50.93,
       lng: 30.95,
       dateAdd: '01.07.2016',
       imgGallery: ['http://www.dogcat.com.ua/files/pic/3c311827b75c1e4.jpg', 'http://www.dogcat.com.ua/files/pic/87d600a79fd2377.jpg'],
       age: '2015',
       comments: [
         {
           name: 'name2',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }]
     }, {
       name: 'Myrzik',
       photo: 'http://www.dogcat.com.ua/files/pic/c43075d98375f68.jpg',
       lat: 50.18,
       lng: 30.13,
       dateAdd: '01.07.2016',
       imgGallery: ['http://www.dogcat.com.ua/files/pic/5ee24533e070a1c.jpg', 'http://www.dogcat.com.ua/files/pic/1d3c763a41bcbe9.jpg'],
       age: '05.2016',
       comments: [
         {
           name: 'name1',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }]
     },
     {
       name: 'Vaska',
       photo: 'http://www.dogcat.com.ua/files/pic/74382c829559ed4.jpg',
       lat: 50.23,
       lng: 30.25,
       dateAdd: '01.08.2016',
       imgGallery: ['http://www.dogcat.com.ua/files/pic/3c311827b75c1e4.jpg', 'http://www.dogcat.com.ua/files/pic/87d600a79fd2377.jpg'],
       age: '2015',
       comments: [
         {
           name: 'name2',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }]
     }, {
       name: 'Myrzik',
       photo: 'http://www.dogcat.com.ua/files/pic/c43075d98375f68.jpg',
       lat: 50.58,
       lng: 30.33,
       dateAdd: '01.09.2016',
       imgGallery: ['http://www.dogcat.com.ua/files/pic/5ee24533e070a1c.jpg', 'http://www.dogcat.com.ua/files/pic/1d3c763a41bcbe9.jpg'],
       age: '05.2016',
       comments: [
         {
           name: 'name1',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }]
     },
     {
       name: 'Vaska',
       photo: 'http://www.dogcat.com.ua/files/pic/74382c829559ed4.jpg',
       lat: 50.33,
       lng: 30.65,
       dateAdd: '01.07.2016',
       imgGallery: ['http://www.dogcat.com.ua/files/pic/3c311827b75c1e4.jpg', 'http://www.dogcat.com.ua/files/pic/87d600a79fd2377.jpg'],
       age: '2015',
       comments: [
         {
           name: 'name2',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.03.2016'
         }, {
           name: 'lusi',
           email: '',
           message: 'Some comments Some comments Some comments',
           date: '10.09.2016'
         }]
     }
  ];
  // $rootScope.init = function () { };
})
require('./controllers/aboutCntr')(petSitting);
require('./controllers/animalsCntr')(petSitting);
require('./controllers/mapCntr')(petSitting);
