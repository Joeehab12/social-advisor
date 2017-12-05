$(document).ready(function(){
    var url = $(location).attr('href');
    var id = url.substring(url.lastIndexOf('/') + 1);
    // $('#pp')
    // .attr('src',$.cookie("profile-pic"))
    // .width(160).height(160);
    // $('#user-img').attr('src',$.cookie("profile-pic")).width(30).height(30);

    if($.cookie("token")){
        //var user_pp = profile_pic;
        str ='<li>Welcome, <a id = "current-user" href="http://localhost:8008/user/'+$.cookie("user_id")+'">'+ $.cookie('current-user') +'<img id = "user-img" style = "width:30px; height:30px"></img></a></li>'+'<li><a href="http://localhost:8008/ask">Ask</a></li>'
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
        $('#username').text(data.username);
        $('#first_last_name').text(data.firstName + ' ' + data.lastName);
        $.cookie("profile-pic",data.profile_pic);
        $('.hoverZoomLink')
        .attr('src',$.cookie("profile-pic"))
        .width(160).height(160);

        $('#user-img').attr('src',$.cookie("profile-pic")).width(30).height(30);
        $('.hoverZoomLink').attr('src',$.cookie("profile-pic"));
    });

    $('a').click(function(){
      $('input').click();
    })
    function makeRequest(){
        if (filename){
            $.post('http://localhost:8000/profile?token='+ $.cookie("token"),{url:filename,id:id}).done(function(){
                console.log(filename);
            });
        }
        else{
        console.log('undefined');
    }

    }
    /*
    var filename;
    var callback = function(result){
        makeRequest();
        console.log(result.target.result + ' uploaded to server');
    };
        var reader;
        var readURL = function(input,e){
            if (input.files && input.files[0]) {
                reader = new FileReader();
                reader.onload = readURL(this.files[0],callback(e));
                filename = reader.readAsDataURL(input.files[0]);
                makeRequest();
            }

        }
    $('#profile-pic').change(function(event){
        readURL(this,callback(event));
        var files = event.target.files;
    });
    var callback = function (e) {
        $('#pp')
        .attr('src', e.target.result)
        .width(160).height(160);
        $('#user-img').attr('src',e.target.result).width(30).height(30);
        console.log(e.target.result + ' uploaded to server');
    }
*/
var onLoadCallback = function(){
    filename = e.target.result;
    if (filename){
        $.post('http://localhost:8000/profile?token='+ $.cookie("token"),{url:filename,id:id}).done(function(data){
            console.log(filename);
            console.log(data.message);
            $('#hoverZoomLink')
            .attr('src',e.target.result)
            .width(160).height(160);
            $('#user-img').attr('src',e.target.result).width(30).height(30);

          //  $('#user-img').attr('src',$.cookie("profile-pic")).width(30).height(30);

        });
    }
    else{
    console.log('undefined');
}
}

$('#profile-pic').on('change', function(e){
        readFile(this.files[0], function(e) {
            // use result in callback...
            // console.log(e.target.result);
            $.post('http://localhost:8000/profile?token='+ $.cookie("token"),{url:e.target.result,id:$.cookie("user_id")}).done(function(data){
              //  console.log(e.target.result);
            //var ext = e.target.result.substring("data:image/".length, e.target.result.indexOf(";base64"))
              //$.cookie("profile-pic","http://localhost:8008/assets/"+$.cookie("user_id")+'.'+ext);
              $('.hoverZoomLink')
              .attr('src',e.target.result)
              .width(160).height(160);
              $('#user-img').attr('src',e.target.result).width(30).height(30);

                console.log(data.message);

            });

            //console.log(e.target.result + ' uploaded to server');
        });
    });

    function readFile(file, onLoadCallback){
        var reader = new FileReader();
        reader.onload = onLoadCallback;
        reader.readAsDataURL(file);
    }







});
