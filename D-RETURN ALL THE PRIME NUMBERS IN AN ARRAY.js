//D.RETURN ALL THE PRIME NUMBERS IN AN ARRAY

//Anonnymous Function
var prime =[];
var PrimeNum = function(arr){
for ( var i = 0; i <arr.length; i++) {
  for ( var j = 2; j <arr[i]; j++) {   
    if ( arr[i] % j == 0 ) {    
      break;      
    }
  }
  if ( arr[i] == j ) {    
    prime.push(arr[i]);
  }
}
return prime;
};
console.log(PrimeNum([1,2,3,4,5,7]));

//Arrow Function
var prime =[];
var PrimeNum =(arr)=>{
for ( var i = 0; i <arr.length; i++) {
  for ( var j = 2; j <arr[i]; j++) {   
    if ( arr[i] % j == 0 ) {    
      break;      
    }
  }
  if ( arr[i] == j ) {    
    prime.push(arr[i]);
  }
}
return prime;
};
console.log(PrimeNum([1,2,3,4,5,7]));

//IIFE Function
(function(arr){
  var prime =[];
for ( var i = 0; i <arr.length; i++) {
  for ( var j = 2; j <arr[i]; j++) {   
    if ( arr[i] % j == 0 ) {    
      break;      
    }
  }
  if ( arr[i] == j ) {    
    prime.push(arr[i]);
  }
}
console.log (prime);
})
([1,2,3,4,5,7]);