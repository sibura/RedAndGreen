(function() {
  
  if(document.getElementById('mySquare').style.backgroundColor === 'green') {
 
   window.alert('success');
  }
  else {
    window.alert('fail');
  }

  setBackgroundColor('mySquare', 'red');
   if(document.getElementById('mySquare').style.backgroundColor === 'red') {
 
   window.alert('success');
  }
  else {
    window.alert('fail');
  }
 }) ();

// (function(){

//     setBackgroundColor("mySquare", "red");

//     if(document.getElementById("mySquare").style.backgroundColor === "red"){
//             window.alert("Success!");
//     }
//     else{
//             window.alert("Failure!");
//     }
// })();