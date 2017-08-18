$(document).ready(function(){

    $("#login").click(function(){
        $.post('http://localhost:8000/login',{username: $("#username").val(),password: $("#password").val()})
                .done(function( data ) {
                    $.cookie("token",data.token);
                    $.cookie("current-user",$("#username").val());
                    $.cookie("user_id",data.id);
                    if (data.status == "success"){
                    /*    $.get('http://localhost:8000/feed?token=' + data.token,function(data){

                    });*/
                        document.
                        $(location).attr('href','http://localhost:8008/feed');
                    }
                    else{
                        $('#error-message').text(data.message);
                    }
                });
    });

    $("#password").keypress(function(event){
        if (event.which == 13){
            $.post('http://localhost:8000/login',{username: $("#username").val(),password: $("#password").val()})
                    .done(function( data ) {
                        $.cookie("token",data.token);
                        $.cookie("current-user",$("#username").val());
                        $.cookie("user_id",data.id);
                        if (data.status == "success"){
                        /*    $.get('http://localhost:8000/feed?token=' + data.token,function(data){

                        });*/

                            $(location).attr('href','http://localhost:8008/feed?token='+ $.cookie("token"));
                        }
                        else{
                            $('#error-message').text(data.message);
                        }
                    });
        }
    });




});
