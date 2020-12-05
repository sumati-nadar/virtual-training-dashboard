function register(){

	var name = document.register.name.value;
	var email =document.register.email.value;
	var password = document.register.password.value;
	var cpass = document.register.cpassword.value;

	if password != cpassword {
		alert("password doesnot match")
		demo.showNotification('top','center', "password doesnot match")
	}



}