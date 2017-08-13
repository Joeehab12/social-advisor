$(document).ready(function(){
    $('#logout').click(function(){
        $.removeCookie("token");
        $(location).attr('href','http://localhost:8008/');
    });
});
