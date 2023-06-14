//C. SUM OF ALL NUMBERS IN AN ARRAY

//ANONYMOUS FUNCTION
var sum =0;
var SumOfNum = function some(arr){
    for (var i=0; i<arr.length; i++){
        sum= sum+arr[i];
        }return sum;
    }
console.log(SumOfNum([1,2,3,4,5,6]));
//Arrow Function
var sum =0;
var SumOfNum =(arr)=>{
    for (var i=0; i<arr.length; i++){
        sum= sum+arr[i];
        }return sum;
    }
console.log(SumOfNum([1,2,3,4,5,6]));

var SumOfNum = arr.reduce((acc,cv)=>acc+cv);//Using Reduce function
console.log(SumOfNum);

//IIFE Function
(function some(arr){
  var sum=0;
    for (var i=0; i<arr.length; i++){
        var sum= sum+arr[i];
        }console.log(sum);      
    })([10,6,8,2,4]);