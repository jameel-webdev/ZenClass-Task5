//A. PRINT ODD NUMBERS IN AN ARRAY

//ANONYMOUS FUNCTION
var arr;
var temp=[];
var OddNum = function (arr){
    for (var i=0; i<arr.length;i++){
        if(arr[i]%2 !=0){
        temp.push(arr[i]);
        }
    }
  return temp;
}
console.log(OddNum([1,2,3,4,5,6]));

//Arrow FUNCTION
var arr;
var temp=[];
var OddNum =(arr)=>{
    for (var i=0; i<arr.length;i++){
        if(arr[i]%2 !=0){
        temp.push(arr[i]);
        }
    }
  return temp;
}
console.log(OddNum([1,2,3,4,5,6]));

//IIFE FUNCTION
(function odd(arr){
var temp=[];
    for (var i=0; i<arr.length;i++){
        if(arr[i]%2 !=0){
        temp.push(arr[i]);
        }
    }
  console.log(temp);
})([1,2,3,4,5,6]);