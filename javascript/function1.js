/*let add=function(a,b){
	return a+b;
	}
let xyz=add;
console.log(add(2,5));
console.log(xyz(5,10));
let sum=new Function("x","y","return x+y");
	console.log(sum(10,10));

console.log(add(2,3));
function add(a,b){
	return a+b;
}
//console.log(sum(2,2,2));
let sum=function(a,b,c){
	return a+b+c;
}
console.log(sum(2,2,2));

let add=function(){
	let result=0;
	for(i=0;i<arguments.length;i++){
		result=result+arguments[i];
	}
//	return result;
//	return arguments[1]+arguments[1];
//	return arguments.length  // length 2:
}
console.log(add(20,30));
console.log(add(2,5,7,11));
*/
const add=function(a,b){
	return a+b;
}
add=function (a,b){
	return a+b+10;
}
console.log(add(2,5));
