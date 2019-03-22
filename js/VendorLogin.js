document.addEventListener("DOMContentLoaded",
  function (event) {

    function a(){
      let u=document.getElementById("vusername").value;
      let p=document.getElementById("vpassword").value;

      console.log(u);
      console.log("hello");
    if(u=="a"&&p=="a")
    { 
      console.log("loggedin");
      document.getElementById("vlogin").style.display="none";
      let x=document.getElementById("vloggedin");
      x.style.display="block";
      VendorFill();
    }
    else
    {
      alert("Invalid Credentials");
    }


   
    }


    vsubmit.onclick =function(){a()};

}

    
    
);