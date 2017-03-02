(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('Dir1Controller', function () {
			var vm = this;
			vm.name = "2005 MAYBACH EXELERO CONCEPT";
			vm.desc = "The Maybach high-performance show car Exelero was unveiled to the world for the first time this afternoon in the Tempodrom in Berlin. The 700-hp two-seater with a V-12 biturbo engine is a unique custom model produced for Fulda Reifenwerke, which is using the Maybach Exelero as a reference vehicle for a newly developed generation of wide tyres. The German manufacturer of luxury cars built the unique model as a modern interpretation of its legendary streamlined sports car from the 1930s, thereby forging a link with the historical predecessor, which at that time was likewise based on a powerful Maybach automobile (SW 38) and used by Fulda for tyre tests.";
			vm.pic = '../assets/images/Maybach_Exelero.jpg';
			vm.link = 'https://www.supercars.net/blog/2005-maybach-exelero-concept/';
		})
		.controller('Dir2Controller', function () {
			var vm = this;
			vm.name = "2013 LAMBORGHINI VENENO";
			vm.desc = "In the year of its 50th anniversary Automobili Lamborghini is presenting an extremely exclusive model at the Geneva Motor Show 2013. Only three unique units of the Lamborghini Veneno will be built and sold. Its design is consistently focused on optimum aerodynamics and cornering stability, giving the Veneno the real dynamic experience of a racing prototype, yet it is fully homologated for the road. With a maximum output of 552 kW / 750 hp, the Veneno accelerates from 0 to 100 km/h in just 2.8 seconds and the top speed for this street-legal racing car stands at 355 km/h. It is priced at three million Euros plus tax – and all three units have already been sold to customers.";
			vm.pic = '../assets/images/Lamborghini_Veneno.jpg';
			vm.link = 'https://www.supercars.net/blog/2013-lamborghini-veneno-2/';
		})
		.controller('Dir3Controller', function () {
			var vm = this;
			vm.name = "2014 LYKAN HYPERSPORT";
			vm.desc = "The Official launch of W Motors was a major milestone for the automotive industry in the region and the world. W Motors was set to be the premier Arab Developer of High Performance Luxury Sports Cars in the region, launching on the 11th of July 2012 during a high end ceremony in the lavish venue of Sursock Palace Beirut.";
			vm.pic = '../assets/images/Lykan_HyperSport.jpg';
			vm.link = 'https://www.supercars.net/blog/2014-lykan-hypersport-2/';
		})
		.directive('film', function () {
			return {
				restrict: 'E',
				replace: true,
			vm: {
					name: '@',
					desc: '@',
					pic: '@',
					link: '@'
				},
				templateUrl: 'app/components/directives/directive_item.html'
			}
		});
})();