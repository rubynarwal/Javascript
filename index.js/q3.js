let party=["RUBY", "rohit", "Aarti", "sakshm", "ruhan"];

let diary={};

for (let i=0;i<party.length;i++){
  let person=party[i];
  diary[person]=1;
}
console.log(diary);