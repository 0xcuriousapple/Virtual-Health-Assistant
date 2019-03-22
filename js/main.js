$(document).ready(function(){
	
	$(".login1").click(function(){

		$(".reg").removeClass("regopen");
		$(".emergency").removeClass("emergencyopen");
		$(".vendor").removeClass("vendoropen");
		$(".login").toggleClass("loginopen");	
	});	

	$(".reg1").click(function(){

		$(".login").removeClass("loginopen");
		$(".emergency").removeClass("emergencyopen");
		$(".vendor").removeClass("vendoropen");

		$(".reg").toggleClass("regopen");	
	});

	$(".emergency1").click(function(){
		
		$(".login").removeClass("loginopen");
		$(".reg").removeClass("regopen");
		$(".vendor").removeClass("vendoropen");

		$(".emergency").toggleClass("emergencyopen");
	});	

	$(".vendor1").click(function(){
		$(".login").removeClass("loginopen");
		$(".reg").removeClass("regopen");
		$(".emergency").removeClass("emergencyopen");

		$(".vendor").toggleClass("vendoropen");
	});	
});
