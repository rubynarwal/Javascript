let party=["ruby", "akshma", "nikita", "monu", "mohan"];

let new_list=[];

//forget about objects.
for (let i=0;i<party.length;i++){
  let present=false;
  let person=party[i];
  for (let j=0;j<new_list.length;j++){
    if(person==new_list[j]){
      present=true;
      break;
    }
  }
  if(present==false){
    new_list.push(person);
  }
}
console.log(new_list)


