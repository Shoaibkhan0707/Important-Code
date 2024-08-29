let queue=[]
queue.push(10,20,30);
let asc=function(a,b){
if(a>b){
	return -1;
}else if(b>a){
	return 1;
}else{
	return 0;
	}
};
queue.sort(asc);
console.log(queue);
/*console.log(queue);
queue.reverse();
console.log(queue);
queue[queue.length]=40;
queue.sort();
console.log(queue);
delete(queue[2]);
console.log(queue);
console.log(queue.length);
//console.log(queue[2]);
*/
