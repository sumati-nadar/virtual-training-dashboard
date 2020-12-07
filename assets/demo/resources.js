// 

function updatePPT() {

	try{

		let formData = new FormData();           
    	formData.append("file", document.getElementById('ppt').files[0]);
    	formData.append("course_name", document.getElementById('course_name').value);
    	// formData.append("course_name", document.getElementById('course_name').value);
    	var conceptName = $('#category').find(":selected").text();
    	formData.append("course_category", conceptName);
 

		console.log("sumati- profile---------------------- resourses");

		$.ajax({
	        url: 'http://13.235.34.180:8800/courses/upload',
	        type: 'POST',
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
	        data: formData,
	        processData: false,
			contentType: false,
	        success: function (result) {

	            console.log(result)

	            imgaes_to_scorm()


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



// 

function imgaes_to_scorm() {

	try{

		// let formData = new FormData();           
  //   	formData.append("file", document.getElementById('ppt').files[0]);
  //   	formData.append("course_name", document.getElementById('course_name').value);
  //   	// formData.append("course_name", document.getElementById('course_name').value);
  //   	var conceptName = $('#category').find(":selected").text();
  //   	formData.append("course_category", conceptName);
 

		console.log("sumati- profile---------------------- scorm");

		$.ajax({
	        url: 'http://13.235.34.180:8800/scorm/ppt-to-images',
	        type: 'POST',
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
	        // data: formData,
	        processData: false,
			contentType: false,
	        success: function (result) {

	            console.log(result)


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