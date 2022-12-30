function is0dd(num){
    if(num%2==0){
      return true;
    }
    else{
      return false;
    }
  }
  let limit=50
  for(i=1;i<=limit;i++){
    let x = is0dd(i);
    if(x==true){
      console.log(i)
    }
  }