
app.controller('homeCtrl',["$scope","$http","$timeout",function($scope,$http,$timeout){
	$scope.data=null;
	$http.get("http://h5.yztctech.net/api/axf/apihome.php").success(function(data){
		console.log(data);
		$scope.data=data.data;
	})
	
	$http.get("http://h5.yztctech.net/api/axf/apihomehot.php").success(function(req){
//		console.log(req);
		$scope.req=req.data;
//		console.log(req.data);
		$timeout(function(){
			var swiper=new Swiper('.swiper-container',{
				pagination:'.swiper-pagination',
				spaceBetween:30,
				centeredSlides:true,
				autoplay:2500,
				loop:true
			});
		},100)
		
		
	})
	
	
	
	
	
}])


