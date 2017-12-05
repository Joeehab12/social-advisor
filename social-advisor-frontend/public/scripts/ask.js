$(document).ready(function(){
    $(".chips-initial").material_chip();
    var chips = [];
    $('.chips-initial').on('chip.add', function(e, chip){
        chips.push(chip.tag);
    });

    $('#submit').click(function(){
        $.post('http://localhost:8000/ask?token=' + $.cookie("token"),{title: $('#title').val(),description: $('#description').val(),tags:chips,comments: null,answers:null,userId:null,upvotes:0,downvotes:0})
        .done(function(data){
            if (data.status == "success"){
                $('#message').text('Your problem is successfully submited.')
            }
        });
    });
});
