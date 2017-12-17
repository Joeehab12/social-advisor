$(document).ready(function(){

    $.get('http://localhost:8000/user/'+$.cookie('user_id')+'?token=' + $.cookie("token")).done(function(data){
        if (data){
            $.cookie("profile-pic",data.profile_pic);
            $('#user-img').attr('src',$.cookie('profile-pic'));
        }
    });

    if($.cookie("token")){

        str ='<li>Welcome, <a id = "current-user" href="/user/'+ $.cookie('user_id')+  '">'+ $.cookie('current-user') + '<img id = "user-img" style = "width:30px; height:30px"></img>'+'</a></li>'+'<li><a href="http://localhost:8008/ask">Ask</a></li>'
        + '<li><a id = "logout">Log out</a></li>'+
        '<li><a class = "mylink" href = "#"><img class = "myimg" src = "rsz_notification.png"></img></a></li>';
        $('#nav-mobile').append(str);
    }
    else{
        $('#logged-in').append('<p> You must be logged in to access this page.</p>');
    }


});
