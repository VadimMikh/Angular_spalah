(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('SliderController', sliderCntrl);

        function sliderCntrl ($scope) {

            $scope.activeItem = 0;

            $scope.slides = [
                'assets/images/pic1.jpg',
                'assets/images/pic2.jpg',
                'assets/images/pic3.jpg',
                'assets/images/pic4.jpg',
                'assets/images/pic5.jpg',
                'assets/images/pic6.jpg',
                'assets/images/pic7.jpg',
                'assets/images/pic8.jpg',
                'assets/images/pic9.jpg',
                'assets/images/pic10.jpg'
            ];

           $scope.changeSlide = function(current) {
               
               if (angular.isNumber(current)) {
                    $scope.activeItem = current;
               } else if (current === 'prev') {
                    if ($scope.activeItem < 1) $scope.activeItem = $scope.slides.length-1;
                    else  $scope.activeItem -= 1;
                   
               } else if (current === 'next') {
                   if ($scope.activeItem >= $scope.slides.length-1) $scope.activeItem = 0;
                   else $scope.activeItem += 1;
               } 
            };
        }
})();
