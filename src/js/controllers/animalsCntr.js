//simple data list
module.exports = function (module) {
  module.controller('animalscntrl', function ($scope, $rootScope) {
    $scope.selected = {};
    $rootScope.selectedElem = null;
    $scope.showInfo = function (obj) {
      $scope.selected = obj;
      $("#myModal").modal();
    }
    $scope.sortByOldDate = function () {
      $rootScope.animalList.sort(function (a, b) {
        var keyA = new Date(a.dateAdd),
            keyB = new Date(b.dateAdd);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      //   console.log($rootScope.animalList);
    }
    $scope.sortByNewDate = function () {
      var ln = $rootScope.animalList.length;
      for (var i = 0; i < ln - 1; i++) {
        for (var j = 0; j < ln - 1 - i; j++) {
          var a = new Date($rootScope.animalList[j + 1].dateAdd);
          var b = new Date($rootScope.animalList[j].dateAdd);
          if (a > b) {
            var max = $rootScope.animalList[j + 1];
            $rootScope.animalList[j + 1] = $rootScope.animalList[j];
            $rootScope.animalList[j] = max;

          }
        }
      }
      //  $rootScope.animalList = tmpArr;
      //  console.log(tmpArr);
    };
    $rootScope.showOnMap = function (elem) {
      $rootScope.selectedElem = elem;
      $("#myModal").hide();
      $('.modal-backdrop').hide();
    }
    //form
    $scope.name = '';
    $scope.email = '';
    $scope.message = '';
    $scope.sendData = function () {
      if ($scope.name !== '' && $scope.email !== '' && $scope.message !== '') {
        var dataComment = dateRewrite();
        var newElem = {}
        newElem.name = $scope.name;
        newElem.date = dataComment;
        newElem.message = $scope.message;

        function dateRewrite() {
          var data = new Date();
          var dd = data.getDate();
          var mm = data.getMonth();
          var yy = data.getFullYear();
          setData();
          setMonth();
          function setData(dd) {
            if (dd < 10) {
              dd = '0' + dd;
            }
          }
          function setMonth() {
            mm++;
            if (mm < 10) {
              mm = '0' + mm;
            }
          }
          return dd + '.' + mm + '.' + yy;
        }
        $scope.selected.comments.push(newElem);
        $scope.name = '';
        $scope.email = '';
        $scope.message = '';
      }
    }
  });
 
}
