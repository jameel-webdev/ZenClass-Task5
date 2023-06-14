//H. ROTATE AN ARRAY BY K TIMES
//Anonymous Function
var RotateArray = function(a, k) {
  for (let i = 0; i < k; i++) {
      a.unshift(a.pop());     
  }
 return a;
}
console.log(RotateArray([1,3,5,7,9],1));

//IIFE Function
(function(a, k) {
  for (let i = 0; i < k; i++) {
      a.unshift(a.pop());     
  }
 console.log (a);
})([1,3,5,7,9],1);