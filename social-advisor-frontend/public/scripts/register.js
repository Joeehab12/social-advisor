$(document).ready(function(){
    $('#register').click(function(){
        $.post('https://social-advisor-heroku.herokuapp.com/register',
        { firstName: $('#first_name').val(),
          lastName: $('#last_name').val(),
          username: $('#username').val(),
          password: $('#password').val()
        })
        .done(function(data){
            if (data.status == "success"){
                    console.log('user saved successfuly');
            }
        });
    });


    $("#password").keypress(function(event){
        if (event.which == 13){
            $.post('https://social-advisor-heroku.herokuapp.com/register',
            { firstName: $('#first_name').val(),
              lastName: $('#last_name').val(),
              username: $('#username').val(),
              password: $('#password').val()
            })
            .done(function(data){
                if (data.status == "success"){
                        console.log('user saved successfuly');
                }
            });
        }
    });


});
