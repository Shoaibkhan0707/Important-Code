let sum=function(a,b){
	return a+b;
}
let add=function(a,b,c){
	let x=c(a,b);
	return x;
	}
console.log(add(add(10,20,sum),30,sum));
