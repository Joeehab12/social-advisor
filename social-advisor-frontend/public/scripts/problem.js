var url = $(location).attr('href');
var id = url.substring(url.lastIndexOf('/') + 1);
//console.log(id);
$(document).ready(function(){

    $.post('http://localhost:8000/problem/'+id +'?token=' + $.cookie("token"),null)
    .done(function(data){
        //  console.log($.cookie("token"));
        console.log(data.upvotes);
        var str = '<a id = "problemUpvote" class="upvote"></a>' + '<span class="count">' + data.upvotes +'</span>' +
        '<a class="downvote"></a>' +
        '<a class = "star"> </a>';
        $("#topic").append(str);
        $("#topic").upvote();
        $('#title').text(data.title);
        $('#description').text(data.description);
        console.log(data);
        console.log(data);
        if (data.upvoted == true && data.downvoted == false){
            $('#topic').upvote('upvote');
        }
        else if (data.upvoted == false && data.downvoted == true){
            $('#topic').upvote('downvote');
        }
        // if ($("#topic").upvote('upvoted') == false){
        //     $(".upvote").click(function(){
        //
        //         $.post('http://localhost:8000/problem-upvotes/'+ id + '?token='+ $.cookie("token"),{count:$('#topic').upvote("count"),upvoted: true,downvoted:false} ).done(function(data){
        //             if (data.status == "success"){
        //                 console.log("updated problem upvotes succcessfully");
        //                 //$('#topic').upvote('upvote');
        //             }
        //             else{
        //                 console.log("Failed to update problem upvote");
        //             }
        //         });
        //     });
        // }
        // if ($("#topic").upvote('downvoted') == false){
        //     $(".downvote").click(function(){
        //         $.post('http://localhost:8000/problem-upvotes/'+ id + '?token='+ $.cookie("token"),{count:$('#topic').upvote("count"),upvoted: false,downvoted:true} ).done(function(data){
        //             if (data.status == "success"){
        //                 console.log("updated problem upvotes succcessfully");
        //             }
        //             else{
        //                 console.log("Failed to update problem upvote");
        //             }
        //         });
        //     });
        // }


        data.tags.forEach(function(item){
            $('#tags').append('<div class = \"chip\">' + '<a id = \"tagLinks\" href = \"http://localhost:8008/feed?query='+ item+'\">' + item + '</a></div>');
        });
    });
    // if ($("#topic").upvote('upvoted') == false){
    //     $(".upvote").click(function(){
    //
    //         $.post('http://localhost:8000/problem-upvotes/'+ id + '?token='+ $.cookie("token"),{count:$('#topic').upvote("count"),upvoted: true,downvoted:false} ).done(function(data){
    //             if (data.status == "success"){
    //                 console.log("updated problem upvotes succcessfully");
    //                 //$('#topic').upvote('upvote');
    //             }
    //             else{
    //                 console.log("Failed to update problem upvote");
    //             }
    //         });
    //     });
    // }
    // if ($("#topic").upvote('downvoted') == false){
    //     $(".downvote").click(function(){
    //         $.post('http://localhost:8000/problem-upvotes/'+ id + '?token='+ $.cookie("token"),{count:$('#topic').upvote("count"),upvoted: false,downvoted:true} ).done(function(data){
    //             if (data.status == "success"){
    //                 console.log("updated problem upvotes succcessfully");
    //             }
    //             else{
    //                 console.log("Failed to update problem upvote");
    //             }
    //         });
    //     });
    // }


    $('#comment').click(function(){
        $.post('http://localhost:8000/comment/'+ id +'?token=' + $.cookie("token"),{comment: $('#comment-textarea').val(),upvotes:0, downvotes:0, user_id:$.cookie("user_id")})
        .done(function(data){
            if (data.status == "success"){
                console.log("comment added successfuly");
                $('#comment-textarea').val('');
            }
        });
        //refresh comments on click
        var comments1 = "";
        var userCommentIds=[];
        $.get('http://localhost:8000/comment/'+ id +'?token=' + $.cookie("token"),function(data){
            $("#comments").empty();
            //console.log(data);
            var i=1;
            var comments = data[0].comments;
            comments.forEach(function(item){
                // place span here

                userCommentIds.push(item.user_id);
                if (item.user_id){
                    $.get({url:'http://localhost:8000/user/'+ item.user_id +'?token=' + $.cookie("token"),async: false},function(data){
                        //console.log(data.profile_pic);
                        comments1+= '<div id = "left">'
                        comments1+= '<span> <a href = "http://localhost:8008/user/' + item.user_id + '"><img class = "commentpp" src = "' + data.profile_pic + '" id="comment_pic'+i+'" width = "50px" height = "50px"></img></a></span>';
                        comments1+= '</div><div id = "right"><p>' + item.body + '</p></div><br>';
                        i++;
                        $('#comments').append(comments1);
                        comments1 = "";
                    });
                }
            });
            //$('#comments').append(comments1);
        });

    });
    var comments2 = "";
    var userCommentIds=[];
    $.get('http://localhost:8000/comment/'+ id +'?token=' + $.cookie("token"),function(data){
        $("#commments").empty();
        // console.log(data);
        var i=1;
        var comments = data[0].comments;
        comments.forEach(function(item){
            // place span here
            // userCommentIds.push(item.user_id);
            console.log(item.user_id);
            if (item.user_id){
                $.get({url:'http://localhost:8000/user/'+ item.user_id +'?token=' + $.cookie("token"),async: false},function(data){
                    //console.log(data.profile_pic);
                    comments2+= '<div id = "left">'
                    comments2+= '<span> <a href = "http://localhost:8008/user/' + item.user_id + '"><img class = "commentpp" src = "' + data.profile_pic + '" id="comment_pic'+i+'" width = "50px" height = "50px"></img></a></span>';
                    comments2+= '</div><div id = "right"><p>' + item.body + '</p></div><br>';
                    i++;
                    $('#comments').append(comments2);
                    comments2 = "";
                });
            }
        });
    });







    $.get('http://localhost:8000/answers/'+ id +'?token=' + $.cookie("token"),function(data){
        var answers1 = "";
        //console.log(data);
        $("#answers").empty();
        var answers = data.answers;
        //console.log(answers);
        var i = 1;
        answers.forEach(function(item){
            if (item.body != ""){
                answers1 += '<div id = \"answerContainer\">'
                answers1+= '<div id=\"topic'+i+'\" class=\"upvote\">'+'<a class=\"upvote\"></a>'+
                '<span class=\"count\">0</span>'+
                '<a class=\"downvote\"></a>'
                + '<a class = \"star\"> </a>' +
                '</div>';
                answers1+= '<p>' + item.body + '</p><br>';
                //console.log(answers1);
                answers1+= '</div>'
                $('#answers').append(answers1);
                answers1 = "";
                i++;
            }
        });
        for (var j = 1;j<=i;j++){
            $("#topic" +j).upvote();
        }

    })

    $('#answer').click(function(){
        $.post('http://localhost:8000/answers/'+ id +'?token=' + $.cookie("token"),{answer: $('#answer-textarea').val()})
        .done(function(data){
            if (data.status == "success"){
                console.log("answer added successfuly");
                $('#answer-textarea').val('');
            }
        });

        $.get('http://localhost:8000/answers/'+ id +'?token=' + $.cookie("token"),function(data){
            var answers2 = "";
            //console.log(data);
            $("#answers").empty();
            var answers = data.answers;
            var index = 1;
            answers.forEach(function(item){
                if (item.body != ""){
                    answers2 += '<div id = \"answerContainer\">'
                    answers2+= '<div id=\"topic'+index+'\" class=\"upvote\">'+'<a class=\"upvote\"></a>'+
                    '<span class=\"count\">0</span>'+
                    '<a class=\"downvote\"></a>'
                    + '<a class = \"star\"> </a>' +
                    '</div>';
                    answers2+= '<p>' + item.body + '</p>';
                    answers2+= '</div>';
                    $('#answers').append(answers2);
                    $("#topic2").upvote();
                    answers2 = "";
                    index++;
                }
            });
            for (var k = 1;k<=index;k++){
                $("#topic" +k).upvote();
            }
        });

    });
    // var i = 1;
    // userCommentIds.forEach(function(item){
    //   $.get('http://localhost:8000/user/'+item+'?token=' + $.cookie("token"),function(data){
    //       console.log(data.profile_pic);
    //     $('#comment_pic'+i).attr('src',data.profile_pic);
    //
    //   });
    //   i++;
    // });


    //console.log(userCommentIds);
});
