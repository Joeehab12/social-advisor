$(document).ready(function(){
    $('#submit').click(function(){
        $.post('http://localhost:8000/ask?' + $.cookie("token"),{title: $('#title').val(),description: $('#description').val(),comments: null,answers:null,userId:null,upvotes:0,downvotes:0})
        .done(function(data){
            if (data.status == "success"){
                $('#message').text('Your problem is successfully submited.')
            }
        });
    });
});
