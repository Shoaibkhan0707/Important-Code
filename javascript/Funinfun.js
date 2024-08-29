let check=function(amount){
	let x=10;
	let inner=function(){
		var a=20;
		console.log(x*amount);
	};
	console.log(amount);
//	console.log(a);
	inner();
	};
check(15);
