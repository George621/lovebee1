
app.controller("yudingCtrl",["$scope","$http",function($scope,$http){
	
	$http.get("http://h5.yztctech.net/api/axf/apiyuding.php").success(function(data){
		
//		
		$scope.product=data.product;
//		console.log(data.product.img);
	})
}])