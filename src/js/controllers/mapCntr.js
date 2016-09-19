module.exports = function (module) {
  module.controller('mapcntrl', function ($window, $scope, $rootScope) {
    $rootScope.isInit = false;
    $rootScope.map;
    $rootScope.markers = [];
    $rootScope.marker;
    //start init when $scope is load
    $scope.$on('$viewContentLoaded', function () {
      $rootScope.initialize();

    });

  //init map
    $rootScope.initialize = function () {
      if ($rootScope.isInit === false) {
        $rootScope.isInit = true;
     
        $rootScope.options = {
          center: new google.maps.LatLng(50.27, 30.31),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        if ($rootScope.selectedElem !== undefined && $rootScope.selectedElem !== null) {
          $rootScope.options = {
            center: new google.maps.LatLng($rootScope.selectedElem.lat, $rootScope.selectedElem.lng),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        }
        $rootScope.map = new google.maps.Map(document.getElementById("map"), $rootScope.options);
      }
      $rootScope.addMarkers = function (obj) {
        var ln = obj.length;
        for (var i = 0; i < ln; i++) {
          $rootScope.marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj[i].lat, obj[i].lng),
            map: $rootScope.map,
            title: obj[i].name
          });
          var infowindow = new google.maps.InfoWindow({
            content: '<div class="text-center"><img class="small-img" src=' + obj[i].photo + '><p><a href="#/animals-list">' + obj[i].name + '</a></p></div>'
          });
          makeInfoWindowEvent($rootScope.map, infowindow, $rootScope.marker);
          $rootScope.markers.push($rootScope.marker);
          if ($rootScope.selectedElem !== undefined && $rootScope.selectedElem !== null) {
            if ($rootScope.selectedElem.lat == obj[i].lat && $rootScope.selectedElem.lng == obj[i].lng) {
             // console.log($rootScope.selectedElem);
              infowindow.open($rootScope.map, $rootScope.marker);
            }
          }
        }
      }
      $rootScope.addMarkers($rootScope.animalList);
      function makeInfoWindowEvent(map, infowindow, marker) {
        //add event click on marker
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    }
    google.maps.event.addDomListener($window, 'load', $rootScope.initialize);
    // console.log(rootScope.animalList);
  })
}