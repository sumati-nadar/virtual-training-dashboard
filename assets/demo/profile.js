

function fetchProfile() {

	try{

		console.log("sumati- profile----------------------")

		$.ajax({
	        url: 'http://13.235.34.180:8800/profile/',
	        type: 'GET',
	        // dataType: 'json',
	        contentType: 'application/json',
	        // headers: {
	        //      "Authorization": "Basic "+window.btoa(email + ':' + password),
	        // },
	        // data : JSON.stringify({
	        //      // "username": name,
	        //      "password": password,
	        //      // "name": name,
	        //      "email": email
	        // }),
	        
	        success: function (result) {

	            console.log(result.course_details)
	            console.log(getColumns(result.course_details[0]))

	            // alert("Success")

	            populateCourses(result.course_details)

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