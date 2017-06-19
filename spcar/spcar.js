app.controller("spcarCtrl",['$scope','cart',function($scope,cart){
	
	$scope.status = cart.status;
	$scope.list = cart.data;
	$scope.priceAll = 0;
	$scope.selectBtn = true;
	
	$scope.compute = function(item,num,key){
		item.num += num;
		count();
		if(item.num<=0){
			delete cart.data[key];
		}
	}
	
	
	$scope.selectAll = function(){
		// $scope.selectBtn
		for(var o in cart.data){
			cart.data[o].selec = $scope.selectBtn;
		}
		count();
	}

	$scope.selectFns=function(){
		var status = true;
		for(var o in cart.data){
			if(!cart.data[o].selec){
				status = false;
			}
		}
		$scope.selectBtn = status;
		count();

	}
	count();
    function count(){
		var num=0;
		for(var o in cart.data){
			if(cart.data[o].selec){
				num += cart.data[o].num * (cart.data[o].price*100);
			}
		}
		$scope.priceAll = num/100;

	}
	
	
	
	

}]);


//
//app.controller('cartCtrl',['$scope','cart',function($scope,cart){
//	$scope.status = cart.status;
//	$scope.list = cart.data;
//	
//	$scope.selectBtn = true;
//	$scope.selectAll = function(){
//		// $scope.selectBtn
//		for(var o in cart.data){
//			cart.data[o].selec = $scope.selectBtn;
//		}
//	}
//}])