
app.controller('homeCtrl',["$scope","$http",function($scope,$http){
	$scope.data=null;
	$http.get("http://h5.yztctech.net/api/axf/apihome.php").success(function(data){
		console.log(data);
		$scope.data=data.data;
	})
	
	$http.get("http://h5.yztctech.net/api/axf/apihomehot.php").success(function(req){
		console.log(req);
		$scope.req=req.data;
		console.log(req.data);
	})
	
}])
