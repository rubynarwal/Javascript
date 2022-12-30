let users = [
    { firstName: "RUBY", lastName: "Dev", place: "Banglore" },
    { firstName: "Akshma", lastName: "Shukla", place: "Banglore" },
    { firstName: "Ritu", lastName: "Bhat", place: "Kolkata" },
  ];
  let arr=[];
  users.filter(function(el){
    return el.place=="Banglore"
  }).map(function(el){
    arr.push(el.firstName+""+el.lastName)
  })
  console.log(arr)