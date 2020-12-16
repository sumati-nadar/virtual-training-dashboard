// 

function updatePPT() {

	try{

		let formData = new FormData();           
    	formData.append("file", document.getElementById('ppt').files[0]);
    	course_name = document.getElementById('course_name').value
    	formData.append("course_name", course_name);
    	// formData.append("course_name", document.getElementById('course_name').value);
    	var conceptName = $('#category').find(":selected").text();
    	formData.append("course_category", conceptName);
 

		console.log("sumati- profile---------------------- resourses");

		$.ajax({
	        url: 'https://uat.algo360.com:8800/courses/upload',
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

	            course_id = "1"

	            ppt_to_images(course_id, course_name, conceptName )

	            
	            demo.showNotification('top','center', 'PPT uploaded!')


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

function ppt_to_images(course_id, course_name, conceptName) {

	try{

		// let formData = new FormData();           
  //   	formData.append("file", document.getElementById('ppt').files[0]);
  //   	formData.append("course_name", document.getElementById('course_name').value);
  //   	// formData.append("course_name", document.getElementById('course_name').value);
  //   	var conceptName = $('#category').find(":selected").text();
  //   	formData.append("course_category", conceptName);
 

		console.log("sumati- profile---------------------- scorm");

		$.ajax({
	        url: 'https://uat.algo360.com:8800/scorm/ppt-to-images',
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


	            demo.showNotification('top','center', 'Scorm conversion!')
	            imgaes_to_scorm(course_id, course_name, conceptName)


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



function imgaes_to_scorm(course_id, course_name, conceptName) {

	try{

		// let formData = new FormData();           
  //   	formData.append("file", document.getElementById('ppt').files[0]);
  //   	formData.append("course_name", document.getElementById('course_name').value);
  //   	// formData.append("course_name", document.getElementById('course_name').value);
  //   	var conceptName = $('#category').find(":selected").text();
  //   	formData.append("course_category", conceptName);
 

		console.log("sumati- profile---------------------- scorm");

		$.ajax({
	        url: 'https://uat.algo360.com:8800/scorm/images-to-scorm',
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

	            localStorage.setItem("COURSE_"+course_id, JSON.stringify({"course_name": course_name, "course_cat": conceptName}))


	            demo.showNotification('top','center', 'Scorm conversion completed!')


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