

app.controller('carCtrl',['$scope','$http','goods','cart',function($scope,$http,goods,cart){
	$scope.list = ['热销榜','天天特价','牛奶面包','优选水果','热销榜','天天特价','牛奶面包','优选水果','热销榜','天天特价','牛奶面包','优选水果','热销榜','天天特价','牛奶面包','优选水果']
	$scope.data=null;
	$scope.num = 0;
	$scope.text='热销榜';
	$scope.goods=goods;
console.log($scope.goods);
	function request(text){
//		text = text || '热销榜';
		if(!$scope.goods[text]){
		
		$http.get('http://h5.yztctech.net/api/axf/apicategory.php?category='+text)
		.success(function(shuju){
				$scope.goods[$scope.text] = shuju.data;
//			$scope.shuju=shuju.data;
		})
		}
	}
	request();
	$scope.getData = function(text,index){
		$scope.num = index;
		$scope.text=text;
		request(text);
	}
	
	
	$scope.compute = function(s,num){
		if(s.num){
			s.num += num; 
		}else{
			s.num = 1;
		}
	if(s.num>0){
		cart.addCart($scope.text+s.id,s);
	}else{
		cart.deleCart($scope.text+s.id,s);
	}
	
	
	
	}
	
	
	
	
}])


