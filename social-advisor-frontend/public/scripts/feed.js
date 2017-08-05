$(document).ready(function(){

        $.get('http://localhost:8000/feed?' + document.cookie,function(data){
            if (data){
                var str = "";
                var i = 1;
                data.forEach(function(problem){
                    console.log(problem._id);
                    str += '<li><div class="collapsible-header">'
                    +'<span class="new badge">'+'</span><i class="material-icons">filter_drama</i>'
                    +problem.title + '</div><div class="collapsible-body">'+'<br>' +
                     '<p>' + problem.description + '</p><br>' +
                     '<a class="btn-vote upvote-'+ i + '" href= "#" onClick="$(\'.upvote-\'+ ' + i + ').addClass(\'active-upvote\');"><i class="material-icons">verified_user</i></a>' +
                     '<a id = "read-more-'+ i +'" href = "http://localhost:8008/problem/' + problem._id + '"> click to view story...</a>'+'</div>'
                    +'</li>';
                    i++;
                });
                $('#results').append(str);
            }
        });
});
