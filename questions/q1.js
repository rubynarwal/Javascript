let users = [
    { firstName: "RUBY", lastName: "Narwal", place: "Banglore" },
    { firstName: "Akshma", lastName: "Grewal", place: "Banglore" },
    { firstName: "Ritu", lastName: "Goyal", place: "Kolkata" },
  ];
  let arr=[];
  users.map(function(el){
    arr.push(el.firstName+""+el.lastName)
  })
  console.log(arr);