//Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6,7] Sample Output - 243 (27+216)
let arr=[1,2,3,4,5,6,7];
let sum_of_cube=arr.filter(function(el){
  return el%3==0;
}).map(function(sum,el){
  return sum+el;
})
console.log(sum_of_cube)