$(document).ready(function(){
    $("#login").click(function(){
        $.post('http://localhost:8000/login',{username: $("#username").val(),password: $("#password").val()})
                .done(function( data ) {
                    document.cookie = "token=" + data.token;
                    if (document.cookie){
                    /*    $.get('http://localhost:8000/feed?token=' + data.token,function(data){

                    });*/
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
                        document.cookie = "token=" + data.token;
                        if (document.cookie){
                        /*    $.get('http://localhost:8000/feed?token=' + data.token,function(data){

                        });*/
                            $(location).attr('href','http://localhost:8008/feed');
                        }
                        else{
                            $('#error-message').text(data.message);
                        }
                    });
        }
    });




});
