function insertion(ar){
        for(let i=0;i<ar.length;i++){
        let temp=ar[i];
	let j=i-1;
	while(j>=0 && temp<=ar[j]){
		ar[j+1]=ar[j];
		j=j-1;
		}
	ar[j+1]=temp;
	}
}
let arr=[8,7,5,4,2,1,3,6];
        insertion(arr);
        for(let i=0;i<arr.length;i++){
                console.log(arr[i])
}





