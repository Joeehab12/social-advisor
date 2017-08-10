var url = $(location).attr('href');
var id = url.substring(url.lastIndexOf('/') + 1);
//console.log(id);
$(document).ready(function(){
        $.post('http://localhost:8000/problem/'+id +'?' + document.cookie,null)
        .done(function(data){
                console.log(data);
                $('#title').text(data.title);
                $('#description').text(data.description);
                /*$('#active').click(function(){
                    $('#active').addClass('active-upvote');
                });*/
        });


            $('#comment').click(function(){
                $.post('http://localhost:8000/comment/'+ id +'?' + document.cookie,{comment: $('#comment-textarea').val()})
                .done(function(data){
                    if (data.status == "success"){
                        console.log("comment added successfuly");
                        $('#comment-textarea').val('');
                    }
                });
            });
            str = "";
            $.get('http://localhost:8000/comment/'+ id +'?' + document.cookie,function(data){
                console.log(data);
                var comments = data[0].comments;
                comments.forEach(function(item){
                    str+= '<p>' + item.body + '</p><br>';
                });
                $('#comments').append(str);
            });

            $.get('http://localhost:8000/answers/'+ id +'?' + document.cookie,function(data){
                str = "";
                console.log(data);
                var answers = data.answers;
                answers.forEach(function(item){
                    str+= '<p>' + item.body + '</p><br>';
                });
                $('#answers').append(str);
            })

            $('#answer').click(function(){
                $.post('http://localhost:8000/answers/'+ id +'?' + document.cookie,{answer: $('#answer-textarea').val()})
                .done(function(data){
                    if (data.status == "success"){
                        console.log("answer added successfuly");
                        $('#answer-textarea').val('');
                    }
                });
            });



});
