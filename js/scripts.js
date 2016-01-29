
// jquery
$(document).ready(function(){

	$('.close').click(function() {
		console.log("close");
		$('.window').fadeOut('slow');
		$(".hexa_grid li").css("opacity", 1);
		
	});

	$('.audio').click(function() {
		$(this).children().css('margin-top', '-80px');
	});
	$('.toggle').click(function(e) {
	  	e.preventDefault();
	    var $this = $(this);
	    if ($this.next().hasClass('show')) {
	        $this.next().removeClass('show');
	        $this.children().removeClass('selected');
	        $this.next().slideUp(350);
	    } else {
	        $this.parent().parent().find('li .inner').removeClass('show');
	        $this.parent().parent().find('li .inner').slideUp(350);
	        $this.next().toggleClass('show');
	        $this.next().slideToggle(350);
	        $this.children().addClass('selected');
	    }
	});
	// accordion referencias

	$('ul.accordion li li .inner').hide();
	var hash = window.location.hash;
	console.log(hash + ' hola');

		if (hash!==null) {
			console.log('no');
			$('ul.accordion '+hash).children().show();
			$("html, body").animate({scrollTop:$(hash).offset().top},500);
		} else {
			console.log('si');
			$('ul.accordion li li .inner:first-child').show();
		};
	
	new WOW().init();

	$('.various').fancybox({
		width		: '80%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'easeIn',
		closeEffect	: 'none',
		mouseWheel	: 'false'
	});
	//fullpage fichas

	 $('#fullpage').fullpage({
	 	anchors: ['Titulo', 'Contexto', 'Mapa','Fichas_relacionadas'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Título', 'Contexto', 'Mapa', 'Fichas relacionadas']
		//scrollBar: true
	});
});

var app = angular.module('app', ['ngRoute', 'ngSanitize', 'slick']);

//Config the route
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/demo', {
		templateUrl: myLocalized.partials + 'demo.html',
		controller: 'main'
	})
	.when('/blog/:ID', {
		templateUrl: myLocalized.partials + 'content.html',
		controller: 'Content'
	})
	.when('/category/:category/', {
		templateUrl: myLocalized.partials + 'content.html',
		controller: 'Category'
	})
	.when('/2015', {
		templateUrl: myLocalized.partials + 'year.html',
		controller: '2015'
	})
	.when('/category/:category/page/:page', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Category'
	})
	.when('/page/:page', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Paged'
	})
	.otherwise({
		templateUrl: myLocalized.partials + '404.html',
		controller: '404'
	});
}]);

//Main controller
app.controller('Main', ['$scope', 'WPService', function($scope, WPService) {
	WPService.getAllCategories();
	WPService.getPosts(1);
	$scope.data = WPService;
	console.log(myLocalized.partials)
}]);

//Content controller
app.controller('Content', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('wp-json/posts/' + $routeParams.ID).success(function(res){
		$scope.post = res;
		document.querySelector('title').innerHTML = res.title + ' | Reporte de estado y tendencias de la biodiversidad continental de Colombia';
	}).error(function(res, status){
		if (status === 404) {
			$scope.is404 = true;
			document.querySelector('title').innerHTML = 'Page not found | Reporte de estado y tendencias de la biodiversidad continental de Colombia';
			$scope.errorMessage = 'Error: ' + res[0].message;
		}
	});

	$http.get('wp-json/media?filter[post_parent]=' + $routeParams.ID + '&filter[posts_per_page]=-1').success(function(res){
		if ( res.length > 1 ) {
			$scope.media = res;
		}
	});
}]);

//2015 controller
app.controller('2015', ['$scope', '$routeParams', '$http', 'WPService', function($scope, $routeParams, $http, WPService) {
	WPService.getAllCategories();
	$http.get('wp-json/taxonomies/category/terms/?filter[parent.name]=2015').success(function(res){
		if (!res.length) {
			document.querySelector('title').innerHTML = 'Category not found | Reporte de estado y tendencias de la biodiversidad continental de Colombia';
			$scope.data.pageTitle = 'Category not found';
		} else {
			$scope.current_category_id = res[0].ID;
			console.log(res[0].ID)
			WPService.getPostsInCategory(res[0], $routeParams.page);
		}
	});

	$scope.data = WPService;
	$scope.fondo = 'black';
}]);

//Category controller
app.controller('Category', ['$scope', '$routeParams', '$http', 'WPService', function($scope, $routeParams, $http, WPService) {
	WPService.getAllCategories();
	$http.get('wp-json/taxonomies/category/terms/?filter[slug]=' + $routeParams.category).success(function(res){
		if (!res.length) {
			document.querySelector('title').innerHTML = 'Category not found | Reporte de estado y tendencias de la biodiversidad continental de Colombia';
			$scope.data.pageTitle = 'Category not found';
		} else {
			$scope.current_category_id = res[0].ID;
			WPService.getPostsInCategory(res[0], $routeParams.page);
		}
	});

	$scope.data = WPService;
}]);

//Paged controller
app.controller('Paged', ['$scope', '$routeParams', 'WPService', function($scope, $routeParams, WPService) {
	WPService.getAllCategories();
	WPService.getPosts($routeParams.page);
	$scope.data = WPService;
}]);

//searchForm Directive
app.directive('searchForm', function() {
	return {
		restrict: 'EA',
		template: 'Search Keyword: <input type="text" name="s" ng-model="filter.s" ng-change="search()">',
		controller: ['$scope', 'WPService', function ( $scope, WPService ) {
			$scope.filter = {
				s: ''
			};
			$scope.search = function() {
				WPService.getSearchResults($scope.filter.s);
			};
		}]
	};
});

//404 controller
app.controller('404', function() {
	document.querySelector('title').innerHTML = 'Page not found | Reporte de estado y tendencias de la biodiversidad continental de Colombia';
});

//postsNavLink Directive
app.directive('postsNavLink', function() {
	return {
		restrict: 'EA',
		templateUrl: myLocalized.partials + 'posts-nav-link.html',
		controller: ['$scope', '$element', '$routeParams', function( $scope, $element, $routeParams ){
			var currentPage = ( ! $routeParams.page ) ? 1 : parseInt( $routeParams.page ),
			linkPrefix = ( ! $routeParams.category ) ? 'page/' : 'category/' + $routeParams.category + '/page/';

			$scope.postsNavLink = {
				prevLink: linkPrefix + ( currentPage - 1 ),
				nextLink: linkPrefix + ( currentPage + 1 ),
				sep: ( ! $element.attr('sep') ) ? '|' : $element.attr('sep'),
				prevLabel: ( ! $element.attr('prev-label') ) ? 'Previous Page' : $element.attr('prev-label'),
				nextLabel: ( ! $element.attr('next-label') ) ? 'Next Page' : $element.attr('next-label')
			};
		}]
	};
});

//fade and close
app.controller("fader", function($scope, $timeout){
    $scope.hideStuff = function () {
        $scope.startFade = true;
        $timeout(function(){
            $scope.hidden = true;
        }, 700);
        
    };
});
