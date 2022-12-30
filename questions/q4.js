function checkIsPrime(num){
    let factors=0
    for (let i=1;i<=num;i++){
      if(num%i==0){
        factors++;
      }
    }
    if(factors==2){
      return true;
    } else {
      return false;
    }
  }
  let x=checkIsPrime(15);
  
  if(x==true){
    console.log("Prime");
  } else {
    console.log("Not prime");
  }
  
  