
//B. CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY

//ANONYMOUS FUNCTION
var TitleCase = function (a){
    var a = a.toLowerCase().split(" ");
   for (var i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(" ");  
  }
  console.log(TitleCase("GUVI GEEKS"));
  //ARROW FUNCTION
  var TitleCase =(a)=>{
    var a = a.toLowerCase().split(" ");
   for (var i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(" ");  
  }
  console.log(TitleCase("GUVI GEEKS"));
  //IIFE FUNCTION
  (function (a){
    var a = a.toLowerCase().split(" ");
   for (var i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.join(" "));  
  })("GUVI GEEKS");
  