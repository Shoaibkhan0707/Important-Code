function bubble(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=1;j<ar.length-i;j++){
            if(ar[j-1]>ar[j]){
                let temp=ar[j-1];
                    ar[j-1]=ar[j];
                    ar[j]=temp;
            }
        }
    }
}
let arr=[8,7,6,2,1,3,9];
bubble(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
}
