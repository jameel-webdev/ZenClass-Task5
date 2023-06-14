//G. REMOVE DUPLICATES FROM AN ARRAY

//Anonymous Function
var Duplicates = function dups(arr) {
var temp = [];
  for(var i=0; i < arr.length; i++){ 
    if(temp.indexOf(arr[i]) === -1) { 
    temp.push(arr[i]); 
    } 
  }return temp;
}
console.log(Duplicates([1,2,3,4,2,3,5,8,1]));

//IIFE FUNCTION
(function dups(arr){
var temp = [];
  for(var i=0; i < arr.length; i++){ 
    if(temp.indexOf(arr[i]) === -1) { 
    temp.push(arr[i]); 
    } 
  }console.log(temp);
})([1,2,3,4,2,3,5,8,1]);