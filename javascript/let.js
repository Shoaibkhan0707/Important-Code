let myfun=function(){
//	const x=80;
	x=50;
	console.log(x); //error pehle x declare krenge phir print krenge:
//	let x=10;
	if(true){
	//	let y=30;
		let y=30;
//		const y=50;
		
	}
	console.log(x); 
//	console.log(y); // y body ke andar he declare krenge body bahar declare krenge toh erroe aayega :
}
myfun();
//console.log(x); // x function se bahar hai isliye error aa rha hai :
console.log(
	function(){
		return "my function";
	});
