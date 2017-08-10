$(document).ready(function(){
    $("#login").click(function(){
        $.post('https://social-advisor-heroku.herokuapp.com/login',{username: $("#username").val(),password: $("#password").val()})
                .done(function( data ) {
                    document.cookie = "token=" + data.token;
                    if (document.cookie){
                    /*    $.get('https://social-advisor-heroku.herokuapp.com/feed?token=' + data.token,function(data){

                    });*/
                        $(location).attr('href','https://social-advisor-frontend.herokuapp.com/feed');
                    }
                    else{
                        $('#error-message').text(data.message);
                    }
                });
    });

    $("#password").keypress(function(event){
        if (event.which == 13){
            $.post('https://social-advisor-heroku.herokuapp.com/login',{username: $("#username").val(),password: $("#password").val()})
                    .done(function( data ) {
                        document.cookie = "token=" + data.token;
                        if (document.cookie){
                        /*    $.get('https://social-advisor-heroku.herokuapp.com/feed?token=' + data.token,function(data){

                        });*/
                            $(location).attr('href','https://social-advisor-frontend.herokuapp.com/feed');
                        }
                        else{
                            $('#error-message').text(data.message);
                        }
                    });
        }
    });




});
