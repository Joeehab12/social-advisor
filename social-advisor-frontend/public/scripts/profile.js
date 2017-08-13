$(document).ready(function(){
    var url = $(location).attr('href');
    var id = url.substring(url.lastIndexOf('/') + 1);
    if($.cookie("token")){

        str ='<li>Welcome, <a id = "current-user" href="http://localhost:8008/user/'+$.cookie("user_id")+'">'+ $.cookie('current-user') +'<img id = "user-img" style = "width:30px; height:30px" src="http://localhost:8008/rsz_blank-profile-picture-973460_640.png"></img></a></li>'+'<li><a href="http://localhost:8008/ask">Ask</a></li>'
        + '<li><a id = "logout">Log out</a></li>'+
        '<li><a class = "mylink" href = "#"><img class = "myimg" src = "http://localhost:8008/rsz_notification.png"></img></a></li>';
        $('#nav-mobile').append(str);
    }
    else{
        $('#logged-in').append('<p> You must be logged in to access this page.');
    }
    id = $.cookie("user_id");
    $.get('http://localhost:8000/user/'+id+'?token=' + $.cookie("token"),null)
    .done(function(data){
            console.log(data);
            $('#first-name').text('First Name:   ' + data.firstName);
            $('#last-name').text('Last Name:   ' +data.lastName);
            $('#username').text('Username:   ' + data.username);
    });
    var repeat;
    function makeRequest(){
        if (typeof filename !== "undefined"){
            $.post('http://localhost:8000/profile?token='+ $.cookie("token"),{url:filename}).done(function(){

            });
        }
        repeat = setTimeout(makeRequest,6000);
    }

    $('#profile-pic').change(function(){
        readURL(this);
        makeRequest();

    });


    var filename;

    var readURL = function(input){
        if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#pp')
            .attr('src', e.target.result)
            .width(160).height(160);
            $('#user-img').attr('src',e.target.result).width(30).height(30);
            filename = e.target.result;
            console.log(filename + 'uploaded to server');1
        }
        reader.readAsDataURL(input.files[0]);


        }
    }






/*
        var a = document.createElement("a");

        var binaryData = [];
        binaryData.push(file);
        url = URL.createObjectURL(new Blob(binaryData, {type: "application/png"}));
        a.href = url;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);*/
});
