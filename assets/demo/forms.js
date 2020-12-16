function registerForm(){

	var name = document.register.name.value;
	var email = document.register.email.value;
	var password = document.register.password.value;
	var cpass = document.register.cpassword.value;
	var conceptName = $('#type').find(":selected").text().toLowerCase();

	console.log(conceptName)

	if (name == "" || name.includes(" ") == false){
		demo.showNotification('top','center', "Enter full name")
		return
	}

	if (email == ""){
		demo.showNotification('top','center', "Enter valid email id")
		return
	}

	if (password == "" || cpass == ""){
		demo.showNotification('top','center', "Enter valid password")
		return
	}

	if (password != cpass) {
		// alert("password doesnot match")
		demo.showNotification('top','center', "password doesnot match")
		return
	}

	$.ajax({
		url: 'https://uat.algo360.com:8800/auth/register/'+conceptName,
		type: 'POST',
		dataType: 'json',
        contentType: 'application/json',
		data : JSON.stringify({
		  	"username": name.split(" ")[0],
		  	"password": password,
		  	"name": name,
		  	"email": email
		}),
		
		success: function (result) {

			console.log(result)

			// alert("Success")

			window.location.href = "login.html";



        },
        error: function (error) {

        	console.log(error);
        	// alert("error")

        	if(error.status === 406)
        	{
        		// alert("Please Enter Correct AccessToken Or Refresh Your AccessToken");
        		demo.showNotification('top','center', error.responseJSON.message)
        	}

        }

    } );


}

function loginForm(){

	// var name = document.register.name.value;
	var email = document.login.email.value;
	var password = document.login.password.value;
	// var cpass = document.register.cpassword.value;
	// var conceptName = $('#type').find(":selected").text().toLowerCase();

	// console.log(conceptName)

	// if (password != cpass) {
	// 	// alert("password doesnot match")
	// 	demo.showNotification('top','center', "password doesnot match")
	// }

	$.ajax({
		url: 'https://uat.algo360.com:8800/auth/login',
		type: 'POST',
		dataType: 'json',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        crossDomain: true,
        headers: {
        	 "Authorization": "Basic "+window.btoa(email + ':' + password),
        },
		// data : JSON.stringify({
		//   	// "username": name,
		//   	"password": password,
		//   	// "name": name,
		//   	"email": email
		// }),
		
		success: function (result) {

			console.log(result)

			// alert("Success")

			localStorage.setItem("email_id", result.email_id)

			if (result.email_id.includes("mentor")){
				window.location.href = "../mentor/courses.html";
			}else{
				window.location.href = "dashboard.html";
			}


			

			// console.log(document.cookie)



        },
        error: function (error) {

        	console.log(error);
        	// alert("error")

        	// if(error.status === 406)
        	// {
        		// alert("Please Enter Correct AccessToken Or Refresh Your AccessToken");
        		demo.showNotification('top','center', error.responseJSON.message)
        	// }

        }

     });


}






// $("#register-form").validate({
//     rules: {
//       name: "required",
      
//       password: {
//         required: true,
//         minlength: 5
//       },
//       cpassword: {
//         required: true,
//         minlength: 5,
//         equalTo: "#password"
//       },
//       email: {
//         required: true,
//         email: true
//       },

//       agree: "required"
//     },
//     messages: {
//       name: "Please enter your first name",

//       password: {
//         required: "Please provide a password",
//         minlength: "Your password must be at least 5 characters long"
//       },
//       confirm_password: {
//         required: "Please provide a password",
//         minlength: "Your password must be at least 5 characters long",
//         equalTo: "Please enter the same password as above"
//       },
//       email: "Please enter a valid email address",
      
//     },
//     submitHandler: function (form) { // for demo
//       alert('valid form');
//       return false;
//     }
//   });
