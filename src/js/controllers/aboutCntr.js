module.exports = function (module) {
  module.controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
        {
          image: './img/slide-1.png'
        },
        {
          image: './img/slide-2.png'
        },
        {
          image: './img/slide-3.png'
        },
        {
          image: './img/slide-4.png'
        },
        {
          image: './img/slide-5.png'
        },
        {
          image: './img/slide-6.png'
        },
        {
          image: './img/slide-7.png'
        }
    ];
    //$scope.prev = function () {

    //  alert('ggg');}
    $scope.$watch(function () {
      for (var i = 0; i < $scope.slides.length; i++) {
        if ($scope.slides[i].active) {
          return $scope.slides[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
   //     console.log('currentSlide:', currentSlide);
      }
    });
   
  })
}
