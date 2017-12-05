var url = $(location).attr('href');
var id = url.substring(url.lastIndexOf('/') + 1);
//console.log(id);
$(document).ready(function(){
    $("#topic").upvote();
        $.post('http://localhost:8000/problem/'+id +'?token=' + $.cookie("token"),null)
        .done(function(data){
                //  console.log($.cookie("token"));
                $('#title').text(data.title);
                $('#description').text(data.description);
                data.tags.forEach(function(item){
                    $('#tags').append('<div class = \"chip\">' + '<a id = \"tagLinks\" href = \"http://localhost:8008/feed?query='+ item+'\">' + item + '</a></div>');
                });
        });

            $('#comment').click(function(){
                $.post('http://localhost:8000/comment/'+ id +'?token=' + $.cookie("token"),{comment: $('#comment-textarea').val(),user_id:$.cookie("user_id")})
                .done(function(data){
                    if (data.status == "success"){
                        console.log("comment added successfuly");
                        $('#comment-textarea').val('');
                    }
                });
            });
            str = "";
            var userCommentIds=[];
            $.get('http://localhost:8000/comment/'+ id +'?token=' + $.cookie("token"),function(data){

                console.log(data);
                var i=1;
                var comments = data[0].comments;
                comments.forEach(function(item){
              // place span here
                    userCommentIds.push(item.user_id);
                    str+= '<span> <img id="comment_pic'+i+'" width = "30px" height = "30px"></img></span>';
                    str+= '<p>' + item.body + '</p><br>';
                    i++;
                });
                $('#comments').append(str);
            });







            $.get('http://localhost:8000/answers/'+ id +'?token=' + $.cookie("token"),function(data){
                str = "";
                console.log(data);
                var answers = data.answers;
                answers.forEach(function(item){
                    str+= '<p>' + item.body + '</p><br>';
                });
                $('#answers').append(str);
            })

            $('#answer').click(function(){
                $.post('http://localhost:8000/answers/'+ id +'?token=' + $.cookie("token"),{answer: $('#answer-textarea').val()})
                .done(function(data){
                    if (data.status == "success"){
                        console.log("answer added successfuly");
                        $('#answer-textarea').val('');
                    }
                });
            });
            var i = 1;
            userCommentIds.forEach(function(item){
              $.get('http://localhost:8000/user/'+item+'?token=' + $.cookie("token"),function(data){
                  console.log(data.profile_pic);
                $('#comment_pic'+i).attr('src',data.profile_pic);

              });
              i++;
            });


            console.log(userCommentIds);
});
