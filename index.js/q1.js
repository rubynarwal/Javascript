function replace(string){
    let bag = "";
    for(i=0;i<string.length;i++){
      if(string[i]=" " ){
        bag=bag+"-"
      } else {
       
        bag =bag+string[i];
      }
    }console.log(bag);
  }replace("How are you all");