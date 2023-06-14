// //E. RETURN ALL THE PALINDROMES IN AN ARRAY

//                       //Anonnymous Function
// var temp=[];
// var Palindrom = function pal(arr){
//   for(var i=0; i<arr.length; i++){
//     var original = arr[i]
//     var reversed = arr[i].toString().split("").reverse().join("");
//       if(original == reversed){
//       temp.push(arr[i]);
//     }
//   }return temp;
// }
// console.log(Palindrom([1234,10101,10,808,2442]));
// //Arrow Function
// var temp=[];
// var Palindrom = pal(arr) = > {
//   for(var i=0; i<arr.length; i++){
//     var original = arr[i]
//     var reversed = arr[i].toString().split("").reverse().join("");
//       if(original == reversed){
//       temp.push(arr[i]);
//     }
//   }return temp;
// }
// console.log(Palindrom([1234,10101,10,808,2442]));
//                          //IIFE Function
// (function pal(arr){
//   var temp=[];
//   for(var i=0; i<arr.length; i++){
//     var original = arr[i]
//     var reversed = arr[i].toString().split("").reverse().join("");
//       if(original == reversed){
//       temp.push(arr[i]);
//     }
//   }console.log(temp);
// })([111,101,10,24242]);