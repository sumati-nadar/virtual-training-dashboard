

function fetchProfile() {

	try{

		console.log("sumati- profile----------------------"+localStorage.getItem("email_id"))

		$.ajax({
	        url: 'http://13.235.34.180:8800/employee/'+localStorage.getItem("email_id"),
	        type: 'GET',
	        // dataType: 'json',
	        contentType: 'application/json',
	        // headers: {
	        //      "Authorization": "Basic "+window.btoa(email + ':' + password),
	        // },
	        // data : JSON.stringify({
	        //      // "username": name,
	        //      "emp": localStorage.getItem("email_id"),
	        //      // "name": name,
	        //      // "email": email
	        // }),
	        
	        success: function (result) {

	            console.log(result)
	            // console.log(getColumns(result.course_details[0]))

	            // alert("Success")

	            // populateCourses(result.course_details)

	            document.getElementById('email_address').value = localStorage.getItem("email_id")
	            document.getElementById('fname').value = result.employee_details.name.split(" ")[0]
	            document.getElementById('lname').value = result.employee_details.name.split(" ")[1]
	            document.getElementById('qualifications').value = result.employee_details.qualifications
	            document.getElementById('aboutme').value = result.employee_details.about_me
	            document.getElementById('full_name').innerHTML = result.employee_details.name.toUpperCase()


	            demo.showNotification('top','center', 'Success!')


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

	    });


	}catch(err){

		console.log(err)
	}

}


function updateProfile() {

	try{

		console.log("sumati- profile----------------------"+document.getElementById('qualifications').value)

		$.ajax({
	        url: 'http://13.235.34.180:8800/employee/details',
	        type: 'PUT',
	        // dataType: 'json',
	        contentType: 'application/json',
	        // headers: {
	        //      "Authorization": "Basic "+window.btoa(email + ':' + password),
	        // },
	        data : JSON.stringify({
	             "username": document.getElementById('fname').value,
	             // "emp": localStorage.getItem("email_id"),
	             "name": document.getElementById('fname').value + " "+ document.getElementById('lname').value,
	             "email": localStorage.getItem("email_id").value,
	             "qualifications" : document.getElementById('qualifications').value.split(",")[0]
	        }),
	        
	        success: function (result) {

	            console.log(result)
	            // console.log(getColumns(result.course_details[0]))

	            // alert("Success")

	            // populateCourses(result.course_details)

	            // document.getElementById('email_address').value = localStorage.getItem("email_id")
	            // document.getElementById('fname').value = result.employee_details.name.split(" ")[0]
	            // document.getElementById('lname').value = result.employee_details.name.split(" ")[1]
	            // document.getElementById('qualifications').value = result.employee_details.qualifications
	            // document.getElementById('aboutme').value = result.employee_details.about_me


	            demo.showNotification('top','center', 'Success!')


	        },
	        error: function (error) {

	            console.log(error);
	            // alert("error")

	            if(error.status === 406)
	            {
	                // alert("Please Enter Correct AccessToken Or Refresh Your AccessToken");
	                demo.showNotification('top','center', error.responseJSON.message)
	            }
	            else if (error.status == 422){
	            	demo.showNotification('top','center', "Invalid Input")
	            }else{
	            	demo.showNotification('top','center', "Error saving profile!")
	            }

	        }

	    });


	}catch(err){

		console.log(err)
	}

}