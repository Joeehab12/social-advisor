$(document).ready(function(){
    $('#register').click(function(){
        $.post('http://localhost:8000/register',
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
});
