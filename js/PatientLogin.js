document.addEventListener("DOMContentLoaded",
  function (event) {

    function a(){
       console.log("hello");
      let u=document.getElementById("pusername").value;
      let p=document.getElementById("ppassword").value;

      console.log(u);
      console.log("hello");
    if(u=="a"&&p=="a")
    { 
      console.log("loggedin");
      document.getElementById("plogin").style.display="none";
      let x=document.getElementById("ploggedin");
      x.style.display="block";
      
   
    }
    else
    {
      alert("Invalid Credentials");
    }


   
    }


    psubmit.onclick =function(){a()};

}

    
    
);