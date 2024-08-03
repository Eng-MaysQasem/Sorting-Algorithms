function bubble(arr){
let n=arr.length;
for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            //swap
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
return arr;
}
let array=[5,3,4,2,1];
bubble(array);
console.log(bubble(array));
//we use it for small data O(n^2)