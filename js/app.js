var app=angular.module('app',["ngRoute"]); 

app.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/home",{
//		template:"这是首页",
		templateUrl:'./home/home.html',
		controller:"homeCtrl"
	})
	.when("/cart",{ 
//		template:"这是购物车",
		templateUrl:'./cart/cart.html'
	})
	.when("/spcar",{
		templateUrl:'./spcar/spcar.html',
		controller:"spcarCtrl"
	})
	.when("/yuding",{
		templateUrl:'./yuding/yuding.html',
		controller:"yudingCtrl"
	})
	.otherwise("./home")
}])