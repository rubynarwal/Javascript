function avg(arr){
    let sum=0
    let count =0
    if(arr.length==0){
      return0
      
    }
    for( i=0;i<arr.length;i++){
      sum=sum+arr[i];
      count++
    }
    return sum/count
  }
  let array=[1,2,3,4,5,6,7,8,9,10]
  let x=avg(array)
  console.log(x)