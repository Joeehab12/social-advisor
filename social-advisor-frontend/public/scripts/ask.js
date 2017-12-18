$(document).ready(function(){
    $(".chips-initial").material_chip();
    var chips = [];
    $('.chips-initial').on('chip.add', function(e, chip){
        chips.push(chip.tag);
    });

    $('#submit').click(function(){
        $.post('http://localhost:8000/ask?token=' + $.cookie("token"),{title: $('#title').val(),description: $('#description').val(),tags:chips,comments: null,answers:null,userId:$.cookie("user_id"),upvotes:0,downvotes:0,accepted:false})
        .done(function(data){
            if (data.status == "success"){
                $('#message').text('Your problem is successfully submited.')
            }
        });
    });
});
