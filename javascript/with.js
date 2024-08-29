obj={"info":{"name":"mohit","age":"25","colleage":"integral"}};
console.log(obj.info.name);
console.log(obj.info.age);
with(obj.info){
	console.log(name);
	console.log(age);
	console.log(colleage);
}
