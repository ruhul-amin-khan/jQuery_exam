$(document).ready(function(){

	$("#submit").click(function(){

		var email = $("#email").val();
		var full_name = $("#full_name").val();
		var password = $("#password").val();


		if (email == '') {
			$("#msg2").text("Field must be required").addClass("negative");
		}


		if (full_name == '') {
			$("#msg1").text("Field must be required").addClass("negative");
		}

		if (password  == '') {
			$("#msg3").text("Field must be required").addClass("negative");
		}

	


		
	});







	$("#full_name").keyup(function(){
		var name = $("#full_name").val();
		if(name.length>20){
			$("#msg1").text("Maximum limit 20 char");
		}
	});

		$("#password").keyup(function(){
		var password = $("#password").val();
		if(password.length < 6){
			$("#msg3").text("minimum 6 char long");
		}else{
			$("#msg3").css("display", "none");
		}
	});


});