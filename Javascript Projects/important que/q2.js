let arr=["assignment", "Adventure", "Army", "upload"];
let arr1=[];
let resm=arr.filter(function(el){
  return(el[0]=="a"||el[el.length-1]=="a")
})
console.log(resm)