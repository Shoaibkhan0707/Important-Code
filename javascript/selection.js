function selection(ar){
	let minindex;
	for(let i=0;i<ar.length;i++){
		minindex=i;
	for(let j=i+1;j<ar.length;j++){
		if(ar[j]<ar[minindex]){
			minindex=j;
			}
		}
		let temp=ar[minindex];
	   	ar[minindex]=ar[i];
	   	ar[i]=temp;
	}
}
let arr=[8,7,5,4,2,1,3];
	selection(arr);
	for(let i=0;i<arr.length;i++){
		console.log(arr[i])
}
