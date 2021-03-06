$(document).ready(function(){

    $.get('http://localhost:8000/user/'+$.cookie('user_id')+'?token=' + $.cookie("token")).done(function(data){
        if (data){
            $.cookie("profile-pic",data.profile_pic);
            $('#user-img').attr('src',$.cookie('profile-pic'));
        }
    });
    $('.modal').modal();
    $("#report_trigger").click(function(){
        var reports = "";
        var index = 1;
        $('#reports').empty();
        $.get('http://localhost:8000/report?token='+ $.cookie("token"),function(data){
            console.log(data);
            data.forEach(function(item){
                $.post('http://localhost:8000/problem/' + item.problem_id + '?token=' + $.cookie("token"))
                .done(function(problem){
                    reports += '<li><div class="collapsible-header" style = "width:100%">'
                    +'<span class="new badge">'+'</span><i class="material-icons">filter_drama</i>'
                    +problem.title + '</div><div class="collapsible-body">'+'<br>' +
                    '<p>' + problem.description + '</p><br><b>' + item.description + '</b>' +
                    '<a class="btn-vote upvote-'+ index + '" href= "#" onClick="$(\'.upvote-\'+ ' + index + ').addClass(\'active-upvote\');"><i class="material-icons">verified_user</i></a>' +
                    '<a id = "read-more-'+ index +'" href = "http://localhost:8008/problem/' + problem._id + '"> click to view story...</a>'+'</div>'
                    +'</li>';
                    $('#reports').append(reports);
                    reports = "";
                });
            });
        });
    });
    if($.cookie("token")){

        str ='<li>Welcome, <a id = "current-user" href="/user/'+ $.cookie('user_id')+  '">'+ $.cookie('current-user') + '<img id = "user-img" style = "width:30px; height:30px"></img>'+'</a></li>'+'<li><a href="http://localhost:8008/ask">Ask</a></li>'
        + '<li><a id = "logout">Log out</a></li>'+
        '<li><a class = "mylink" href = "#"><img class = "myimg" src = "rsz_notification.png"></img></a></li>';
        $('#nav-mobile').append(str);
    }
    else{
        $('#logged-in').append('<p> You must be logged in to access this page.</p>');
    }
    var url = location.href;
    var query = url.substring(url.lastIndexOf('=')+1);
    var lastIndex = url.lastIndexOf('=');
    console.log(lastIndex);
    if (lastIndex != -1){
        $.post('http://localhost:8000/feed/search?token='+ $.cookie("token"),{keyword: query})
        .done(function(data){

            if (data){
                $('#results').empty();
                $('#empty-search').empty();
                str = "";
                data.forEach(function(problem){

                    str += '<li><div class="collapsible-header" style = "width:100%">'
                    +'<span class="new badge">'+'</span><i class="material-icons">filter_drama</i>'
                    +problem.title + '</div><div class="collapsible-body">'+'<br>' +
                    '<p>' + problem.description + '</p><br>' +
                    '<a class="btn-vote upvote-'+ i + '" href= "#" onClick="$(\'.upvote-\'+ ' + i + ').addClass(\'active-upvote\');"><i class="material-icons">verified_user</i></a>' +
                    '<a id = "read-more-'+ i +'" href = "http://localhost:8008/problem/' + problem._id + '"> click to view story...</a>'+'</div>'
                    +'</li>';
                    i++;
                });
                $('#results').append(str);
                if (str == ""){
                    $('#empty-search').empty();
                    $('#empty-search').append('<p>Search returned no results</p>');

                }
                else{

                }
            }
        });
    }
    // $.get('http://localhost:8000/user/'+$.cookie('user_id')+'?token=' + $.cookie("token")).done(function(data){
    //     if (data){
    //         $.cookie("profile-pic",data.profile_pic);
    //         $('#user-img').attr('src',$.cookie('profile-pic'));
    //     }
    // });

    var str = "";
    var i = 1;
    if (lastIndex == -1){
        $.get('http://localhost:8000/feed?token=' + $.cookie("token"),function(data){
            if (data){
                data.forEach(function(problem){
                    console.log(problem._id);
                    str += '<li><div class="collapsible-header" style = "width:100%">'
                    +'<span class="new badge">'+'</span><i class="material-icons">filter_drama</i>'
                    +problem.title + '</div><div class="collapsible-body">'+'<br>' +
                    '<p>' + problem.description + '</p><br>' +
                    '<a class="btn-vote upvote-'+ i + '" href= "#" onClick="$(\'.upvote-\'+ ' + i + ').addClass(\'active-upvote\');"><i class="material-icons">verified_user</i></a>' +
                    '<a id = "read-more-'+ i +'" href = "http://localhost:8008/problem/' + problem._id+'"> click to view story...</a>'+'</div>'
                    +'</li>';
                    i++;
                });
                $('#results').append(str);
            }
        });
    }
    var j = 1;
    $( "#autocomplete-input" ).keypress(function(event) {
        if(event.which == 13 && $('#autocomplete-input').val() != "") {

            $.post('http://localhost:8000/feed/search?token='+ $.cookie("token"),{keyword: $('#autocomplete-input').val()})
            .done(function(data){

                if (data){
                    $('#results').empty();
                    $('#empty-search').empty();
                    str = "";
                    data.forEach(function(problem){

                        str += '<li><div class="collapsible-header" style = "width:100%">'
                        +'<span class="new badge">'+'</span><i class="material-icons">filter_drama</i>'
                        +problem.title + '</div><div class="collapsible-body">'+'<br>' +
                        '<p>' + problem.description + '</p><br>' +
                        '<a class="btn-vote upvote-'+ j + '" href= "#" onClick="$(\'.upvote-\'+ ' + j + ').addClass(\'active-upvote\');"><i class="material-icons">verified_user</i></a>' +
                        '<a id = "read-more-'+ j +'" href = "http://localhost:8008/problem/' + problem._id + '"> click to view story...</a>'+'</div>'
                        +'</li>';
                        j++;

                    });
                    $('#results').append(str);
                    if (str == ""){
                        $('#empty-search').empty();
                        $('#empty-search').append('<p>Search returned no results</p>');
                    }
                }
            });


        }
    });



});
