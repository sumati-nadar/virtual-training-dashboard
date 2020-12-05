baseURL = "http://13.235.34.180:8800"


function callAPi(url, method, data){

    
    $.ajax({
        url: baseURL + '/auth/login',
        type: method,
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

            // alert("Success")

            window.location.href = "dashboard.html";



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