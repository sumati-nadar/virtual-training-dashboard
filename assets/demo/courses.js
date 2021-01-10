function getColumns(data){
	console.log(data)
  for(var i = 0; i < data.length; i++){
    let columnsArray = [];
    var keys = Object.keys(data[i]);
    for(k in Object.keys(data[i])){
      if(data[i].hasOwnProperty(keys[k])){
        columnsArray.push({
            "data":keys[k]
        });
      }
    }
    return columnsArray;
  }
}



function getCourses() {

	try{

		console.log("sumati-----------------------")

		$("#leaderboard_list_table_detailed tbody").empty();

		// $("#leaderboard_list_table_detailed").DataTable({
	 //            	// "columns": [1, 2,3,4,5,6,7,8,9,2,1],
	 //            	"data": [[1, 2,3,4]]
	 //            })

		// var mytable = $("#leaderboard_list_table_detailed").DataTable();

		// mytable.clear().draw();

		// mytable.row.add([1,2,3,3]);
		// mytable.draw();

		$.ajax({
	        url: 'https://uat.algo360.com:8800/course/',
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

	            demo.showNotification('top','center', 'Courses For You!')


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


function populateCourses(data){

	var farr = new Array();

	console.log(data)
	

	for (i=0; i< data.length; i++){

		var arr = new Array();

		arr.push(data[i].course_name)
		arr.push(data[i].course_level.toUpperCase())
		arr.push(data[i].credits)
		arr.push(data[i].rating)
		arr.push("<div class='col1d'><a class='btn btn-fill btn-primary' href='individual_course.html?id="+data[i].course_id+"'>Get Course</a></div>")
		// arr.push(data[i].prerequisites)
		// arr.push(data[i].duration)
		farr.push(arr)
	}

	console.log(farr)

	$("#leaderboard_list_table_detailed").DataTable({
    	// "columns": getColumns(result.course_details),
    	"data": farr,
    	"searching" : false,
    	dom: 'ifrt',
    	"bInfo" : false,
    })


}


function mentorCourse(){

	var farr = new Array();
	for (var i = 0; i < localStorage.length; i++){
    // if (localStorage.getItem(localStorage.key(i)))

    

    if (localStorage.key(i).includes("COURSE_")){

    	var arr = new Array();

    	data = JSON.parse(localStorage.getItem(localStorage.key(i)))
    	console.log(data)
    	console.log(localStorage.key(i))
    	course_id = localStorage.key(i).split("_")[1]

    	arr.push(data.course_name)
		arr.push(data.course_cat)
		arr.push("<div class='col1d'><a class='btn btn-fill btn-primary' href='load_course.html?id="+course_id+"'>View Course</a></div>")
		farr.push(arr)
    }

    

    console.log(arr)

	}

	console.log(farr)

    $("#leaderboard_list_table_detailed").DataTable({
    	// "columns": getColumns(result.course_details),
    	"data": farr,
    	"searching" : false,
    	dom: 'ifrt',
    	"bInfo" : false,
    })

}