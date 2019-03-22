function VendorFill()
{
	 console.log("g");
	let y=document.getElementById("vendorpage");
    y.style.display="block";
	  
	medadd.addEventListener("click", myFunction);

	function myFunction() {
  	 console.log("hi");
      let N=document.getElementById("medname").value;
      let Q=document.getElementById("medquantity").value;
      let E=document.getElementById("medexpiry").value;
      console.log(N);
      console.log(Q);
      console.log(E);
  }

 	
 }



	