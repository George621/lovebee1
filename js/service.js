
app.value('goods',{
	
});

app.factory('cart',function(){
	var obj = {
		
	}
	// 对象，用于保存购物车的数据
	obj.data = {
//		'热销榜1': {},
//		'热销榜2': {},
//		'牛奶面包1': 
	};
		console.log(obj.data);
	obj.status = false;
	
	// 函数，用于添加购物车的数量
	obj.addCart = function(id,item){
		if(obj.data[id]){
//			obj.data[id].num ++;
		}else{
			obj.data[id] = item;
			obj.data[id].selec=true;
		}
		obj.empty();
	}
	
	// 函数，用于删除购物车
	obj.dele = function(id,item){
		delete obj.data[id];
	}
	obj.empty = function(){
		var num = 0;
		for(var i in obj.data){
			num++;
		}
		obj.status = num>0?true:false;
	}
	
	return obj;
});