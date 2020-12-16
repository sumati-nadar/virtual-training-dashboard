function createTemplate(data, index){
	console.log(data, index)
	var header = [
		'<div class="card-header">',
		'<h4 class="card-title">',
		index + '. &nbsp' +data.assignment_name,
		'</h4></div>'
	]

	var col2 = `
	<div class="font-icon-list col-md-2">
	  <div class="font-icon-detail">
	    <img src="../assets/img/courses.jpg" width="100" height="100">
	    
	  </div>
	</div>

	`

	// var body = [
	// 	'<div class="card-body">',
	// 	'<div class="row" style="margin: 5px;">',
	// 	'<div class="font-icon-list col-md-2 pr-md-1">',
	// 	'<div class="font-icon-detail">',
	// 	'<img src="../assets/img/courses.jpg" width="100" height="100">',
	// 	'</div>',
	// 	'</div>'
	// ]

	var cardTemplate = [
		'<div class="card">',
		header.join(''),
		'<div class="card-body">',
		'<div class="row" style="margin: 5px;">',
		col2,
		'<div class="font-icon-list col-md-10 pr-md-1">',
		'<div style="margin: 5px;">',
		'<p><h5>',
		data.assignment_description,
		'</h5></p>',
		'<div class="row">',
		'<div class="font-icon-list col-md-10">',
		'<div><i class="tim-icons icon-chart-pie-36" style="color: #e44cc4;">',
		data.duration_hrs,
		' hours to complete</i>',
		'</div></div>',
		'<div class="col-md-2" style="border-width: 1px;">',
		'<a href="load_course.html">',
		'<i class="fas fa-eye fa-2x" style="color: #e44cc4;vertical-align: middle;"></i>',
		'<p style="color: #e44cc4;">Watch</p></a>',
		'</div></div></div></div></div>',
		'</div>',
		'</div>'
	]

	// html = 
	// var i;

	// for (i = 0; i < 4; i++) {
		return cardTemplate.join('')
		// container.innerHTML = cardTemplate.join('')
	// }
}

function addCards(result){
	container = document.getElementById('custom-course-card');
	var i;
	var card_template = '';

	for (i=0; i <result.length; i++){
		console.log(i)
		card_template = card_template + createTemplate(result[i], i+1)
	}

	container.innerHTML = card_template

}

function getIndividualCourses(course_id) {

	try{

		console.log("sumati-----------------------")


	$.ajax({
        url: 'https://uat.algo360.com:8800/courses/'+course_id,
        type: 'GET',
        dataType: 'json',
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

            console.log(result)
            // console.log(getColumns(result.course_details[0]))

            // alert("Success")
            

            addCards(result['course_details'])

            document.getElementById('course_name').innerText = result['course_details'][0]['course_name']
            // demo.showNotification('top','center', 'Success')

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

    } );


}catch(err){

	console.log(err)
}

}



