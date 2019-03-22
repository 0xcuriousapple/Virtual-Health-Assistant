document.addEventListener("DOMContentLoaded",
  function (event) {

  var l = document.getElementsByClassName('login')[0];
  var r = document.getElementsByClassName('reg')[0];
  var v = document.getElementsByClassName('vendor')[0];
  var e = document.getElementsByClassName('emergency')[0];
   
	function lf() {
	 r.classList.remove("regopen");
  	 e.classList.remove("emergencyopen");
  	 v.classList.remove("vendoropen");
	 l.classList.toggle("loginopen");
	}
    function rf() {
 	 l.classList.remove("loginopen");
  	 e.classList.remove("emergencyopen");
  	 v.classList.remove("vendoropen");
	 r.classList.toggle("regopen");
	}
	function ef() {
     l.classList.remove("loginopen");
 	 r.classList.remove("regopen");
  	 v.classList.remove("vendoropen");
	 e.classList.toggle("emergencyopen");
	}
	 function vf() {
 	 l.classList.remove("loginopen");
 	 r.classList.remove("regopen");
  	 e.classList.remove("emergencyopen");
	 v.classList.toggle("vendoropen");
	}


    login1.onclick =function(){lf()};
    reg1.onclick =function(){rf()};
    emergency1.onclick =function(){ef()};
    vendor1.onclick =function(){vf()};

    	
	});
