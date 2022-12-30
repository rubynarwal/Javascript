let arr=["ruby", "Adventure", "Army", "Pic"];
let arra=[];
let result=arr.filter(function(el){
  return(el[0]=="a"||el[el.length-1]=="a")
})
console.log(result)