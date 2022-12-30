function input(){
    let a ="ruby"
    let lower="abcdefghijklmnopqrstuvwxyz"
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let bag="";
    for(let i=0;i<a.length;i++){
      y=a[i]
      for(letj=0;j<upper.length;j++){
        if(upper[j]===y){
          y==lower[j];
          bag=bag+lower+lower[j];
        }
        else{
          continue;
        }
      }
    }
    return bag;
  }
  function input(){
    let b="ruby"
    let lower="abcdefghijklmnopqrstuvwxyz"
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let bag1="";
    for(let i=0;i<b.length;i++){
      y=b[i]
      for(let j=0;j<upper.length;j++){
       if(lower[j]===y){
         y==upper[j];
         bag1=bag1+upper[j]
       }
        else{
          continue;
        }
      }
    }
  return bag1;
  }
  function joinBag(){
    let bag=input();
    let bag1=input()
    console.log((""+bag+bag1))
  }
  joinBag();
  
  
  
  
  
  
  
  
  
  
  
        
      
    
  