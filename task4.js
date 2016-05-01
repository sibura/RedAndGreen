  var count = 1;

  function press() {

    count++

    document.getElementById("first").style.backgroundColor = "Green";
    document.getElementById("first").value = "New Button Text";

    if(count % 2 === 0) {
      // document.getElementById("first").value ="make red";
      document.getElementById("first").style.backgroundColor ="green";
      document.getElementById('button1').innerHTML = "Make red";
    }
    
    else {
      // document.getElementById("first").value ="make green";
      document.getElementById("first").style.backgroundColor ="red";
      document.getElementById('button1').innerHTML = "Make green";
    }
  
  }