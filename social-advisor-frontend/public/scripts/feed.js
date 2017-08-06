$(document).ready(function(){
        var i = 1;
        var str = "";
        $.get('http://localhost:8000/feed?' + document.cookie,function(data){
            if (data){
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

        $( "#autocomplete-input" ).keypress(function(event) {
              if(event.which == 13) {

                  $.post('http://localhost:8000/feed/search?'+ document.cookie,{keyword: $('#autocomplete-input').val()})
                  .done(function(data){
                      if (data){
                          $('#results').empty();
                          str = "";
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



              }





        });

});
