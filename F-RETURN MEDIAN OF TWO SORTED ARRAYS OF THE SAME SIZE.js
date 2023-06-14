//F. RETURN MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

//Anonnymous Function
var Median = function(a,b){
var arr = [...a,...b].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var MedianA= arr[arr.length/2];
    var MedianB= arr[arr.length/2 -1];
    var median = ((MedianA+MedianB)/2);
    return median;
  }else{
    var median = arr[Math.floor(arr.length/2)];
    return median;
  }
}
console.log(Median([1,3,6,10,12],[2,5,9,8]));


//IIFE Function
(function(a,b){
var arr = [...a,...b].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var MedianA= arr[arr.length/2];
    var MedianB= arr[arr.length/2 -1];
    var median = ((MedianA+MedianB)/2);
    console.log (median);
  }else{
    var median = arr[Math.floor(arr.length/2)];
    console.log (median);
  }
})([1,3,6,10,12],[2,5,9,8,18]);